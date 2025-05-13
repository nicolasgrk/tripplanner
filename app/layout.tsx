// app/layout.tsx
import '@/app/globals.css'
import { BottomNav } from '@/components/BottomNav'

export const metadata = { title: 'Carnet Japon' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="theme-color" content="#3dff7b" />
      <link rel="apple-touch-icon" href="/icons/icon-192.png" />
      <body className="min-h-screen bg-gradient-to-br from-[#001628] via-[#001628] to-[#01304a] text-slate-50">
        {children}
        {/* Barre fixe (montée une seule fois) */}
        <BottomNav />
      </body>
    </html>
  )
}
