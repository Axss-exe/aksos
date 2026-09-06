import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'RITA — AKSOS',
  description:
    'RITA is the Reasoning & Integrity layer that sits beneath ATIS inside the AKSOS operating environment.',
}

const PRINCIPLES = [
  {
    title: 'No silent inference',
    body: 'If RITA connects two facts, the connection is stated, not implied. Analysts can see exactly how a conclusion was reached.',
  },
  {
    title: 'Confidence, not certainty',
    body: 'Every output carries a stated confidence that moves as corroboration arrives or erodes — never frozen at first pass.',
  },
  {
    title: 'Reversible reasoning',
    body: 'Any conclusion can be walked back to its source signal. Nothing in ATIS is a dead end.',
  },
  {
    title: 'Internal by design',
    body: "RITA has no interface of its own. It exists entirely to make what ATIS shows you defensible — it is AKSOS's integrity layer, not a separate product.",
  },
]

export default function RitaPage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
                Internal Layer
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 max-w-2xl text-balance font-serif text-5xl font-light leading-[1.08] text-foreground md:text-6xl">
                RITA
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
                RITA — Reasoning &amp; Integrity, Traceable Analysis — is the layer of AKSOS that
                sits beneath ATIS. It has no separate address and no separate login. Its entire
                job is to make sure that what ATIS surfaces has a defensible reason for existing.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="border-b border-border/60 bg-card/40">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
            <div className="grid grid-cols-1 gap-0 border-t border-border/60 md:grid-cols-2">
              {PRINCIPLES.map((item, i) => (
                <Reveal
                  key={item.title}
                  delay={i * 110}
                  className="border-b border-border/60 py-10 md:odd:border-r md:odd:pr-10 md:even:pl-10"
                >
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
                See it applied
              </p>
              <h2 className="mt-6 text-balance font-serif text-3xl font-light leading-tight text-foreground md:text-4xl">
                RITA is easier to see in use than to describe in the abstract.
              </h2>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
                <Link
                  href="https://atis.aksos.net"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
                >
                  See it in ATIS
                </Link>
                <Link
                  href="/#zimbabwe"
                  className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  Read the Zimbabwe case study
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
