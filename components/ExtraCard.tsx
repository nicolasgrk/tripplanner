'use client'
import Image from 'next/image'
import { Bookmark, BookmarkCheck, MapPin } from 'lucide-react'
import { useState } from 'react'
import { ExtraPlace } from '@/data/extra'
import { useSavedExtras } from '@/hooks/useSavedExtras'

export function ExtraCard({ place }: { place: ExtraPlace }) {
  const [open, setOpen] = useState(false)
  const { saved, toggle } = useSavedExtras()
  const isSaved = saved.includes(place.id)

  return (
    <div className="
      relative overflow-hidden rounded-[1.5rem] border border-white/20
      bg-[rgba(255,255,255,0.10)] backdrop-blur-lg
      shadow-[0_6px_24px_rgba(0,0,0,0.35)] transition
      group/card
    ">
      {/* photo */}
      <div className="relative aspect-[4/3] w-full">
        <Image src={place.image} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
        <h3 className="absolute bottom-4 left-4 right-4 text-lg font-semibold drop-shadow-lg">
          {place.title}
        </h3>
      </div>

      {/* description */}
      <p className="px-4 pt-3 pb-16 text-sm leading-relaxed text-white/90">
        {place.description}
      </p>

      {/* actions */}
      <div className="absolute bottom-4 left-4 flex gap-3">
        {/* toggle map */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3dff7b] text-[#001628] shadow-[0_0_12px_3px_rgba(61,255,123,0.35)]"
        >
          <MapPin size={16} />
        </button>

        {/* save */}
        <button
          onClick={() => toggle(place.id)}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
        >
          {isSaved ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        </button>
      </div>

      {open && (
        <iframe
          src={place.mapUrl}
          loading="lazy"
          className="h-52 w-full border-t border-white/10"
        />
      )}
    </div>
  )
}
