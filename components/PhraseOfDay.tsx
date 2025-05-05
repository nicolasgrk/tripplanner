'use client'

import { phrases } from '@/data/phrases'

export function PhraseOfDay() {
  const idx = Math.floor(Date.now() / 86_400_000) % phrases.length
  const p = phrases[idx]

  return (
    <section className="space-y-2 rounded-xl bg-white/10 p-4 backdrop-blur">
      <h2 className="text-sm font-semibold">Phrase japonaise du jour 🇯🇵</h2>
      <p className="text-lg font-bold tracking-wide">{p.jp}</p>
      <p className="text-sm text-white/80 italic">{p.romaji}</p>
      <p className="text-xs text-white/60">≈ “{p.fr}”</p>
    </section>
  )
}
