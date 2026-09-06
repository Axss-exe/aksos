import { Reveal } from '@/components/reveal'

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <Reveal>
      <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
        {index} — {label}
      </p>
    </Reveal>
  )
}
