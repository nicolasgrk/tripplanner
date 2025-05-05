'use client'

import { useEffect, useState } from 'react'

export function CurrencyWidget() {
  const [rate, setRate] = useState<number | null>(null)   // 1 € → ¥
  const [eur, setEur] = useState('1')
  const yen = rate ? (parseFloat(eur || '0') * rate).toFixed(0) : '…'

  // fetch 1×/jour
  useEffect(() => {
    fetch('https://api.exchangerate.host/latest?base=EUR&symbols=JPY')
      .then(r => r.json())
      .then(d => setRate(d.rates.JPY))
      .catch(() => setRate(165)) // fallback valeur fixe
  }, [])

  return (
    <section className="space-y-2 rounded-xl bg-white/10 p-4 backdrop-blur">
      <h2 className="text-sm font-semibold">Convertisseur ¥ / €</h2>

      <div className="flex items-center gap-2">
        <input
          type="number"
          value={eur}
          onChange={e => setEur(e.target.value)}
          className="w-20 rounded bg-white/20 px-2 py-1 text-center outline-none"
        />
        <span className="text-lg">€</span>
        <span className="mx-2">≈</span>
        <span className="w-24 text-right tabular-nums">{yen}</span>
        <span className="text-lg">¥</span>
      </div>

      {rate && (
        <p className="text-xs text-white/60">1 € = {rate.toFixed(2)} ¥ (exchangerate.host)</p>
      )}
    </section>
  )
}
