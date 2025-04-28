'use client';

import { useState } from 'react';
import ClientCard from '../components/Clients/ClientCard';
import clients from '../data/mockupdata';
import ClientDetailsModal from '../components/Clients/ClientDetailsPanel';
import type { Client } from '@/types/client';


export default function Clients() {
  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-gray-800">Clients</h1>
        <p className="text-gray-500">Liste des clients</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {clients.map((client, index) => (
          <ClientCard
            key={index}
            firstName={client.firstName}
            lastName={client.lastName}
            companyName={client.companyName}
            avatarUrl={client.avatarUrl}
            email={client.email}
            phone={client.phone}
            status={client.status}
            onClick={() => {
              setSelectedClient(client);
              setModalOpen(true);
            }}        
          />
        ))}
      </div>
      <ClientDetailsModal
        client={selectedClient}
        isOpen={isModalOpen}
        onClose={() => {
          setSelectedClient(null);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
