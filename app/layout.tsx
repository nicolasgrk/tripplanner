// app/layout.tsx
import '@/app/globals.css'
import { BottomNav } from '@/components/BottomNav'

export const metadata = { title: 'Carnet Japon' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-gradient-to-br from-[#001628] via-[#001628] to-[#01304a] text-slate-50">
        {children}
        {/* Barre fixe (montée une seule fois) */}
        <BottomNav />
      </body>
    </html>
  )
}
