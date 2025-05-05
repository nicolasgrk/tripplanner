// components/GlassContainer.tsx
import { cn } from '@/lib/utils'   // tiny util pour concat classes

export function GlassContainer({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={cn(
        'rounded-2xl border border-white/20 bg-white/20 backdrop-blur-md shadow-lg',
        'dark:bg-slate-800/25 dark:border-slate-300/10',
        className
      )}
    >
      {children}
    </div>
  )
}
