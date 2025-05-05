// data/extra.ts
export type ExtraCategory = 'culture' | 'nature' | 'food' | 'shopping' | 'fun'

export interface ExtraPlace {
  id: string
  title: string
  description: string
  image: string
  mapUrl: string
  category: ExtraCategory
  tags?: string[]          // ex: ['instagram', 'night view']
}

/* ===================================================================== *
 *  data/extra.ts   –  banque XXL d’activités “en rab’” pour tout profil *
 * ===================================================================== */

export const extras: ExtraPlace[] = [
  /* ========== CULTURE  (15) ========================================= */
  {
    id: 'tea_ceremony',
    title: 'Cérémonie du thé (Kyōto – machiya privée)',
    description: 'Matcha, wagashi et explications en anglais (1 h).',
    image: '', mapUrl: '', category: 'culture', tags: ['tradition','slow'],
  },
  {
    id: 'kabuki_single_act',
    title: 'Kabuki-za : billet “single act”',
    description: '45 min pour goûter au kabuki sans marathon de 4 h.',
    image: '', mapUrl: '', category: 'culture', tags: ['spectacle','ginza'],
  },
  {
    id: 'pottery_raku',
    title: 'Atelier poterie raku',
    description: 'Tour manuel + émaillage ; pièce expédiée chez vous.',
    image: '', mapUrl: '', category: 'culture', tags: ['DIY','souvenir'],
  },
  {
    id: 'geiko_dinner',
    title: 'Dîner-spectacle maiko à Gion',
    description: 'Kaiseki + danse, photo souvenir incluse.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'ghibli_museum',
    title: 'Musée Ghibli (Mitaka)',
    description: 'Totoro grandeur nature ; tickets à réserver J-30.',
    image: '', mapUrl: '', category: 'culture', tags: ['animation','famille'],
  },
  {
    id: 'edo_museum',
    title: 'Edo-Tokyo Museum',
    description: 'Maquettes géantes et rue Edo reconstituée.',
    image: '', mapUrl: '', category: 'culture', tags: ['histoire'],
  },
  {
    id: 'bonsai_art',
    title: 'Village du bonsaï d’Ōmiya',
    description: 'Six pépinières + musée spécialisé, près de Saitama.',
    image: '', mapUrl: '', category: 'culture', tags: ['nature','artisanat'],
  },
  {
    id: 'indigo_dye',
    title: 'Teinture “aizome” (Tokushima)',
    description: 'Fabriquez votre foulard indigo traditionnel.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'samurai_kembu',
    title: 'Samurai Kembu Theater',
    description: 'Démonstration katana + essai kimono hakama.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'paper_making',
    title: 'Papier washi – atelier main',
    description: 'Dans la vallée de Kurotani ; repartez avec vos feuilles.',
    image: '', mapUrl: '', category: 'culture', tags: ['artisanat'],
  },
  {
    id: 'noh_theatre',
    title: 'Soirée Nō surtitrée',
    description: 'Pièce classique avec guide audio anglais.',
    image: '', mapUrl: '', category: 'culture', tags: ['spectacle'],
  },
  {
    id: 'sumo_beya',
    title: 'Entraînement matinal de sumo',
    description: 'Assistez au keiko dans une écurie de Ryōgoku.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'calligraphy',
    title: 'Cours de shodo (calligraphie)',
    description: 'Initiez-vous aux kanji avec pinceau et encre sumi.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'origami_kyoto',
    title: 'Atelier origami avancé',
    description: 'Pliez grues, fleurs et boîtes japonaises.',
    image: '', mapUrl: '', category: 'culture',
  },
  {
    id: 'kimono_rental',
    title: 'Location kimono + balade photo',
    description: '2 h dans les ruelles d’Higashiyama accompagnés.',
    image: '', mapUrl: '', category: 'culture',
  },

  /* ========== NATURE  (15) ========================================= */
  {
    id: 'rikugien_lights',
    title: 'Rikugi-en illuminé (automne)',
    description: 'Érables rouges sous spots jusqu’à 21 h.',
    image: '', mapUrl: '', category: 'nature', tags: ['jardin','tokyo'],
  },
  {
    id: 'lake_ashi_cruise',
    title: 'Croisière lente lac Ashi',
    description: 'Bateau “pirate” + vue Mont Fuji par temps clair.',
    image: '', mapUrl: '', category: 'nature', tags: ['hakone'],
  },
  {
    id: 'jigokudani_monkeys',
    title: 'Onsen aux singes de Jigokudani',
    description: 'Macaques se baignant dans la neige (déc-mars).',
    image: '', mapUrl: '', category: 'nature', tags: ['hiver','animaux'],
  },
  {
    id: 'hitachi_sea_park',
    title: 'Hitachi Seaside Park',
    description: 'Nemophila bleues (avril) ou kochia rouges (octobre).',
    image: '', mapUrl: '', category: 'nature', tags: ['saisonnier'],
  },
  {
    id: 'nokogiri_view',
    title: 'Mont Nokogiri',
    description: 'Bouddha géant + panorama baie de Tokyo.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'arsukiyama_monkeys',
    title: 'Macaques d’Iwatayama',
    description: 'Petite randonnée 20 min au-dessus d’Arashiyama.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'blue_pond',
    title: 'Blue Pond (Hokkaidō)',
    description: 'Étang turquoise irréel près de Biei.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'moss_temple',
    title: 'Saihō-ji – temple des mousses',
    description: '1 h d’ado, 120 sortes de mousses (réservation courrier).',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'shin_hotaka',
    title: 'Téléphérique Shin-Hotaka',
    description: 'Panorama Alpes japonaises à 2 800 m.',
    image: '', mapUrl: '', category: 'nature', tags: ['montagne'],
  },
  {
    id: 'lavender_furano',
    title: 'Champs de lavande Furano',
    description: 'Juillet ; glaces à la lavande (Hokkaidō).',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'coast_sanjyo',
    title: 'Falaises de Tojinbo',
    description: 'Colonnades basaltiques + marche en bord de mer.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'hiking_kumano',
    title: 'Randonnée Kumano Kodo (section courte)',
    description: 'Marche de 7 km jusqu’à Daimon-zaka & Nachi Taisha.',
    image: '', mapUrl: '', category: 'nature', tags: ['UNESCO'],
  },
  {
    id: 'bamboo_grove_night',
    title: 'Bambouseraie d’Arashiyama illuminée (décembre)',
    description: 'Événement “Hanatōrō” quinze jours seulement.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'daigoji_autumn',
    title: 'Daigo-ji – érables sur étang',
    description: 'Spot photo carte-postale fin novembre.',
    image: '', mapUrl: '', category: 'nature',
  },
  {
    id: 'lake_motosu',
    title: 'Lac Motosu',
    description: 'Vue billet de 1 000 ¥ sur le Mont Fuji.',
    image: '', mapUrl: '', category: 'nature',
  },

  /* ========== FOOD  (15) ========================================== */
  {
    id: 'nikka_distillery',
    title: 'Distillerie Nikka Yoichi',
    description: 'Visite + dégustation single malt / apple brandy.',
    image: '', mapUrl: '', category: 'food', tags: ['whisky'],
  },
  {
    id: 'kobe_beef',
    title: 'Kobe Beef Teppanyaki (déjeuner)',
    description: '150 g A5 à prix doux le midi.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'depachika_tour',
    title: 'Tour guidé “depachika”',
    description: 'Sous-sol gourmet : bentō, wagashi, thé.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'sake_brewery_kyoto',
    title: 'Brasserie de saké Gekkeikan',
    description: 'Musée + 3 verres de dégustation à Fushimi.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'kaiseki_evening',
    title: 'Soirée kaiseki 8 plats (Kyōto)',
    description: 'Menu saisonnier dans une machiya centenaire.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'matsusaka_beef',
    title: 'Dîner wagyū Matsusaka',
    description: 'Encore plus fondant que le Kobe (Mie).',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'okonomiyaki_class',
    title: 'Cours d’okonomiyaki',
    description: 'Hiroshima style ou Osaka style, à vous de choisir !',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'matcha_ujicha',
    title: 'Dégustation de matcha Uji',
    description: '3 qualités + dorayaki au foyer de la plantation.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'sushi_workshop',
    title: 'Atelier sushi nigiri',
    description: 'Maître itamae — 8 pièces que vous mangez ensuite.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'ramen_museum',
    title: 'Shin-Yokohama Ramen Museum',
    description: 'Ruelle réplique 1960 + mini-bols régionaux.',
    image: '', mapUrl: '', category: 'food', tags: ['retro'],
  },
  {
    id: 'wagashi_making',
    title: 'Confection wagashi (pâtisserie)',
    description: 'Fabriquez nerikiri fleur & feuille momiji.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'yakitori_date',
    title: 'Yakitori gastronomique “Bird Land”',
    description: '1 étoile Michelin sous les rails de Ginza.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'beer_craft',
    title: 'Micro-brasserie craft (Kichijōji)',
    description: 'IPA gingembre, stout yuzu – flight de 4 verres.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'fruit_parlor',
    title: 'Parfait géant chez Takano Fruit Parlour',
    description: 'Fraises Tochiotome et mangue de Miyazaki.',
    image: '', mapUrl: '', category: 'food',
  },
  {
    id: 'tsukemen_fuunji',
    title: 'Tsukemen Fuunji',
    description: 'Bouillon poulet-bonite crémeux, file d’attente rapide.',
    image: '', mapUrl: '', category: 'food',
  },

  /* ========== SHOPPING  (15) ====================================== */
  {
    id: 'kappabashi_town',
    title: 'Kappabashi Kitchen Town',
    description: 'Couteaux, moules à sushi, répliques plastiques.',
    image: '', mapUrl: '', category: 'shopping', tags: ['ustensiles'],
  },
  {
    id: 'donki_megastore',
    title: 'Don Quijote Mega',
    description: 'Bazaar 24 / 7 – snacks, cosmétiques, souvenirs.',
    image: '', mapUrl: '', category: 'shopping', tags: ['tax-free'],
  },
  {
    id: 'muji_flagship',
    title: 'MUJI Ginza + MUJI Hotel',
    description: '6 étages design minimal + restaurant “deli plate”.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'antique_toji',
    title: 'Marché d’antiquités Tō-ji',
    description: 'Le 21 du mois : céramiques, kimonos d’occasion.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'takashimaya_osaka',
    title: 'Takashimaya Osaka',
    description: 'Grand magasin historique, étage kimono sur-mesure.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'kitkat_chocolatory',
    title: 'KitKat Chocolatory',
    description: 'Éditions limitées wasabi, yuzu, sakura.',
    image: '', mapUrl: '', category: 'shopping', tags: ['gourmand'],
  },
  {
    id: 'pokemon_center',
    title: 'Pokémon Center Mega (Ikebukuro)',
    description: 'Peluches exclusives, cartes collector.',
    image: '', mapUrl: '', category: 'shopping', tags: ['pop culture'],
  },
  {
    id: 'shibori_kyoto',
    title: 'Furoshiki & shibori boutique',
    description: 'Étoffes teint-noué traditionnelles.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'aizenkobo',
    title: 'Aizen-kobo – tisserand de Nishijin',
    description: 'Obi haut de gamme ; showroom visite libre.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'sento_market',
    title: 'Marché de Sento (Kanazawa)',
    description: 'Poisson ultra-frais, crabes en hiver.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'ikea_harajuku',
    title: 'IKEA Harajuku',
    description: 'Édition japonaise + “matcha dog” à la caféteria.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'uniqlo_park',
    title: 'UNIQLO Park Yokohama',
    description: 'Magasin + rooftop aire de jeux + vue baie.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'ginza_six_rooftop',
    title: 'Rooftop Ginza SIX',
    description: 'Jardin suspendu gratuit 13ᵉ étage.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'premium_outlets',
    title: 'Gotemba Premium Outlets',
    description: '350 marques + vue Mont Fuji.',
    image: '', mapUrl: '', category: 'shopping',
  },
  {
    id: 'ito_ayahara',
    title: 'Maison du bambou Ayahara',
    description: 'Objets artisanaux bambou tressé (Kyōto).',
    image: '', mapUrl: '', category: 'shopping',
  },

  /* ========== FUN “SOFT”  (15) ==================================== */
  {
    id: 'retro_arcade',
    title: 'Super Potato Retro Arcade',
    description: 'Pac-Man, Space Invaders + boutique consoles.',
    image: '', mapUrl: '', category: 'fun', tags: ['nostalgie'],
  },
  {
    id: 'taiko_workshop',
    title: 'Initiation tambours Taiko',
    description: 'Cours d’1 h, défoulement garanti.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'hozu_boat',
    title: 'Descente en barque rivière Hozu',
    description: '2 h de paysages forestiers jusqu’à Arashiyama.',
    image: '', mapUrl: '', category: 'fun', tags: ['photo'],
  },
  {
    id: 'wagyu_bbq',
    title: 'BBQ wagyū sur rooftop',
    description: 'Grillades A4 + skyline nocturne (Shinjuku).',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'beer_festival',
    title: 'Japan Craft Beer Festival',
    description: 'Été : 100 brasseries artisanales en plein air.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'call_duck_cafe',
    title: 'Café canards call',
    description: 'Câlins à de petits canards apprivoisés (Asakusa).',
    image: '', mapUrl: '', category: 'fun', tags: ['animaux'],
  },
  {
    id: 'cycling_noto',
    title: 'Cyclotour péninsule de Noto',
    description: 'Littoral, villages de pêcheurs, 40 km doux.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'boat_bar',
    title: 'Tramway-bar Hankai (Osaka)',
    description: 'Bières artisanales à bord d’un tram rétro.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'nihonbuyo_lesson',
    title: 'Mini-cours de danse Nihon-buyō',
    description: 'Gestuelle gracieuse, kimono fourni.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'bonsai_cut',
    title: 'Découpe bonsaï express',
    description: 'Taillez un petit pin noir, repartez avec.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'ikebana_demo',
    title: 'Démonstration ikebana',
    description: 'Art floral, style Sōgetsu contemporain.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'night_zoo',
    title: 'Zoo de Ueno de nuit (été sélectionné)',
    description: 'Visite nocturne exceptionnelle, pandas somnolents.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'ceramic_paint',
    title: 'Peinture de maneki-neko',
    description: 'Customisez votre propre chat porte-bonheur.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'sento_tour',
    title: 'Circuit sento rétro',
    description: '3 bains publics Showa-style + bière finale.',
    image: '', mapUrl: '', category: 'fun',
  },
  {
    id: 'ukulele_shibuya',
    title: 'Cours ukulele hawaïen (Shibuya)',
    description: '30 min, prêt d’instrument compris.',
    image: '', mapUrl: '', category: 'fun',
  },
]

