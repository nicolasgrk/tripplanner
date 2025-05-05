/* data/tips.ts — Tips pratico-pratiques */

export interface Tip {
  id: string
  title: string
  body: string
  icon?: string        // nom Lucide (kebab-case)
  ctaLabel?: string
  ctaUrl?: string
}

export interface TipCategory {
  id: string
  name: string
  emoji: string
  tips: Tip[]
}

export const tipCategories: TipCategory[] = [
  /* ───────── TRANSPORT ───────── */
  {
    id: 'transport',
    name: 'Transport',
    emoji: '🚉',
    tips: [
      {
        id: 'suica-apple',
        title: 'Suica / Pasmo dans Apple Wallet',
        body: 'Ajoute ta Suica (ou Pasmo) virtuelle, recharge CB : paye métro, bus, konbini même hors Tokyo.',
        icon: 'contactless-payment',
      },
      {
        id: 'yamanote',
        title: 'Boucle Yamanote',
        body: 'Ligne verte aérienne : Shinjuku, Shibuya, Ueno, Akihabara… 90 % des spots touristiques.',
        icon: 'train',
      },
      {
        id: 'jr-pass',
        title: 'JR Pass – comparer !',
        body: 'Le Whole Japan coûte ≈ ¥50 000. Calcule tes trajets sur Japan Experience avant d’acheter.',
        icon: 'calculator',
        ctaLabel: 'Comparer',
        ctaUrl: 'https://www.japan-experience.com/fr/jr-pass',
      },
      {
        id: 'last-metro',
        title: 'Dernier métro',
        body: 'À Tokyo, derniers départs ≈ 0 h 30. Après : taxi cher… ou 25 000 pas !',
        icon: 'clock',
      },
      {
        id: 'fuji-train',
        title: 'Train pour le mont Fuji',
        body: 'Shinjuku►Kawaguchiko 2 h 50 · ¥2 510 (changement Otsuki) ou direct « Fuji Excursion » 1 h 50 · ¥4 130.',
        icon: 'mountain',
      },
      {
        id: 'takkyubin',
        title: 'Takkyūbin (luggage forwarding)',
        body: 'Envoie ta valise d’hôtel en hôtel (¥2-3 k) et voyage léger en shinkansen.',
        icon: 'suitcase',
      },
      {
        id: 'seat-reserve',
        title: 'Réserver son siège JR',
        body: 'Aux bornes vertes ou appli JR East. Gratuit avec JR Pass – utile en haute saison.',
        icon: 'chair',
      },
    ],
  },

  /* ───────── CONNECTIVITÉ ─────── */
  {
    id: 'connectivite',
    name: 'Connectivité',
    emoji: '📶',
    tips: [
      {
        id: 'sim-jpex',
        title: 'SIM 15 j illimitée',
        body: 'Japan Experience : ≈ 28 € data illimitée / 15 j. Plug & play dès l’aéroport.',
        icon: 'sim-card',
        ctaLabel: 'Commander',
        ctaUrl: 'https://www.japan-experience.com/fr/produits/sim',
      },
      {
        id: 'pocket-wifi',
        title: 'Pocket Wi-Fi',
        body: 'Location aéroport : ≈ ¥400/jour, 10 appareils en 4G.',
        icon: 'router',
      },
      {
        id: 'free-wifi',
        title: 'Wi-Fi gratuit',
        body: 'SSID « Japan Free Wi-Fi » présent dans gares JR et 7-Eleven.',
        icon: 'wifi',
      },
    ],
  },

  /* ───────── APPLICATIONS ─────── */
  {
    id: 'applis',
    name: 'Applications',
    emoji: '📱',
    tips: [
      {
        id: 'google-translate-offline',
        title: 'Google Translate hors-ligne',
        body: 'Télécharge Japonais + Anglais ; la caméra traduit les menus instantanément.',
        icon: 'download',
      },
      {
        id: 'navitime',
        title: 'Navitime Transit',
        body: 'Itinéraires métro/JR hors-ligne, numéros de quai et tarif exact.',
        icon: 'map',
        ctaLabel: 'App Store',
        ctaUrl: 'https://apps.apple.com/app/navitime-transit/id474500851',
      },
      {
        id: 'go-taxi',
        title: 'GO Taxi',
        body: 'Commander un taxi sans japonais, paiement in-app.',
        icon: 'car',
      },
    ],
  },

  /* ───────── PAIEMENT ─────────── */
  {
    id: 'argent',
    name: 'Paiement',
    emoji: '💴',
    tips: [
      {
        id: 'cash-is-king',
        title: 'Toujours un peu de cash',
        body: 'Petits restos et temples sont souvent « cash only ». Vise ¥10-15 k sur toi.',
        icon: 'wallet',
      },
      {
        id: 'atm-7',
        title: 'Retrait 7-Eleven',
        body: 'ATM 24 h/24, Visa / Master, frais modérés.',
        icon: 'banknote',
      },
      {
        id: 'tax-free',
        title: 'Tax-Free shopping',
        body: 'Achats > ¥5 000 hors food : 10 % de TVA remboursée. Passeport obligatoire.',
        icon: 'receipt',
      },
      {
        id: 'ic-paywave',
        title: 'Sans contact local',
        body: 'Logo 💳 IC ; Apple Pay « Express Transit » = pas de FaceID nécessaire.',
        icon: 'credit-card',
      },
    ],
  },

  /* ───────── ÉTIQUETTE ────────── */
  {
    id: 'etiquette',
    name: 'Étiquette',
    emoji: '🙇‍♂️',
    tips: [
      {
        id: 'shoes-off',
        title: 'Chaussures à l’entrée',
        body: 'Ryokan, certains restos : enlève tes chaussures. Chaussettes propres !',
        icon: 'shoe',
      },
      {
        id: 'trash-rare',
        title: 'Poubelles rares',
        body: 'Garde tes déchets jusqu’au konbini. Tri obligatoire.',
        icon: 'trash-2',
      },
      {
        id: 'onsen-tattoo',
        title: 'Tattoos à l’onsen',
        body: 'Cherche l’icône « Tattoo OK » ou prends un patch couvrant.',
        icon: 'flame',
      },
      {
        id: 'escalator',
        title: 'Escalators : file',
        body: 'Tokyo : halte à gauche · Osaka : halte à droite. Laisse passer.',
        icon: 'stairs',
      },
    ],
  },

  /* ───────── SANTÉ / RYTHME ───── */
  {
    id: 'sante',
    name: 'Sur place',
    emoji: '🥾',
    tips: [
      {
        id: 'walking',
        title: 'Prépare tes mollets !',
        body: '≈ 25 000 pas par jour. Baskets amorties + pansements anti-ampoules.',
        icon: 'footprints',
      },
      {
        id: 'num-urgence',
        title: 'Urgences 119 / 110',
        body: '🔥 119 = pompiers / ambulance · 👮 110 = police. Mémorise-les.',
        icon: 'phone',
      },
      {
        id: 'heat',
        title: 'Chaleur & hydratation',
        body: 'Été humide : bois « Pocari Sweat » ou « Aquarius » (120 ¥ aux distributeurs).',
        icon: 'thermometer',
      },
    ],
  },
]
