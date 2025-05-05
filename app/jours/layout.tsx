// app/jours/layout.tsx
import { ReactNode } from 'react'
import { DaySwitcher } from '@/components/DaySwitcher'

export default function JoursLayout({ children }: { children: ReactNode }) {
  return (
    <>
      {children}          {/* contenu spécifique au jour */}
      <DaySwitcher />     {/* flèches <-  -> centrées verticalement */}
    </>
  )
}
