import { tipCategories } from '@/data/tips'
import { TipCategory } from '@/components/TipCategory'
import { BottomNav } from '@/components/BottomNav'

export const metadata = { title: 'Tips – Carnet Japon' }

export default function TipsPage() {
  return (
    <>
      <main className="mx-auto flex max-w-sm flex-col gap-8 px-4 pb-28 pt-6">
        <h1 className="text-3xl font-bold">Tips & Astuces</h1>

        {tipCategories.map(cat => (
          <TipCategory key={cat.id} cat={cat} />
        ))}
      </main>

      <BottomNav />
    </>
  )
}
