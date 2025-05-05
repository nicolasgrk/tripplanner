'use client'

import { useEffect, useState } from 'react'

/**
 * Affiche « Départ dans X jours » jusqu’au jour J,
 * puis « Bon voyage ! ».
 *
 * @param dateISO ex. "2025-08-12"
 */
export function Countdown({ dateISO }: { dateISO: string }) {
  const [remaining, setRemaining] = useState<number | null>(null)

  useEffect(() => {
    const update = () => {
      const today = new Date()
      const target = new Date(dateISO)
      const diff = Math.ceil((target.getTime() - today.getTime()) / 86_400_000) // millis per day
      setRemaining(diff > 0 ? diff : 0)
    }

    update()
    const id = setInterval(update, 86_400_000) // 1×/jour
    return () => clearInterval(id)
  }, [dateISO])

  if (remaining === null) return null

  return (
    <div className="rounded-xl bg-white/10 px-4 py-2 text-center text-sm backdrop-blur">
      {remaining === 0
        ? 'Bon voyage !'
        : `Départ dans ${remaining} jour${remaining > 1 ? 's' : ''} ✈️`}
    </div>
  )
}
