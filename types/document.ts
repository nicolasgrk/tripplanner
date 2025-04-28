export type Document = {
    id: string;
    type: 'Devis' | 'Facture' | 'Contrat';
    fileName: string;
    url: string;
    createdAt: string;
  };
  