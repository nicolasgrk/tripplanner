import {
    Mail,
    Phone,
    MessageSquare,
    CalendarDays,
    type LucideIcon
  } from 'lucide-react';
  import type { Exchange as ExchangeType } from '@/types/exchange';
  
  const iconMap: Record<ExchangeType['type'], LucideIcon> = {
    email: Mail,
    call: Phone,
    meeting: CalendarDays,
    message: MessageSquare,
  };
  
  export default function ExchangeTimeline({ exchanges }: { exchanges: ExchangeType[] }) {
    return (
      <ul className="relative ml-4 border-l border-white/15">
        {exchanges.map((e) => {
          const Icon = iconMap[e.type];
          return (
            <li key={e.id} className="relative mb-8 ml-3 last:mb-0 group">
              {/* ● Point + icône */}
              <span className="absolute -left-[22px] top-2 flex h-5 w-5 items-center justify-center rounded-full
                               bg-white/15 backdrop-blur-md border border-white/30 shadow">
                <Icon
                  size={14}           // ▲ plus grand
                  strokeWidth={1.5}   // ▲ trait un peu plus épais
                  className="text-white/90"
                />
              </span>
  
              {/* Carte verre */}
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl px-4 py-3
                              shadow-[0_4px_20px_rgba(0,0,0,0.12)]
                              hover:shadow-[0_6px_30px_rgba(0,0,0,0.18)] transition">
                <div className="flex items-center justify-between text-xs mb-1 opacity-80">
                  <span className="flex items-center gap-2 font-medium tracking-wide">
                    <Icon size={14} strokeWidth={1.5} className="opacity-70" />
                    {e.type.toUpperCase()}
                  </span>
                  <time>{e.date}</time>
                </div>
                <p className="text-sm leading-snug text-white/90">{e.content}</p>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
  