'use client'
import { useEffect, useState } from 'react'

export function useSavedExtras() {
  const [saved, setSaved] = useState<string[]>(() =>
    JSON.parse(localStorage.getItem('savedExtras') || '[]'),
  )

  useEffect(() => {
    localStorage.setItem('savedExtras', JSON.stringify(saved))
  }, [saved])

  const toggle = (id: string) =>
    setSaved(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id],
    )

  return { saved, toggle }
}
