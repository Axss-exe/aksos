import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'

export function PerspectiveSection() {
  return (
    <section id="perspective" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
          <div>
            <SectionLabel index="05" label="Perspective" />
            <Reveal delay={100}>
              <h2 className="mt-6 text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                The same facts read differently from every seat.
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
                A compliance officer, a portfolio manager, and a field investigator do not need
                the same view of the same underlying record. AKSOS keeps one shared, provenance-
                backed base of truth, and lets each seat query it in the shape their work
                actually requires.
              </p>
            </Reveal>
          </div>

          <Reveal delay={250}>
            <div className="border border-border/60">
              {[
                { role: 'Compliance', question: 'Does this counterparty appear anywhere it shouldn\u2019t?' },
                { role: 'Investment', question: 'What has changed about this position since last quarter?' },
                { role: 'Field', question: 'Who else has already looked at this entity, and what did they find?' },
              ].map((row, i) => (
                <div
                  key={row.role}
                  className={`flex items-start gap-6 px-6 py-6 ${i > 0 ? 'border-t border-border/60' : ''}`}
                >
                  <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground/70 shrink-0 pt-1">
                    {row.role}
                  </span>
                  <p className="text-[15px] leading-relaxed text-foreground">{row.question}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
