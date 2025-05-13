// app/jours/[id]/page.tsx
import { days } from '@/data/jours'
import { SectionCard } from '@/components/SectionCard'
import { StepCounter } from '@/components/StepCounter'
import { notFound } from 'next/navigation'

export default async function DayPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params          // ⬅️ on déballe la promesse
  const day = days[id]
  if (!day) return notFound()

  return (
    <main className="mx-auto flex max-w-sm flex-col gap-8 px-4 pb-32 pt-6">
      <h1 className="text-3xl font-bold">Jour {id}</h1>

      {day.sections.map((s, i) => (
        <SectionCard key={i} section={s} />
      ))}
      <StepCounter dateKey={`2025-05-${id.padStart(2, '0')}`} />
    </main>
  )
}
