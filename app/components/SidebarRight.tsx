'use client';

export default function SidebarRight() {
  return (
    <div className="w-80 bg-transparent p-6 space-y-8 text-sm text-gray-700">
      {/* 📊 Aperçu activité */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Mon Activité</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>Clients actifs</span>
            <span className="font-semibold">12</span>
          </div>
          <div className="flex justify-between">
            <span>Projets en cours</span>
            <span className="font-semibold">4</span>
          </div>
          <div className="flex justify-between">
            <span>Messages non lus</span>
            <span className="font-semibold">3</span>
          </div>
          <div className="flex justify-between">
            <span>Documents à traiter</span>
            <span className="font-semibold">2</span>
          </div>
        </div>
      </div>

      {/* 📈 Statistiques rapides */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Statistiques</h2>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span>CA ce mois</span>
            <span className="font-semibold">1 450 €</span>
          </div>
          <div className="flex justify-between">
            <span>Objectif</span>
            <span className="font-semibold text-green-600">73%</span>
          </div>
        </div>
      </div>

      {/* 💡 Idées personnelles */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Idées Perso</h2>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          <li>Créer un modèle de devis personnalisable</li>
          <li>Lancer offre de parrainage</li>
          <li>Publier mon portfolio</li>
        </ul>
      </div>

      {/* ⚡ Raccourcis */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Raccourcis</h2>
        <div className="space-y-3">
          {[
            { label: '➕ Nouveau client' },
            { label: '📄 Ajouter un document' },
            { label: '💡 Ajouter une idée' },
          ].map((b) => (
            <button
              key={b.label}
              className="w-full rounded-2xl px-5 py-3
                        bg-white/10 backdrop-blur-x
                        border border-white/20
                        shadow-[0_8px_32px_rgba(31,38,135,0.15)]
                        hover:bg-white/15 hover:shadow-[0_12px_40px_rgba(31,38,135,0.2)]
                        active:scale-[0.97] transition"
            >
              {b.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
