import { Reveal } from '@/components/reveal'
import Link from 'next/link'

const ENTRY_POINTS = [
  {
    title: 'Use ATIS',
    body: 'See the platform running the AKSOS operating environment.',
    href: 'https://atis.aksos.net',
    cta: 'Visit atis.aksos.net',
    external: true,
  },
  {
    title: 'Understand RITA',
    body: 'Read how the reasoning and integrity layer is built.',
    href: '/rita',
    cta: 'Go to RITA',
    external: false,
  },
  {
    title: 'Participate',
    body: 'Bring a problem, a dataset, or a hard question to AKSOS.',
    href: '/participate',
    cta: 'Start the conversation',
    external: false,
  },
]

export function ClosingSection() {
  return (
    <section id="entry" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <Reveal>
          <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
            09 — Entry
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            Choose where you start.
          </h2>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border/60 md:grid-cols-3">
          {ENTRY_POINTS.map((entry, i) => (
            <Reveal key={entry.title} delay={i * 130} className="flex flex-col justify-between bg-background p-8">
              <div>
                <h3 className="font-serif text-xl font-medium text-foreground">{entry.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {entry.body}
                </p>
              </div>
              <Link
                href={entry.href}
                target={entry.external ? '_blank' : undefined}
                rel={entry.external ? 'noopener noreferrer' : undefined}
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                {entry.cta}
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
