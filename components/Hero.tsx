// components/Hero.tsx
"use client"
import Image from 'next/image'
export function Hero() {
  return (
    <div className="relative h-56 rounded-b-[2.5rem] overflow-hidden">
      <Image src="/images/hero.jpg" alt="" fill className="object-cover" priority />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      <h1 className="absolute bottom-6 left-6 text-2xl font-bold">Voyage au Japon</h1>
    </div>
  )
}

