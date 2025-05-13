// next.config.js
const withPWA = require('next-pwa')({
  dest: 'public',          // le SW et le precache manifest seront générés ici
  register: true,
  skipWaiting: true,

  // ▶ désactive le Service Worker en mode dev, l’active en build prod
  disable: process.env.NODE_ENV === 'development',

  // ▶ évite que next-pwa cherche le fichier fallback-build-manifest.json
  //   (il n’existe pas quand tu n’as aucune page SSG "fallback: true")
  dynamicStartUrl: false,

  // tes règles Workbox pour les images distantes & Google Maps
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/(images\.unsplash\.com|res\.cloudinary\.com)\//,
      handler: 'CacheFirst',
      options: {
        cacheName: 'external-images',
        expiration: { maxEntries: 60, maxAgeSeconds: 30 * 24 * 3600 },
      },
    },
    {
      urlPattern: /^https:\/\/www\.google\.com\/maps/,
      handler: 'NetworkOnly',
    },
  ],
})

module.exports = withPWA({
  reactStrictMode: true,
  /* plus besoin de experimental.appDir */
})
