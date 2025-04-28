"use client";

import React from "react";

export interface PipelineStage {
  name: string;
  count: number;
  /**
   * Tailwind color key, e.g. "indigo", "emerald" …
   * Defaults will be used if omitted.
   */
  color?: string;
}

interface PipelineBarProps {
  stages?: PipelineStage[];
}

const defaultStages: PipelineStage[] = [
  { name: "Leads", count: 10, color: "sky" },
  { name: "Devis", count: 3, color: "violet" },
  { name: "En cours", count: 4, color: "amber" },
  { name: "Payé", count: 10, color: "emerald" },
];

export default function PipelineBar({ stages = defaultStages }: PipelineBarProps) {
  const total = stages.reduce((sum, s) => sum + s.count, 0);

  return (
    <div className="w-full flex rounded-3xl overflow-hidden border border-white/25 backdrop-blur-xl shadow-[0_4px_16px_rgba(31,38,135,0.15)]">
      {stages.map((stage, idx) => {
        const widthPct = (stage.count / total) * 100;
        const color = stage.color ?? ["sky","violet","amber","emerald"][idx % 4];
        // build gradient for subtle accent
        const gradient = `bg-gradient-to-br from-${color}-200/40 to-${color}-400/20`;
        return (
          <div
            key={stage.name}
            style={{ width: `${widthPct}%` }}
            className={`${gradient} relative flex items-center justify-center py-4`}
          >
            <span className="text-xs font-medium text-white drop-shadow-sm">
              {stage.name} • {stage.count}
            </span>
            {/* translucent divider except first */}
            {idx !== 0 && (
              <span className="absolute left-0 h-full w-px bg-white/30" />
            )}
          </div>
        );
      })}
    </div>
  );
}
