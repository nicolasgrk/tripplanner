'use client';

import { X } from 'lucide-react';

interface SliderProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Slider({ isOpen, onClose, children }: SliderProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-screen w-96 bg-red-500 transform transition-transform duration-300 ease-in-out">
      <div className="p-4 border-b">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Détails</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </button>
        </div>
      </div>
      <div className="p-4">
        {children}
      </div>
    </div>
  );
} 