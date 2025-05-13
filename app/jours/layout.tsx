import type { ReactNode } from 'react'
import { DaySwitcher } from '@/components/DaySwitcher'

interface Props {
  children: ReactNode
}

export default function JoursLayout({ children }: Props) {
  return (
    <>
      {children}
      <DaySwitcher />
    </>
  )
}
