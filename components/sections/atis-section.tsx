import { Reveal } from '@/components/reveal'
import { TracedMark } from '@/components/visuals/traced-mark'
import { SectionLabel } from '@/components/sections/section-label'
import Link from 'next/link'

const CAPABILITIES = [
  {
    title: 'Signal ingestion',
    body: 'Structured and unstructured sources enter through the same disciplined pipeline — no source is trusted by default, including your own.',
  },
  {
    title: 'Cross-referencing',
    body: 'Every claim is checked against what else is known, automatically, before it is allowed to stand alone.',
  },
  {
    title: 'Institutional memory',
    body: 'Nothing resets. What ATIS learns about a person, entity, or pattern persists across every future query.',
  },
]

export function AtisSection() {
  return (
    <section id="atis" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto]">
          <div className="max-w-2xl">
            <SectionLabel index="01" label="ATIS" />
            <Reveal delay={100}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                The platform where AKSOS becomes visible.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                ATIS is the applied intelligence environment built on AKSOS — the surface
                analysts, operators, and decision-makers actually work in. It is where
                fragmented signal becomes a structured, defensible answer.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
                It is a live product, not a demo environment for AKSOS — running at{' '}
                <span className="font-mono text-foreground">atis.aksos.net</span>.
              </p>
            </Reveal>
            <Reveal delay={400}>
              <Link
                href="https://atis.aksos.net"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
              >
                Visit ATIS
              </Link>
            </Reveal>
          </div>

          <Reveal delay={200} className="flex items-start justify-start md:justify-end">
            <TracedMark src="/atis-symbol.svg" alt="ATIS symbol" size={140} />
          </Reveal>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-10 border-t border-border/60 pt-14 sm:grid-cols-3">
          {CAPABILITIES.map((item, i) => (
            <Reveal key={item.title} delay={i * 120}>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-serif text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
