'use client'

import { Hero } from '@/components/Hero'
import { Countdown } from '@/components/Countdown'
import { GlassButton } from '@/components/GlassButton'
import { quickLinks, essentials, departureDate } from '@/data/home'
import { CurrencyWidget } from '@/components/CurrencyWidget'
import { PhraseOfDay }   from '@/components/PhraseOfDay'

export default function HomeDashboard() {
  return (
    <main className="mx-auto flex max-w-sm flex-col gap-8 px-4 pb-32">
      <Hero />

      {/* Compteur J-X */}
      <Countdown dateISO={departureDate} />

      {/* Quick actions */}
      <div className="flex justify-between pt-2">
        {quickLinks.map(l => (
          <GlassButton key={l.href} href={l.href} emoji={l.emoji} label={l.label} />
        ))}
      </div>

      {/* Essentiels */}
      <section className="space-y-4">
        <h2 className="text-lg font-semibold">Essentiels avant le départ</h2>
        {essentials.map(e => (
          <div
            key={e.id}
            className="backdrop-blur flex gap-3 rounded-2xl bg-white/10 p-4"
          >
            <span className="text-2xl">{e.emoji}</span>
            <div>
              <h3 className="font-medium">{e.title}</h3>
              <p className="text-sm text-white/80">{e.desc}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Mini-timeline jours */}
      <section className="space-y-3">
        <h2 className="text-lg font-semibold">Aperçu de l’itinéraire</h2>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {Array.from({ length: 10 }).map((_, i) => (
            <GlassButton
              key={i}
              href={`/jours/${i + 1}`}
              emoji="🗓️"
              label={`Jour ${i + 1}`}
            />
          ))}
        </div>
      </section>

      <CurrencyWidget />
      <PhraseOfDay />
    </main>
  )
}
