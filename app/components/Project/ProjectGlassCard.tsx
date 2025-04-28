'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Clock } from 'lucide-react';
import type { Project } from '@/types/project';

export default function ProjectGlassCard({ project }: { project: Project }) {
  const statusColor = {
    todo: 'from-yellow-400/40 to-yellow-400/10',
    doing: 'from-blue-400/40 to-blue-400/10',
    done: 'from-green-400/40 to-green-400/10',
    blocked: 'from-red-400/40 to-red-400/10',
  }[project.status];

  return (
    <motion.article
      whileHover={{ y: -4, rotateX: 2, rotateY: 0.5 }}
      transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      className={`relative p-6 rounded-3xl border border-white/25
                  bg-gradient-to-br ${statusColor}
                  backdrop-blur-[14px]
                  overflow-hidden`}
    >
      {/* Reflet glissant */}
      <motion.span
        initial={{ x: '-150%' }}
        animate={{ x: ['-150%', '150%'] }}
        transition={{ repeat: Infinity, duration: 8, ease: 'linear' }}
        className="absolute inset-y-0 w-1/3 bg-white/5 blur-md rotate-12"
      />

      <h3 className="font-semibold text-lg mb-1">{project.title}</h3>
      <p className="text-sm text-white/70 mb-4">{project.client}</p>

      {/* Dates */}
      <div className="flex items-center gap-2 text-xs text-white/60">
        <CalendarCheck size={14} />
        <span>{project.startDate}</span>
        <Clock size={14} />
        <span>{project.dueDate}</span>
      </div>

      {/* Donut de progression */}
      <svg viewBox="0 0 36 36" className="absolute top-4 right-4 w-9 h-9">
        <circle cx="18" cy="18" r="15.915" fill="none" stroke="white" strokeOpacity="0.1" strokeWidth="3" />
        <circle
          cx="18" cy="18" r="15.915" fill="none"
          stroke="white" strokeWidth="3" strokeLinecap="round"
          strokeDasharray={`${project.progress}, 100`} transform="rotate(-90 18 18)"
        />
        <text x="18" y="20.35" className="text-xs fill-white" textAnchor="middle">
          {project.progress}%
        </text>
      </svg>
    </motion.article>
  );
}
