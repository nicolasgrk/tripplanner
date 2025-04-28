"use client";

import { useEffect, useState } from "react";
import { CalendarDays } from "lucide-react";

interface VisionHeaderProps {
  userName: string;
  dailyObjective: string;
}

export default function VisionHeader({ userName, dailyObjective }: VisionHeaderProps) {
  const [time, setTime] = useState<string>(() => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    }, 60_000); // update every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="w-full rounded-3xl bg-white/15 backdrop-blur-xl border border-white/25 shadow-[0_8px_32px_rgba(31,38,135,0.15)] px-8 py-6 flex flex-col gap-2 animate-fade-in">
      <div className="flex items-center gap-3 text-xl md:text-2xl font-semibold">
        <CalendarDays className="w-6 h-6 opacity-80" />
        <span>
          Salut <span className="text-indigo-200">{userName}</span>, il est {time}
        </span>
      </div>
      <p className="text-base md:text-lg text-white/80 mt-1">
        🎯 <span className="font-medium text-white">{dailyObjective}</span>
      </p>
    </header>
  );
}
