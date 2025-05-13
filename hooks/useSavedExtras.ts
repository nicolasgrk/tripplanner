/* hooks/useSavedExtras.ts */
'use client'
import { useEffect, useState } from 'react'

export function useSavedExtras() {
  const [saved, setSaved] = useState<string[]>([])   // 1. état par défaut

  // 2. Lecture locale après le mount (client only)
  useEffect(() => {
    try {
      const json = localStorage.getItem('savedExtras')
      if (json) setSaved(JSON.parse(json))
    } catch { /* ignore: quota / mode privé */ }
  }, [])

  // 3. Persistance
  useEffect(() => {
    localStorage.setItem('savedExtras', JSON.stringify(saved))
  }, [saved])

  const toggle = (id: string) =>
    setSaved(prev => (prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]))

  return { saved, toggle }
}
