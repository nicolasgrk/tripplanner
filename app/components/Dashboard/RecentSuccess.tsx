"use client";

import { useMemo } from "react";
import { Star, Rocket, DollarSign, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Icônes lucide disponibles dans ce composant. Si la clé reçue ne correspond pas,
 * on retombe sur Star.
 */
const ICONS: Record<string, React.ComponentType<{ size?: number }>> = {
  Star,
  Rocket,
  DollarSign,
  CheckCircle2,
};

export interface Achievement {
  id: string | number;
  /** Texte à afficher, ex. "1 500 € encaissés cette semaine" */
  message: string;
  /**
   * Nom d'icône lucide-react optionnel ("Star", "Rocket" …).
   * Pour plus de permissivité, on accepte n'importe quel string et on mappe ;
   * les valeurs non reconnues afficheront l'icône Star par défaut.
   */
  icon?: string;
}

interface RecentSuccessProps {
  achievements?: Achievement[];
  /**
   * Durée d'affichage (ms) avant disparition/rotation. 0 = pas d'auto-hide.
   */
  duration?: number;
}

export default function RecentSuccess({ achievements, duration = 6000 }: RecentSuccessProps) {
  const list = useMemo<Achievement[]>(() => {
    if (achievements && achievements.length) return achievements;
    // dataset d'exemple si rien n'est passé
    return [
      { id: 1, message: "1 500 € encaissés cette semaine", icon: "DollarSign" },
      { id: 2, message: "Projet GreenTech livré hier", icon: "Rocket" },
      { id: 3, message: "Nouveau client inscrit", icon: "Star" },
    ];
  }, [achievements]);

  return (
    <div className="space-y-4">
      <AnimatePresence>
        {list.map((a) => {
          const Icon = ICONS[a.icon || "Star"] || Star;
          return (
            <motion.div
              key={a.id}
              className="flex items-center gap-3 bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl px-4 py-3 shadow-md"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              <div className="p-2 bg-white/20 rounded-xl">
                <Icon size={20} />
              </div>
              <p className="text-sm font-medium">{a.message}</p>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}