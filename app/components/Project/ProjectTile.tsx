import type { Project } from "@/types/project";
import { CalendarCheck } from "lucide-react";

interface Props {
  project: Project;
  color?: string; // pour gérer les couleurs de tuile dynamiques
}

export default function ProjectTile({ project, color = "white" }: Props) {
  const bg =
    color === "blue"
      ? "bg-blue-100/30 text-blue-200"
      : color === "yellow"
      ? "bg-yellow-100/20 text-yellow-300"
      : "bg-white/10 text-white";

  return (
    <div
      className={`rounded-2xl p-4 backdrop-blur-md border border-white/10 shadow-md ${bg} flex flex-col justify-between min-h-[120px]`}
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-wide opacity-80">
            {project.status}
          </p>
          <h3 className="font-semibold text-base">{project.title}</h3>
        </div>
        <CalendarCheck className="w-5 h-5 opacity-50" />
      </div>

      <p className="text-xs mt-4 text-white/70">
        Démarré le {project.startDate}
      </p>
    </div>
  );
}
