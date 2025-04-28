"use client";

import { useEffect } from "react";
import ReactDOM from "react-dom";
import { X, Download, Trash2, Share2, File as FileIcon } from "lucide-react";
import Image from "next/image";
import { DocMeta } from "./DocumentCard";

interface DocumentSlideOverProps {
  doc: DocMeta | null;
  onClose: () => void;
}

export default function DocumentSlideOver({ doc, onClose }: DocumentSlideOverProps) {
  // Verrouille le scroll lorsque le panneau est ouvert
  useEffect(() => {
    if (doc) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [doc]);

  if (!doc) return null;

  const ext = doc.extension.toLowerCase();
  const isImage = ["png", "jpg", "jpeg", "gif", "webp"].includes(ext);
  const isPdf = ext === "pdf";

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Slide‑over */}
      <div className="relative ml-auto h-full w-full max-w-3xl bg-white/10 backdrop-blur-xl border-l border-white/20 shadow-[0_8px_32px_rgba(0,0,0,0.25)] flex flex-col animate-slide-in">
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-lg font-semibold">{doc.name}</h2>
            <p className="text-xs text-white/70">
              {doc.client} • {doc.project} • {doc.createdAt}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 transition"
          >
            <X size={22} />
          </button>
        </header>

        {/* Preview */}
        <main className="flex-1 overflow-y-auto p-6 space-y-6">
          {isImage && doc.thumbnailUrl && (
            <Image
              src={doc.thumbnailUrl}
              alt={doc.name}
              width={900}
              height={600}
              className="rounded-xl object-contain mx-auto"
            />
          )}

          {isPdf && (
            <iframe
              src={doc.thumbnailUrl ?? ""}
              className="w-full h-[70vh] rounded-xl bg-white"
            />
          )}

          {!isImage && !isPdf && (
            <div className="flex items-center justify-center h-[60vh]">
              <FileIcon className="w-32 h-32 opacity-60" />
            </div>
          )}
        </main>

        {/* Actions */}
        <footer className="p-6 border-t border-white/10 flex gap-4">
          <a
            href={doc.thumbnailUrl ?? "#"}
            download
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-xl hover:bg-gray-100 transition"
          >
            <Download size={16} /> Télécharger
          </a>
          <button className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-xl hover:bg-white/30 transition">
            <Share2 size={16} /> Partager
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-red-500/80 text-white rounded-xl hover:bg-red-600 transition ml-auto">
            <Trash2 size={16} /> Supprimer
          </button>
        </footer>
      </div>
    </div>,
    document.body
  );
}

// Ajoute une animation css simple
// Tailwind : ajoute dans globals.css
// .animate-slide-in { @apply translate-x-full opacity-0; animation: slide 0.3s forwards; }
// @keyframes slide { to { transform: translateX(0); opacity: 1; }}
