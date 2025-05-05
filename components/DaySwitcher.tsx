// components/DaySwitcher.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { getAdjacentDay } from '@/lib/getAdjacentDay'

/** bouton rond réutilisable */
function CircleBtn({
  href,
  children,
  position,
}: {
  href: string
  children: React.ReactNode
  position: 'left' | 'right'
}) {
  return (
    <Link
      href={href}
      className={`
        fixed top-1/2 -translate-y-1/2 z-30
        ${position === 'left' ? 'left-3' : 'right-3'}
        flex h-12 w-12 items-center justify-center rounded-full
        bg-[rgba(255,255,255,0.12)] backdrop-blur-md
        shadow-[0_2px_12px_rgba(0,0,0,0.4)]
        hover:bg-[rgba(255,255,255,0.18)] active:scale-95
      `}
    >
      {children}
    </Link>
  )
}

export function DaySwitcher() {
  const pathname = usePathname()         // /jours/3
  const id = pathname.split('/').pop()!   // "3"
  const { prev, next } = getAdjacentDay(id)

  return (
    <>
      {prev && (
        <CircleBtn href={`/jours/${prev}`} position="left">
          <ChevronLeft />
        </CircleBtn>
      )}

      {next && (
        <CircleBtn href={`/jours/${next}`} position="right">
          <ChevronRight />
        </CircleBtn>
      )}
    </>
  )
}
