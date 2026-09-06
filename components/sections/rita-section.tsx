import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import Link from 'next/link'

const LAYERS = [
  {
    title: 'Reasoning',
    body: 'RITA does not surface a match — it surfaces why the match holds, and what would break it.',
  },
  {
    title: 'Integrity',
    body: 'Every inference carries its own chain of custody, visible on request, not buried in a log file.',
  },
  {
    title: 'Traceable Analysis',
    body: 'Conclusions are reversible. Anyone with access can walk back from the answer to the raw signal that produced it.',
  },
]

export function RitaSection() {
  return (
    <section id="rita" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="02" label="RITA" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            The layer underneath ATIS that makes it trustworthy.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            RITA — AKSOS's Reasoning &amp; Integrity engine — is not a separate product. It is
            the internal layer that sits beneath ATIS and gives every output inside it a reason,
            a source, and a way to be checked. Where ATIS is what you see, RITA is why you can
            trust what you're seeing.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border/60 sm:grid-cols-3">
          {LAYERS.map((item, i) => (
            <Reveal key={item.title} delay={i * 140} className="bg-background p-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {String(i + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-4 font-serif text-xl font-medium text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <Link
            href="/rita"
            className="mt-14 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
          >
            More on RITA
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
