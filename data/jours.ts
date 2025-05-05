// data/jours.ts
export interface Section {
  title: string
  description: string
  image: string
  mapUrl: string           // iFrame
  foodDetails?: {
    text: string
    url?: string
  }
  extraDetails?: string    // texte libre
}

export interface Badge {
  id: string
  label: string      // « Walker Lv.1 »
  emoji: string      // 🏃
  condition: (steps: number) => boolean
}

export type DayData = {
  sections: Section[]
}


export const badges: Badge[] = [
  { id: 'walker-1', label: 'Walker Lv. 1', emoji: '🥾',  condition: s => s >= 5_000 },
  { id: 'walker-2', label: 'Walker Lv. 2', emoji: '🏃',  condition: s => s >= 10_000 },
  { id: 'marathon', label: 'Marathoner',    emoji: '🎖️', condition: s => s >= 42_195 },
]

export const days: Record<string, DayData> = {
  '1': {
    sections: [
      {
        title: 'Matin – Arrivée & premiers pas à Shinjuku',
        description:
          'Check-in (ou simple dépôt des bagages) puis balade sous les néons de Shinjuku, passage par le Tokyo Metropolitan Government Building pour une vue gratuite sur la ville.',
        image: '/images/jours/narita.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Snack express au 7-Eleven : onigiri + sandwich tamago.',
          url: '',
        },
        extraDetails:
          'Recharge d’emblée ta carte Suica/Pasmo à l’aéroport pour gagner du temps.',
      },
      {
        title: 'Après-midi – Shinjuku & Kabukichō',
        description:
          'Découverte des ruelles Omoide Yokochō, Godzilla Road et arcades de Kabukichō.',
        image: '/images/jours/shinjuku.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Yakitori au comptoir d’Omoide Yokochō (set de 5 brochettes ~¥1 000).',
          url: '',
        },
        extraDetails:
          'Plateau-observatoire du M.G.B. ouvert jusqu’à 22 h, gratuit.',
      },
      {
        title: 'Soir – Golden Gai',
        description:
          'Mini-bars intimistes (5–10 places) : parfait pour un 1ᵉʳ kanpai.',
        image: '/images/jours/goldengai.jpeg',
        mapUrl: '',
        foodDetails: {
          text: 'Ramen Ichiran Shinjuku (service 24 h/24).',
          url: '',
        },
        extraDetails: 'Arrive avant 21 h pour éviter la file.',
      },
    ],
  },

  '2': {
    sections: [
      {
        title: 'Matin – Asakusa & Sensō-ji',
        description:
          'Temple bouddhiste, rue Nakamise, balade le long du Sumida-gawa.',
        image: '/images/jours/asakusa.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Tempura chez Daikokuya ou melon-pan tout chaud à la sortie du temple.',
          url: '',
        },
        extraDetails: 'Arriver avant 9 h pour voir la grande lanterne sans foule.',
      },
      {
        title: 'Après-midi – Shibuya',
        description:
          'Shibuya Crossing, statue d’Hachikō, shopping Center-Gai & Shibuya Sky.',
        image: '/images/jours/Shibuya.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Déj rapide au food-court DEAN & DELUCA (Shibuya Stream).',
          url: '',
        },
        extraDetails:
          'Plateforme Shibuya Sky : réserver le créneau sunset (J-2 mini).',
      },
      {
        title: 'Soir – Shibuya Nightlife',
        description:
          'Bars à cocktails, karaokés et arcades jusqu’au bout de la nuit.',
        image: '/images/jours/shibuyaSki.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Sushi-train Uobei (fun et bon marché).',
          url: '',
        },
        extraDetails: 'File d’attente plus courte après 22 h.',
      },
    ],
  },

  '3': {
    sections: [
      {
        title: 'Matin – Ueno Park & musées',
        description:
          'Promenade autour des étangs Shinobazu, visite éventuelle du Musée National de Tokyo.',
        image: '/images/jours/ueno.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Nezu Kamachiku restaurant de Soba typique japonnais',
          url: 'https://maps.app.goo.gl/TobKBP66T2Pru3vw9',
        },
        extraDetails:
          'Le parc est superbe pendant la floraison des cerisiers (fin mars).',
      },
      {
        title: 'Après-midi – Akihabara',
        description:
          'Arcades rétro, boutiques manga/figurines et cafés thématiques.',
        image: '/images/jours/Akihabara.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Curry tonkatsu chez Go!Go! Curry ou café à thème (maid, rétro-game…).',
          url: '',
        },
        extraDetails:
          'Regarde l’énorme Yodobashi Camera pour l’électronique détaxée.',
      },
      {
        title: 'Soir – Akihabara arcades',
        description:
          'Tournois de jeux de rythme et gashapon hallucinants.',
        image: '/images/jours/yodobashi.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Ramen miso chez Kanda Sairoku.',
          url: '',
        },
        extraDetails: 'Certaines salles ferment à 1 h du matin.',
      },
    ],
  },

  '4': {
    sections: [
      {
        title: 'Matin – Train pour Fujiyoshida & Chūreitō Pagoda',
        description:
          'Ltd. Express Fuji Excursion (7 h 30) puis montée aux 398 marches du parc Arakurayama Sengen pour le cliché carte-postale sur le mont Fuji.',
        image: '/images/jours/fuji.jpeg',
        mapUrl: '',
        foodDetails: {
          text: 'Bento acheté à Shinjuku avant l’embarquement.',
          url: '',
        },
        extraDetails:
          'Garde la valise à Tokyo et pars léger (simple sac à dos).',
      },
      {
        title: 'Après-midi – Lac Kawaguchi',
        description:
          'Tour en vélo ou bus panoramique autour du lac, stop au musée d’art Itchiku Kubota (kimonos).',
        image: '/images/jours/lac.jpeg',
        mapUrl: '',
        foodDetails: {
          text: 'Hōtō noodles chez Hōtō Fudō (spécialité locale).',
          url: '',
        },
        extraDetails:
          'Dernier bus retour vers la gare de Kawaguchiko ≈ 18 h.',
      },
      {
        title: 'Soir – Quartier de Gion (Kyōto)',
        description:
          'Check-in à Kyōto puis balade lanternes allumées dans Hanamikoji-dōri.',
        image: '/images/jours/gion.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Yakitori ou kaiseki léger dans une machiya.',
          url: '',
        },
        extraDetails:
          'JR Pass activé ce jour pour couvrir Kawaguchiko ► Kyōto.',
      },
    ],
  },

  '5': {
    sections: [
      {
        title: 'Matin – Fushimi Inari très tôt',
        description:
          'Ascension complète jusqu’au sommet (≈ 2 h A/R) sous les torii vermillon encore déserts.',
        image: '/images/jours/fuji.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Bouteille d’eau + onigiri achetés la veille (peu de stands ouverts tôt).',
          url: '',
        },
        extraDetails:
          'Premiers trains JR Nara Line avant 6 h ; lampe frontale utile pour la descente.',
      },
      {
        title: 'Après-midi – Kiyomizu-dera & ruelles Higashiyama',
        description:
          'Temple dans la colline, puis Sannenzaka/Ninenzaka, boutiques poterie & thé matcha.',
        image: '/images/jours/Kiyomizu-dera.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Bento “Shinkansen Eki-ben” (Kiosque 8, gare de Kyōto).',
          url: '',
        },
        extraDetails: 'Essaye la glace matcha-sésame de % Arabica.',
      },
      {
        title: 'Soir – Pontochō',
        description:
          'Allée étroite longeant la Kamo-gawa, bars intimistes et petites terrasses sur pilotis (kawadoko).',
        image: '/images/jours/Pontocho.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Yakitori + bière locale chez Torito.',
          url: '',
        },
        extraDetails: 'Repère les geiko/maiko à la tombée du jour.',
      },
    ],
  },

  '6': {
    sections: [
      {
        title: 'Matin – Kinkaku-ji & Ryōan-ji',
        description:
          'Le Pavillon d’Or au lever du soleil, puis jardin zen de pierres au Ryōan-ji.',
        image: '/images/jours/Kinkaku-ji.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Yudōfu (tofu bouilli) dans le restaurant du Ryōan-ji.',
          url: '',
        },
        extraDetails:
          'Bus 101 direct depuis Kyōto Station (30 min).',
      },
      {
        title: 'Après-midi – Arashiyama & Tenryū-ji',
        description:
          'Forêt de bambous, pont Togetsukyō, rencontre avec les macaques d’Iwatayama.',
        image: '/images/jours/Arashiyama.avif',
        mapUrl: '',
        foodDetails: {
          text: 'Street-food au Marché de Nishiki (croquette de tofu, sashimi de sériole).',
          url: '',
        },
        extraDetails: 'Onsen Tenzan-no-yu accessible en bus pour se délasser.',
      },
      {
        title: 'Soir – Nishiki Market by Night',
        description:
          'Retour au centre : dégustation de sake et dashi tamago.',
        image: '/images/jours/Nishiki.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Ramen Ippudo Nishikikoji pour finir la soirée.',
          url: '',
        },
        extraDetails: 'Marché couvert éclairé jusqu’à 20 h environ.',
      },
    ],
  },

  '7': {
    sections: [
      {
        title: 'Matin – Osaka Castle',
        description:
          'Train rapide depuis Kyōto (28 min) puis tour du donjon et du parc aux cerisiers.',
        image: '/images/jours/OsakaCastle.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Restaurant omelettes japonaises (okonomiyaki)',
          url: 'https://maps.app.goo.gl/86pw6NgPWPq1Qr6k7',
        },
        extraDetails:
          'Arrive avant 9 h pour le lever des douves en silence.',
      },
      {
        title: 'Après-midi – Shinsekai rétro',
        description:
          'Quartier Showa-vibes autour de la tour Tsutenkaku, salles de jeux vintage.',
        image: '/images/jours/Shinsekai.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Kushikatsu Daruma (panures frits à la chaîne).',
          url: '',
        },
        extraDetails:
          'Ne “double-dip” pas ta brochette dans la sauce commune ! 😉',
      },
      {
        title: 'Soir – Dōtonbori',
        description:
          'Néons géants, mascotte Glico, boat-ride sur le canal.',
        image: '/images/jours/Dotonbori.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Okonomiyaki Mizuno ou Ichiran Ramen Namba.',
          url: '',
        },
        extraDetails:
          'Dernier train pour Kyōto vers 23 h 30 (JR Special Rapid).',
      },
    ],
  },

  '8': {
    sections: [
      {
        title: 'Matin – Parc de Nara & Tōdai-ji',
        description:
          'Cerfs sacrés en liberté, Grand Bouddha Daibutsu, lanterne de Kasuga-Taisha.',
        image: '/images/jours/nara.webp',
        mapUrl: '',
        foodDetails: {
          text: 'Déjeuner udon au Sarusawa-ike Iyashitei (vue sur l’étang).',
          url: '',
        },
        extraDetails:
          'Achète des shika-senbei (biscuits) pour nourrir les cerfs (¥200).',
      },
      {
        title: 'Après-midi – Shinkansen vers Tokyo',
        description:
          'Retour via Kyōto : 2 h 40 jusqu’à Tokyo Station, récupération des bagages.',
        image: '/images/jours/Shinkansen.jpeg',
        mapUrl: '',
        foodDetails: {
          text: 'Ekiben “Genbi Shinkansen” à bord (option végétarienne dispo).',
          url: '',
        },
        extraDetails:
          'Réserve une place côté Fuji (siège E) pour la vue en route.',
      },
      {
        title: 'Soir – Shinjuku Izakaya hop',
        description:
          'Petite tournée de bars de poche dans Golden Gai ou Kabukichō.',
        image: '/images/jours/Izakaya.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Yakitori à Kabukichō Omoide Yokochō.',
          url: '',
        },
        extraDetails:
          'Profite de la machine Gachapon géante à la sortie Est.',
      },
    ],
  },

  '9': {
    sections: [
      {
        title: 'Matin – Ginza & Tsukiji Outer Market',
        description:
          'Shopping flagship (Uniqlo 12F, Muji Hotel) + découvertes culinaires à Tsukiji.',
        image: '/images/jours/Ginza.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Sushi debout Uogashi Nihon-ichi (nigiri à l’unité).',
          url: '',
        },
        extraDetails: 'La plupart des stands ferment vers 14 h.',
      },
      {
        title: 'Après-midi – Meiji-jingū & Harajuku / Omotesandō',
        description:
          'Sanctuaire shintō niché dans la forêt, street-style Takeshita-dōri, boutiques design.',
        image: '/images/jours/meiji.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Crêpe Harajuku (fraises-chantilly) en marching-food.',
          url: '',
        },
        extraDetails:
          'Entrée libre au Meiji-jingū, tonnerres de torii photogéniques.',
      },
      {
        title: 'Soir – Izakaya Uoshin Nogizaka',
        description:
          'Ambiance de pêcheur, poissons grillés et sake froid.',
        image: '/images/jours/Izakaya_Uoshin.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Test le tataki de bonite fumée au foin.',
          url: '',
        },
        extraDetails:
          'Réservation conseillée le week-end (+81 3-3478-0330).',
      },
    ],
  },

  '10': {
    sections: [
      {
        title: 'Matin – Quartier libre',
        description:
          'Derniers achats à Akasaka, Kappabashi Kitchen Town ou Pokémon Center.',
        image: '/images/jours/donquijote.jpeg',
        mapUrl: '',
        foodDetails: {
          text: 'Souvenir-snack “Tokyo Banana” (boîte de 8).',
          url: '',
        },
        extraDetails:
          'Prépare la Tax-Free paperwork si > ¥5 000 d’achats.',
      },
      {
        title: 'Après-midi – Départ',
        description:
          'Train ou limousine-bus vers Haneda/Narita, duty-free et embarquement.',
        image: '/images/jours/narita.jpg',
        mapUrl: '',
        foodDetails: {
          text: 'Ramen Street (Tokyo Station) si le timing le permet.',
          url: '',
        },
        extraDetails:
          'Arrive à l’aéroport 3 h avant un vol international.',
      },
    ],
  },
}


