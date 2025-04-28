"use client";

import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
} from "recharts";
import React from "react";

export interface SkillDatum {
  category: string;
  value: number; // 0‒100
}

interface SkillsRadarProps {
  /**
   * Tableau de compétences. Si omis, un dataset d'exemple est utilisé.
   */
  data?: SkillDatum[];
}

const defaultData: SkillDatum[] = [
  { category: "Design", value: 60 },
  { category: "Dev", value: 80 },
  { category: "Admin", value: 30 },
  { category: "Com'", value: 55 },
  { category: "Prospect", value: 40 },
];

export default function SkillsRadar({ data = defaultData }: SkillsRadarProps) {
  return (
    <div className="w-full h-64 bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-md flex items-center justify-center p-4">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="80%">
          <PolarGrid strokeOpacity={0.3} />
          <PolarAngleAxis
            dataKey="category"
            tick={{ fill: "black", fontSize: 12 }}
            tickLine={false}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Compétences"
            dataKey="value"
            stroke="rgba(255,255,255,0.8)"
            fill="rgba(255,255,255,0.4)"
            fillOpacity={0.45}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
