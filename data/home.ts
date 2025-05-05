// data/home.ts
export const departureDate = '2025-08-12'   // ISO YYYY-MM-DD

export const quickLinks = [
  { href: '/jours/1', label: 'Itinéraire', emoji: '🗺️' },
  { href: '/tips',    label: 'Conseils',    emoji: '💡' },
  { href: '/extra',   label: 'Extras',      emoji: '✨' },
]

export const essentials = [
  {
    id: 'jrpass',
    title: 'Japan Rail Pass',
    desc: 'Voyage illimité sur la plupart des trains JR.',
    emoji: '🚄',
  },
  {
    id: 'suica',
    title: 'Carte Suica',
    desc: 'Payez métro, bus et konbini sans monnaie.',
    emoji: '💳',
  },
  {
    id: 'esim',
    title: 'eSIM / Wi-Fi',
    desc: 'Reste connecté partout pour ~3 €/jour.',
    emoji: '📶',
  },
]
