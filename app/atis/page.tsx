import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { TracedMark } from '@/components/visuals/traced-mark'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'ATIS — AKSOS',
  description:
    'ATIS is the applied intelligence platform built on AKSOS, running at atis.aksos.net.',
}

const WORKFLOWS = [
  {
    title: 'Entity resolution',
    body: 'Collapse duplicate, aliased, and partial records of the same person or organization into one provenance-backed profile.',
  },
  {
    title: 'Signal triage',
    body: 'Rank incoming reports by corroboration and confidence, not by arrival time.',
  },
  {
    title: 'Case building',
    body: 'Assemble a defensible chain of evidence that survives being challenged, in the room or in court.',
  },
  {
    title: 'Continuous monitoring',
    body: 'Standing queries that re-evaluate as new signal arrives, instead of a single point-in-time report.',
  },
]

export default function AtisPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-[1fr_auto] md:items-start">
              <div className="max-w-2xl">
                <Reveal>
                  <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
                    Platform
                  </p>
                </Reveal>
                <Reveal delay={100}>
                  <h1 className="mt-6 text-balance font-serif text-5xl font-light leading-[1.08] text-foreground md:text-6xl">
                    ATIS
                  </h1>
                </Reveal>
                <Reveal delay={200}>
                  <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                    ATIS is the applied intelligence platform built on the AKSOS operating
                    environment. It is a live product — not a showcase — used by analysts and
                    institutions to turn scattered signal into a structured, sourced, and
                    defensible answer. RITA runs underneath every result it returns.
                  </p>
                </Reveal>
                <Reveal delay={300}>
                  <Link
                    href="https://atis.aksos.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-10 inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                  >
                    Open atis.aksos.net
                  </Link>
                </Reveal>
              </div>
              <Reveal delay={200}>
                <TracedMark src="/atis-symbol.svg" alt="ATIS symbol" size={160} />
              </Reveal>
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <h2 className="max-w-xl text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                Built around real analytical workflows.
              </h2>
            </Reveal>
            <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden border border-border/60 sm:grid-cols-2">
              {WORKFLOWS.map((item, i) => (
                <Reveal key={item.title} delay={i * 110} className="bg-background p-8">
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
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal className="max-w-2xl">
              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
                Underneath
              </p>
              <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                Every result in ATIS is answerable to RITA.
              </h2>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                ATIS does not generate conclusions on its own authority. Each one is checked,
                sourced, and scored by RITA before it ever reaches a screen.
              </p>
              <Link
                href="/rita"
                className="mt-8 inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
              >
                Read about RITA
              </Link>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
