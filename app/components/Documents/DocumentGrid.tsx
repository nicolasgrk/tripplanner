"use client";

import { useState } from "react";
import DocumentCard, { DocMeta } from "./DocumentCard";
import DocumentSlideOver from "./DocumentSlideOver";

interface DocumentGridProps {
  documents: DocMeta[];
  cardSize?: "sm" | "md" | "lg";
}

export default function DocumentGrid({ documents, cardSize = "md" }: DocumentGridProps) {
  const [selected, setSelected] = useState<DocMeta | null>(null);

  const gridLayout =
    cardSize === "sm"
      ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      : cardSize === "lg"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6";

  return (
    <>
      <div className={`grid ${gridLayout}`}>
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            doc={doc}
            size={cardSize}
            onClick={() => setSelected(doc)}
          />
        ))}
      </div>

      {/* Slide-over de détail */}
      <DocumentSlideOver
        doc={selected}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
