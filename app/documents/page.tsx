"use client";

import { useState } from "react";
import DocumentToolbar from "../components/Documents/DocumentToolbarProps";
import DocumentGrid from "../components/Documents/DocumentGrid";
import type { DocMeta } from "../components/Documents/DocumentCard";

// 🗄️ Données provisoires (en dur)
const MOCK_DOCS: DocMeta[] = [
  {
    id: 1,
    name: "Devis‑ACME.pdf",
    extension: "pdf",
    client: "ACME Corp",
    project: "Site vitrine 2024",
    createdAt: "12/04/2025",
  },
  {
    id: 2,
    name: "Mockup‑Homepage.png",
    extension: "png",
    client: "Beta SAS",
    project: "E‑shop",
    createdAt: "10/04/2025",
    thumbnailUrl: "/images/profil.jpeg", // remplace par un vrai asset
  },
  {
    id: 3,
    name: "Contrat‑Alpha.docx",
    extension: "docx",
    client: "Alpha Ltd",
    project: "App mobile",
    createdAt: "08/04/2025",
  },
  {
    id: 4,
    name: "Facture‑Beta.xlsx",
    extension: "xlsx",
    client: "Beta SAS",
    project: "E‑shop",
    createdAt: "05/04/2025",
  },
  {
    id: 5,
    name: "Wireframe.pdf",
    extension: "pdf",
    client: "ACME Corp",
    project: "Site vitrine 2024",
    createdAt: "02/04/2025",
  },
];

export default function Documents() {
  // 🔎 Filtres locaux (client & projet)
  const [clientFilter, setClientFilter] = useState<string | null>(null);
  const [projectFilter, setProjectFilter] = useState<string | null>(null);
  const [view, setView] = useState<"grid" | "table">("grid");

  // Filtrer docs selon sélection
  const filteredDocs = MOCK_DOCS.filter((d) => {
    if (clientFilter && d.client !== clientFilter) return false;
    if (projectFilter && d.project !== projectFilter) return false;
    return true;
  });

  // Liste unique des clients / projets (pour la toolbar)
  const clients = Array.from(new Set(MOCK_DOCS.map((d) => d.client)));
  const projects = projectFilter
    ? Array.from(new Set(MOCK_DOCS.filter((d) => d.client === projectFilter).map((d) => d.project)))
    : Array.from(new Set(MOCK_DOCS.map((d) => d.project)));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Documents</h1>
      </div>
        {/* 🛠️ Toolbar */}
        <DocumentToolbar
          clients={clients}
          projects={projects}
          selectedClient={clientFilter}
          selectedProject={projectFilter}
          onClientChange={setClientFilter}
          onProjectChange={setProjectFilter}
          view={view}
          onToggleView={() => setView(view === "grid" ? "table" : "grid")}
          onUpload={() => alert("TODO: upload")}
        />
        {/* Vue principale */}
        {view === "grid" ? (
          <DocumentGrid documents={filteredDocs} cardSize="md" />
        ) : (
          <p className="text-gray-400 italic">Vue table non implémentée pour l’instant</p>
        )}      
    </div>




  );
}