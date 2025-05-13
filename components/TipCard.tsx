// components/TipCard.tsx
'use client'

import { Tip } from '@/data/tips'
import * as Lucide from 'lucide-react'
import { ExternalLink, HelpCircle } from 'lucide-react'

/** "contactless-payment" -> "ContactlessPayment" */
function toPascal(kebab: string) {
  return kebab
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join('')
}

export function TipCard({ tip }: { tip: Tip }) {
  // Résoudre dynamiquement l’icône Lucide
  let Icon = HelpCircle
  if (tip.icon) {
    const name = toPascal(tip.icon)
    Icon = (Lucide as any)[name] ?? HelpCircle
  }

  return (
    <div
      className="
        flex flex-col gap-3
        rounded-[1.5rem] border border-white/20
        bg-[rgba(255,255,255,0.12)] p-4
        shadow-[0_4px_24px_rgba(0,0,0,0.35)]
      "
    >
      <div className="flex items-start gap-3">
        <Icon size={20} className="shrink-0 text-[#3dff7b]" />
        <h3 className="text-base font-semibold">{tip.title}</h3>
      </div>

      <p className="whitespace-pre-wrap text-sm leading-relaxed">
        {tip.body}
      </p>

      {tip.ctaUrl && (
        <a
          href={tip.ctaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="
            mt-auto inline-flex w-max items-center gap-1 rounded-full
            bg-[#3dff7b] px-3 py-1 text-xs font-medium text-[#001628]
            shadow-[0_0_12px_2px_rgba(61,255,123,0.35)]
            transition active:scale-95
          "
        >
          {tip.ctaLabel ?? 'Ouvrir'} <ExternalLink size={14} />
        </a>
      )}
    </div>
  )
}
