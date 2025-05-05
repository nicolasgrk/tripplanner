import { days } from '@/data/jours'
import { SectionCard } from '@/components/SectionCard'
import { notFound } from 'next/navigation'
import { StepCounter } from '@/components/StepCounter'

export default function DayPage({ params }: { params: { id: string } }) {
  const day = days[params.id]
  if (!day) return notFound()

  return (
    <>
      <main className="mx-auto flex max-w-sm flex-col gap-8 px-4 pb-32 pt-6">
        <h1 className="text-3xl font-bold">Jour {params.id}</h1>

        {day.sections.map((s, i) => (
          <SectionCard key={i} section={s} />
        ))}
        <StepCounter dateKey={`2025-05-${params.id.padStart(2, '0')}`} />

      </main>
    </>
  )
}
