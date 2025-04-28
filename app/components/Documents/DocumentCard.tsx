"use client";

import Image from "next/image";
import {
  FileText,
  Image as ImageIcon,
  File as FileIcon,
  FileSpreadsheet,
} from "lucide-react";
import type { ComponentType } from "react";

export interface DocMeta {
  id: string | number;
  name: string;
  /** Extension sans le point (pdf, png, doc…) */
  extension: string;
  client: string;
  project: string;
  createdAt: string; // ISO ou lisible
  thumbnailUrl?: string;
}

interface DocumentCardProps {
  doc: DocMeta;
  /** Taille de la carte : "sm" 160×200, "md" 200×240, "lg" 240×300 */
  size?: "sm" | "md" | "lg";
  onClick?: (doc: DocMeta) => void;
}

/**
 * Carte style Drive pour un document. Affiche une vignette ou une icône selon l'extension.
 */
export default function DocumentCard({ doc, size = "md", onClick }: DocumentCardProps) {
  // Mapping taille ⇒ classes width/height
  const sizeClass =
    size === "sm"
      ? "w-40 h-52"
      : size === "lg"
      ? "w-60 h-72"
      : "w-48 h-60"; // md

  // Déterminer dynamiquement l'icône
  const Icon: ComponentType<{ size?: number; className?: string }> = (() => {
    const ext = doc.extension.toLowerCase();
    if (["png", "jpg", "jpeg", "gif", "svg", "webp"].includes(ext)) return ImageIcon;
    if (["xls", "xlsx", "csv"].includes(ext)) return FileSpreadsheet;
    if (["txt", "md", "rtf", "doc", "docx", "pdf"].includes(ext)) return FileText;
    return FileIcon;
  })();

  return (
    <div
      onClick={() => onClick?.(doc)}
      className={`cursor-pointer ${sizeClass} p-4 rounded-2xl bg-white/10 backdrop-blur-lg shadow-md border border-white/20 flex flex-col justify-between hover:shadow-lg hover:scale-[1.02] transition`}
    >
      {/* Aperçu */}
      <div className="flex-1 flex items-center justify-center">
        {doc.thumbnailUrl ? (
          <Image
            src={doc.thumbnailUrl}
            alt={doc.name}
            width={120}
            height={160}
            className="object-cover rounded-lg"
          />
        ) : (
          <Icon size={48} className="opacity-70" />
        )}
      </div>

      {/* Métadonnées */}
      <div className="mt-2 text-center space-y-1 w-full">
        <p className="text-sm font-medium truncate" title={doc.name}>
          {doc.name}
        </p>
        <p className="text-xs text-gray-300 truncate">
          {doc.client} • {doc.project}
        </p>
        <p className="text-[10px] text-gray-400">{doc.createdAt}</p>
      </div>
    </div>
  );
}