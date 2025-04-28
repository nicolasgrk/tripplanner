"use client";

import VisionHeader from "./components/Dashboard/VisionHeader";
import FocusCard from "./components/Dashboard/FocusCard";
import PipelineBar from "./components/Dashboard/PipelineBar";
import SkillsRadar from "./components/Dashboard/SkillsRadar";
import RecentSuccess from "./components/Dashboard/RecentSuccess";
import InboxZero from "./components/Dashboard/InboxZero";
import QuickNote from "./components/Dashboard/QuickNote";

// 📝 DUMMY DATA — remplace-les par tes hooks Prisma / fetch API
const pipelineStages = [
  { name: "Leads", count: 5, color: "sky" },
  { name: "Devis", count: 3, color: "amber" },
  { name: "doing", count: 4, color: "violet" },
  { name: "Payé", count: 3, color: "emerald" },
];

const radarData = [
  { category: "Design", value: 70 },
  { category: "Dev", value: 80 },
  { category: "Admin", value: 40 },
  { category: "Com'", value: 60 },
  { category: "Prospect", value: 55 },
];

const achievements = [
  { id: 1, message: "1 500 € encaissés cette semaine", icon: "DollarSign" },
  { id: 2, message: "Projet GreenTech livré hier", icon: "Rocket" },
];

const notifications = [
  { id: 1, type: "invoice", content: "Facture #F-015 payée par ACME", date: "il y a 1 h" },
  { id: 2, type: "message", content: "Nouveau message de Marie P.", date: "il y a 3 h" },
  { id: 3, type: "document", content: "Devis signé par BetaCorp", date: "hier" },
];

export default function HomeDashboard() {
  return (

    <div className="space-y-8">
      <div>
        {/* 1. Header */}
        <VisionHeader
          userName="Nicolas"
          dailyObjective="3 relances + 1 signature aujourd’hui"
        />
      </div>

      {/* 2. Row: Focus, Pipeline, Radar */}
      <section className="grid lg:grid-cols-3 gap-6">
        <FocusCard />
        <PipelineBar stages={pipelineStages} />
        <SkillsRadar data={radarData} />
      </section>

            {/* 3. Row: Succès, Inbox, Notes */}
      <section className="grid lg:grid-cols-3 gap-6">
        <RecentSuccess achievements={achievements} />
        <InboxZero notifications={notifications} />
        <QuickNote />
      </section>
    </div>
  );
}
