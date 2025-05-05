// lib/getAdjacentDay.ts
import { days } from '@/data/jours'

export function getAdjacentDay(id: string) {
  const ids = Object.keys(days).sort((a, b) => Number(a) - Number(b))
  const idx = ids.indexOf(id)
  return {
    prev: idx > 0 ? ids[idx - 1] : null,
    next: idx < ids.length - 1 ? ids[idx + 1] : null,
  }
}
