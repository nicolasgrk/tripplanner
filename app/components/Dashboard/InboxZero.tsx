"use client";

import { Mail, MessageCircle, DollarSign, FileText } from "lucide-react";

export interface Notification {
  id: string | number;
  /** Catégorie pour choisir une icône. */
  type: "mail" | "message" | "invoice" | "document" | string;
  /** Texte principal de la notification. */
  content: string;
  /** Date ISO ou format lisible. */
  date: string;
}

interface InboxZeroProps {
  notifications?: Notification[];
  /** Nombre max à afficher (par défaut 3). */
  limit?: number;
}

const TYPE_ICON: Record<string, React.ComponentType<{ size?: number }>> = {
  mail: Mail,
  message: MessageCircle,
  invoice: DollarSign,
  document: FileText,
};

export default function InboxZero({ notifications = [], limit = 3 }: InboxZeroProps) {
  const shown = notifications.slice(0, limit);
  const hasItems = shown.length > 0;

  return (
    <div className="bg-white/15 backdrop-blur-xl border border-white/25 rounded-3xl shadow-md p-6 space-y-4 w-full max-w-md">
      <h3 className="text-lg font-semibold mb-2">Inbox</h3>

      {!hasItems && (
        <p className="flex items-center gap-2 text-sm text-white/70">
          <span role="img" aria-label="ok">👌</span> Ta boîte est vide
        </p>
      )}

      {hasItems && (
        <ul className="space-y-3">
          {shown.map((n) => {
            const Icon = TYPE_ICON[n.type] || Mail;
            return (
              <li key={n.id} className="flex items-start gap-3 bg-white/10 border border-white/10 rounded-2xl p-3">
                <div className="p-2 bg-white/20 rounded-xl">
                  <Icon size={18} />
                </div>
                <div className="flex-1">
                  <p className="text-sm leading-snug">{n.content}</p>
                  <p className="text-xs text-white/60 mt-1">{n.date}</p>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
