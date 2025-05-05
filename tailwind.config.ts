import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        /* Palette inspirée de l'image */
        sakura: '#FAD8E6',
        matcha: '#C5E4C8',
        sky: '#CDE7F8',
      },
      backgroundImage: {
        'radial-glow':
          'radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.25), transparent)',
      },
    },
  },
  plugins: [],
}
