// components/StepCounter.tsx
'use client'
import { useSteps } from '@/hooks/useSteps'
import { useEffect, useState } from 'react'
import { badges } from '@/data/jours'
import { Footprints, Bluetooth } from 'lucide-react'

export function StepCounter({ dateKey }: { dateKey: string }) {
  const { steps, setSteps, connectBluetooth } = useSteps(dateKey)
  const [earned, setEarned] = useState<string[]>([])

  // calc badges en temps réel
  useEffect(() => {
    const unlocked = badges.filter(b => b.condition(steps)).map(b => b.id)
    setEarned(unlocked)
  }, [steps])

  return (
    <section className="rounded-xl bg-white/10 p-4 backdrop-blur-md mt-4">
      <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold">
        <Footprints size={18} /> Pas du jour
      </h4>

      <div className="flex items-center gap-4">
        <input
          type="number"
          className="w-24 rounded-md bg-white/10 p-2 text-center outline-none"
          value={steps}
          onChange={e => setSteps(Number(e.target.value))}
        />
        {/* {('bluetooth' in navigator) && (
          <button
            onClick={connectBluetooth}
            className="flex items-center gap-1 rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm hover:bg-white/30"
          >
            <Bluetooth size={14} /> Sync BT
          </button>
        )} */}
      </div>

      {/* badges */}
      <div className="mt-3 flex flex-wrap gap-2">
        {badges.map(b => (
          <span
            key={b.id}
            className={`
              flex items-center gap-1 rounded-full px-3 py-1 text-xs
              ${earned.includes(b.id)
                ? 'bg-[#3dff7b]/30 text-[#3dff7b]'
                : 'bg-white/10 text-white/60'}
            `}
          >
            {b.emoji} {b.label}
          </span>
        ))}
      </div>
    </section>
  )
}
