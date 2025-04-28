"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export interface NoteItem {
  id: string | number;
  text: string;
}

interface QuickNoteProps {
  /** Callback exécuté après l'ajout d'une note (optionnel) */
  onAdd?: (note: NoteItem) => void;
}

/**
 * Carte "Notes rapides" : permet de saisir une idée/to‑do en un clic.
 * Les notes sont stockées localement dans l'état ; à brancher sur une API
 * si besoin via le callback `onAdd`.
 */
export default function QuickNote({ onAdd }: QuickNoteProps) {
  const [notes, setNotes] = useState<NoteItem[]>([]);
  const [input, setInput] = useState<string>("");

  const handleAdd = () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const newNote: NoteItem = { id: Date.now(), text: trimmed };
    setNotes((prev) => [newNote, ...prev]);
    onAdd?.(newNote);
    setInput("");
  };

  return (
    <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl p-6 space-y-4">
      {/* Saisie */}
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Ajouter une note rapide…"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAdd()}
          className="flex-1 bg-transparent focus:outline-none placeholder:text-white/60 text-sm"
        />
        <button
          onClick={handleAdd}
          className="p-2 rounded-full hover:bg-white/20 transition"
        >
          <SendHorizonal size={16} />
        </button>
      </div>

      {/* Liste des notes */}
      <AnimatePresence initial={false}>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 6 }}
            className="text-sm bg-white/10 rounded-xl px-3 py-2 border border-white/15"
          >
            {note.text}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
