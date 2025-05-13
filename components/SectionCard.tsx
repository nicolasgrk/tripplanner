"use client"
import Image from 'next/image'
import { useState } from 'react'
import { Section } from '@/data/jours'
import { MapPin, Utensils, Info } from 'lucide-react'

export function SectionCard({ section }: { section: Section }) {
  const [panel, setPanel] = useState<'map' | 'food' | 'info' | null>(null)
  const toggle = (p: typeof panel) => setPanel(panel === p ? null : p)

  return (
    <div className="
      overflow-hidden rounded-[1.75rem] border border-white/20
      bg-[rgba(255,255,255,0.12)] backdrop-blur-xl
      shadow-[0_6px_32px_rgba(0,0,0,0.35)] transition
    ">
      {/* ------- Photo ------------------------------------------------ */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={section.image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <h3 className="absolute bottom-4 left-4 right-4 text-xl font-semibold drop-shadow-lg">
          {section.title}
        </h3>
      </div>

      {/* ------- Description courte ---------------------------------- */}
      <p className="px-4 pt-4 text-sm leading-relaxed text-white/90">
        {section.description}
      </p>

      {/* ------- Row d’actions – DANS le flux ------------------------- */}
      <div className="px-4 py-4 flex gap-3">
        {/* MAP */}
        <button
          onClick={() => toggle('map')}
          className="flex h-10 w-10 items-center justify-center rounded-full
                     bg-[#3dff7b] text-[#001628]
                     shadow-[0_0_15px_3px_rgba(61,255,123,0.35)]">
          <MapPin size={18} />
        </button>

        {/* FOOD */}
        {section.foodDetails && (
          <button
            onClick={() => toggle('food')}
            className="flex h-10 w-10 items-center justify-center rounded-full
                       bg-white/20  hover:bg-white/30">
            <Utensils size={18} />
          </button>
        )}

        {/* INFO */}
        {section.extraDetails && (
          <button
            onClick={() => toggle('info')}
            className="flex h-10 w-10 items-center justify-center rounded-full
                       bg-white/20  hover:bg-white/30">
            <Info size={18} />
          </button>
        )}
      </div>

      {/* ------- Panneaux déroulants ------------------------------- */}
      {panel === 'map' && (
        <iframe
          src={section.mapUrl}
          loading="lazy"
          className="h-56 w-full border-t border-white/10"
        />
      )}

      {panel === 'food' && section.foodDetails && (
        <div className="px-4 pb-4 border-t border-white/10 text-sm space-y-1">
          <p>{section.foodDetails.text}</p>
          {section.foodDetails.url && (
            <a
              href={section.foodDetails.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3dff7b] underline"
            >
              Ouvrir dans Google Maps
            </a>
          )}
        </div>
      )}

      {panel === 'info' && (
        <div className="px-4 pb-4 border-t border-white/10 text-sm">
          {section.extraDetails}
        </div>
      )}
    </div>
  )
}
