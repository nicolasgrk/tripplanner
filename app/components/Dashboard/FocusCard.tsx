"use client";

import { useEffect, useState, useRef } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";

interface FocusCardProps {
  focusMinutes?: number; // default 25
}

export default function FocusCard({ focusMinutes = 25 }: FocusCardProps) {
  const totalSeconds = focusMinutes * 60;
  const [secondsLeft, setSecondsLeft] = useState<number>(totalSeconds);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // convert seconds to MM:SS
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60)
      .toString()
      .padStart(2, "0");
    const sec = (s % 60).toString().padStart(2, "0");
    return `${m}:${sec}`;
  };

  // handle timer ticking
  useEffect(() => {
    if (!isRunning) return;
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current!);
          setIsRunning(false);
          return totalSeconds; // reset automatically when finished
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(intervalRef.current!);
  }, [isRunning, totalSeconds]);

  const handleStartPause = () => {
    setIsRunning((prev) => !prev);
  };

  const handleReset = () => {
    setIsRunning(false);
    setSecondsLeft(totalSeconds);
  };

  // percent for radial background (CSS conic-gradient)
  const progress = ((totalSeconds - secondsLeft) / totalSeconds) * 100;

  return (
    <div
      className="relative  rounded-[2rem] border border-white/25 bg-white/15 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.2)] flex flex-col items-center justify-center select-none"
      style={{
        backgroundImage: `conic-gradient(rgba(255,255,255,0.35) ${progress}%, transparent ${progress}%)`,
      }}
    >
      <span className="text-4xl font-semibold text-white drop-shadow-sm">
        {formatTime(secondsLeft)}
      </span>
      <div className="flex gap-4 mt-6">
        <button
          onClick={handleStartPause}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          {isRunning ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button
          onClick={handleReset}
          className="p-3 rounded-full bg-white/20 hover:bg-white/30 transition"
        >
          <RotateCcw size={20} />
        </button>
      </div>
    </div>
  );
}
