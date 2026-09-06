import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import Link from 'next/link'

export function ParticipationSectionPreview() {
  return (
    <section id="participation" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="05" label="Participation" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            Intelligence infrastructure is built with, not for.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            AKSOS grows through the institutions, analysts, and partners who bring it real
            problems. Every contributed dataset, every corrected inference, every hard question
            makes ATIS more defensible for the next person who depends on it.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Link
            href="/participate"
            className="mt-10 inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Participate in AKSOS
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
