"use client";

import { useState } from "react";
import { Plus, LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface DocumentToolbarProps {
  /** Clients disponibles pour le filtre */
  clients: string[];
  /** Projets dépendant du client sélectionné */
  projects: string[];
  /** Valeurs sélectionnées (null -> aucune) */
  selectedClient: string | null;
  selectedProject: string | null;
  /** Vue courante */
  view: "grid" | "table";
  onClientChange?: (client: string | null) => void;
  onProjectChange?: (project: string | null) => void;
  onSearch?: (query: string) => void;
  onToggleView?: (view: "grid" | "table") => void;
  onUpload?: () => void;
}

export default function DocumentToolbar({
  clients,
  projects,
  selectedClient,
  selectedProject,
  view,
  onClientChange,
  onProjectChange,
  onSearch,
  onToggleView,
  onUpload,
}: DocumentToolbarProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-wrap gap-4 items-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-4 shadow-md w-full">
      {/* Select client */}
      <Select
        value={selectedClient ?? undefined}
        onValueChange={(v) => onClientChange?.(v || null)}
      >
        <SelectTrigger className="w-[160px]">
          <SelectValue placeholder="Client" />
        </SelectTrigger>
        <SelectContent>
          {clients.map((c) => (
            <SelectItem key={c} value={c}>
              {c}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Select projet */}
      <Select
        value={selectedProject ?? undefined}
        onValueChange={(v) => onProjectChange?.(v || null)}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Projet" />
        </SelectTrigger>
        <SelectContent>
          {projects.map((p) => (
            <SelectItem key={p} value={p}>
              {p}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Search */}
      <Input
        placeholder="Rechercher un document…"
        value={search}
        onChange={(e) => {
          const v = e.target.value;
          setSearch(v);
          onSearch?.(v);
        }}
        className="max-w-xs flex-1 min-w-[180px]"
      />

      {/* View toggle + Upload */}
      <div className="ml-auto flex gap-2">
        <Button
          size="icon"
          variant={view === "grid" ? "secondary" : "ghost"}
          onClick={() => onToggleView?.("grid")}
          aria-label="Vue grille"
        >
          <LayoutGrid size={18} />
        </Button>
        <Button
          size="icon"
          variant={view === "table" ? "secondary" : "ghost"}
          onClick={() => onToggleView?.("table")}
          aria-label="Vue table"
        >
          <List size={18} />
        </Button>
        <Button onClick={onUpload} aria-label="Uploader un document">
          <Plus className="mr-2 h-4 w-4" /> Uploader
        </Button>
      </div>
    </div>
  );
}
