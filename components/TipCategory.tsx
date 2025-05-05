// components/TipCategory.tsx
'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { TipCard } from '@/components/TipCard'
import { TipCategory as TipCategoryType } from '@/data/tips'

export function TipCategory({ cat }: { cat: TipCategoryType }) {
  // false → la section arrive FERMÉE
  const [open, setOpen] = useState(false)

  return (
    <section
      className="rounded-2xl bg-white/10 backdrop-blur
                 shadow-[0_4px_20px_rgba(0,0,0,0.25)]"
    >
      {/* Header cliquable */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-4 py-3"
      >
        <div className="flex items-center gap-2 text-lg font-semibold">
          <span>{cat.emoji}</span>
          {cat.name}
        </div>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Contenu – seulement si ouvert */}
      {open && (
        <div className="flex flex-col gap-4 px-4 pb-4">
          {cat.tips.map(tip => (
            <TipCard key={tip.id} tip={tip} />
          ))}
        </div>
      )}
    </section>
  )
}
