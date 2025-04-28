// types/client.ts
import type { Project } from './project';
import type { Document } from './document';
import type { Exchange } from './exchange';
export type ClientStatus = 'Actif' | 'Inactif' | 'En attente' | 'Prospect';

export type Client = {
  id: string;
  firstName: string;
  lastName: string;
  companyName: string;
  avatarUrl: string;
  email: string;
  phone: string;
  status: ClientStatus;

  notes?: string[]; // notes perso
  createdAt: string;

  exchanges?: Exchange[];    // 💬 Historique des échanges
  projects?: Project[];      // 📁 Projets associés
  documents?: Document[];    // 📄 Devis, factures, contrats, etc.
};
