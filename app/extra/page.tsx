// app/extra/page.tsx
'use client'

import { useState } from 'react'
import { extras, ExtraCategory } from '@/data/extra'
import { ExtraCard } from '@/components/ExtraCard'
import { CategoryFilter } from '@/components/CategoryFilter'

export default function ExtraPage() {
  const [cat, setCat] = useState<ExtraCategory | 'all'>('all')
  const list = cat === 'all' ? extras : extras.filter(e => e.category === cat)

  return (
    <main className="mx-auto flex max-w-screen-lg flex-col gap-8 px-4 pb-32 pt-6">
      <h1 className="text-3xl font-bold">Extras à découvrir</h1>

      <CategoryFilter current={cat} onChange={setCat} />

      {/* ───────────── Grille responsive ───────────── */}
      <div
        className="
          grid gap-4
          grid-cols-2        /* < 640 px : 2 colonnes */
          sm:grid-cols-2     /* 640–767 px : 2 colonnes */
          md:grid-cols-3     /* 768–1023 px : 3 colonnes */
          lg:grid-cols-4     /* ≥ 1024 px : 4 colonnes */
        "
      >
        {list.map(p => (
          <ExtraCard key={p.id} place={p} />
        ))}
      </div>

      {list.length === 0 && (
        <p className="text-center text-sm text-white/60">
          Pas d’extra dans cette catégorie.
        </p>
      )}
    </main>
  )
}
