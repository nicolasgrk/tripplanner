export interface JPhrase {
    jp: string
    romaji: string
    fr: string
  }
  
  export const phrases: JPhrase[] = [
    { jp: 'こんにちは', romaji: 'Konnichiwa', fr: 'Bonjour' },
    { jp: 'ありがとう', romaji: 'Arigatō', fr: 'Merci' },
    { jp: 'すみません', romaji: 'Sumimasen', fr: 'Excusez-moi / Pardon' },
    { jp: 'いくらですか？', romaji: 'Ikura desu ka?', fr: 'Combien ça coûte ?' },
    { jp: 'おいしい！', romaji: 'Oishii!', fr: 'Délicieux !' },
    { jp: '乾杯', romaji: 'Kanpai', fr: 'Santé !' },
    // ajoute autant d’expressions que tu veux
  ]
  