import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import SidebarRight from "./components/SidebarRight";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GestAuto Entreprise",
  description: "Application de gestion pour auto-entrepreneurs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${inter.className}
                    bg-gradient-to-br from-[#dee4f9] via-[#e9ddfc] to-[#ffd6ec]
                    overflow-hidden`}          
      >
        {/* hauteur EXACTE du viewport */}
        <div className="flex h-screen overflow-hidden">
          <Sidebar />

          {/* colonne centrale fixe en hauteur */}
          
          <main className="flex-1 flex flex-col overflow-hidden ml-20 px-4 py-3">
            {/* carte = seule zone scrollable */}
            <div
              className="flex-1 overflow-y-auto     /* ← le scroll est ici et seulement ici */
                         max-w-[1040px] mx-auto
                         bg-white/10 backdrop-blur-xl border border-white/20 rounded-[2rem]
                         shadow-[0_4px_16px_rgba(0,0,0,0.04),_0_1px_2px_rgba(0,0,0,0.03)]
                         p-8"
            >
              {children}
            </div>
          </main>

          <SidebarRight />
        </div>
      </body>
    </html>
  );

}
