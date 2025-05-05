// components/TagPill.tsx
export function TagPill({ children }: { children: React.ReactNode }) {
    return (
      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur-sm">
        {children}
      </span>
    )
  }
  