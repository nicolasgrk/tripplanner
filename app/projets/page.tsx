'use client';                          // ← tout se passe côté client

import { DndContext } from '@dnd-kit/core';
import { mockProjects } from '../data/mockProjects';
import ProjectGlassCard from '../components/Project/ProjectGlassCard';
import { useDroppable, useDraggable } from '@dnd-kit/core';
import type { Project } from '@/types/project';

export default function Projets() {
  const projects = mockProjects;       // données “en dur”
  const columns = ['todo', 'doing', 'done', 'blocked'] as const;

  return (
    <>
    <div>
        <h1 className="text-2xl font-semibold text-gray-800">Projets</h1>
        <p className="text-gray-500">Liste des projets</p>
      </div>
    <DndContext>
      <section className="h-full flex gap-6 overflow-x-auto pb-6">
        {columns.map((col) => (
          <KanbanColumn key={col} id={col} name={col.toUpperCase()}>
            {projects
              .filter((p) => p.status === col)
              .map((p) => (
                <DraggableCard key={p.id} project={p} />
              ))}
          </KanbanColumn>
        ))}
      </section>
    </DndContext>
    </>
  );
}

function KanbanColumn({
  id,
  name,
  children,
}: {
  id: string;
  name: string;
  children: React.ReactNode;
}) {
  const { setNodeRef } = useDroppable({ id });
  return (
    <div ref={setNodeRef} className="flex-1 min-w-[260px] space-y-4">
      <h4 className="text-sm font-semibold px-2">{name}</h4>
      {children}
    </div>
  );
}

function DraggableCard({ project }: { project: Project }) {
  const { attributes, listeners, setNodeRef } = useDraggable({
    id: project.id,
  });
  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <ProjectGlassCard project={project} />
    </div>
  );
}
