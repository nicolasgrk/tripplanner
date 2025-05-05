// components/SectionHeader.tsx
export function SectionHeader({
    emoji,
    title,
  }: {
    emoji: string
    title: string
  }) {
    return (
      <h2 className="flex items-center gap-2 text-lg font-semibold tracking-tight md:text-xl">
        <span className="text-2xl">{emoji}</span> {title}
      </h2>
    )
  }
  