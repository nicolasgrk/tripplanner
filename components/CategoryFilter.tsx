'use client'
import { ExtraCategory } from '@/data/extra'

const labels: Record<ExtraCategory, string> = {
  culture: 'Culture',
  nature: 'Nature',
  food: 'Food',
  shopping: 'Shopping',
  fun: 'Fun',
}

export function CategoryFilter({
  current,
  onChange,
}: {
  current: ExtraCategory | 'all'
  onChange: (c: ExtraCategory | 'all') => void
}) {
  const cats = ['all', 'culture', 'nature', 'food', 'shopping', 'fun'] as const
  return (
    <div className="flex flex-wrap gap-2 pb-4">
      {cats.map(c => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`
            rounded-full px-3 py-1 text-xs backdrop-blur
            ${current === c
              ? 'bg-[#3dff7b]/25 text-[#3dff7b]'
              : 'bg-white/15 text-white/70'}
          `}
        >
          {c === 'all' ? 'Tous' : labels[c]}
        </button>
      ))}
    </div>
  )
}
