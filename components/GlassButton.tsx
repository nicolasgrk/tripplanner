'use client'

import Link from 'next/link'

/**
 * Petit bouton « glassmorphism » avec un emoji
 * Idéal pour quick-actions ou timeline.
 */
export function GlassButton({
  href,
  emoji,
  label,
}: {
  href: string
  emoji: string
  label: string
}) {
  return (
    <Link
      href={href}
      className="
        flex flex-col items-center gap-1 rounded-xl
        bg-white/10 px-4 py-3 text-xs backdrop-blur
        hover:bg-white/15 transition
      "
    >
      <span className="text-lg">{emoji}</span>
      {label}
    </Link>
  )
}
