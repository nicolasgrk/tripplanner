// components/BottomNav.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Home,
  Map,
  Star,   // → onglet “Extras”
  Info,
} from 'lucide-react'

const neon  = 'text-[#3dff7b]'
const muted = 'text-white/60'

export function BottomNav() {
  const pathname = usePathname()

  const items = [
    {
      key: 'home',
      href: '/',
      icon: Home,
      label: 'Accueil',
      active: pathname === '/',
    },
    {
      key: 'jours',
      href: '/jours/1',         // la route liste /jours/1, /2, etc.
      icon: Map,
      label: 'Jours',
      active: pathname.startsWith('/jours'),
    },
    {
      key: 'extra',
      href: '/extra',
      icon: Star,
      label: 'Extras',
      active: pathname.startsWith('/extra'),
    },
    {
      key: 'tips',
      href: '/tips',
      icon: Info,
      label: 'Tips',
      active: pathname.startsWith('/tips'),
    },
  ]

  return (
    <nav
      className="
        fixed inset-x-0 bottom-0 z-20 mx-auto mb-3 flex max-w-sm
        items-center justify-around gap-1 px-6 py-3
        rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-lg
        shadow-[0_4px_24px_rgba(0,0,0,0.25)]
      "
    >
      {items.map(({ key, href, icon: Icon, label, active }) => (
        <Link
          key={key}
          href={href}
          aria-label={label}
          className={`
            flex h-12 w-12 items-center justify-center
            ${active ? neon : muted}
            hover:text-[#3dff7b] transition
          `}
        >
          <Icon strokeWidth={2} />
        </Link>
      ))}
    </nav>
  )
}
