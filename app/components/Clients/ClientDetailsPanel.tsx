'use client';

import { useEffect } from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";
import type { Client } from "@/types/client";
import ProjectFolderTile from "../Project/ProjectTile";
import ExchangeTimeline from '../Exchange/ExchangeTimeline';
interface Props {
  client: Client | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ClientDetailsModal({ client, isOpen, onClose }: Props) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
  }, [isOpen]);

  if (!isOpen || !client) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[6px]"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-2xl bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] p-6 md:p-8 text-white space-y-6 max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Détail du client</h2>
          <button onClick={onClose} className="hover:text-red-300 transition">
            <X size={24} />
          </button>
        </div>

        {/* Infos principales */}
        <div className="text-center space-y-2">
          <img
            src={client.avatarUrl}
            alt={`${client.firstName} ${client.lastName}`}
            className="w-20 h-20 rounded-full mx-auto object-cover"
          />
          <p className="text-xl font-medium">{client.firstName} {client.lastName}</p>
          <p className="text-white/70">{client.companyName}</p>
        </div>

        {/* Détails */}
        <div className="text-white/80 space-y-2 text-sm">
          <p><strong>Email :</strong> {client.email}</p>
          <p><strong>Téléphone :</strong> {client.phone}</p>
          <p>
            <strong>Statut :</strong>{" "}
            <span className="bg-white/20 px-2 py-1 rounded text-xs">
              {client.status}
            </span>
          </p>
          <p><strong>Ajouté le :</strong> {client.createdAt}</p>
        </div>

        {/* Notes */}
        {client.notes?.length ? (
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">📝 Notes personnelles</h3>
            <ul className="list-disc list-inside text-sm text-white/80 space-y-1">
              {client.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Projets */}
        {client.projects?.length ? (
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">📁 Projets associés</h3>
            <div className="grid grid-cols-2 gap-4">
              {client.projects?.map((project) => (
                <ProjectFolderTile
                  key={project.id}
                  project={project}
                />
              ))}
            </div>     
          </div>
        ) : null}

        {/* Documents */}
        {client.documents?.length ? (
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">📄 Documents</h3>
            <ul className="space-y-2 text-sm">
              {client.documents.map(doc => (
                <li key={doc.id} className="bg-white/10 p-2 rounded-md border border-white/10 flex justify-between items-center">
                  <div>
                    <p className="font-medium">{doc.fileName}</p>
                    <p className="text-xs text-white/60">{doc.type} • {doc.createdAt}</p>
                  </div>
                  <a
                    href={doc.url}
                    download
                    className="text-xs underline text-blue-200 hover:text-blue-100"
                  >
                    Télécharger
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {/* Échanges */}
        {client.exchanges?.length ? (
          <div>
            <h3 className="text-sm font-semibold text-white/90 mb-2">
              💬 Historique des échanges
            </h3>
            <ExchangeTimeline exchanges={client.exchanges} />
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}
