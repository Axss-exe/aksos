import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'

const STEPS = [
  { label: 'Origin', detail: 'Where the signal was first observed, and by whom.' },
  { label: 'Custody', detail: 'Every hand it passed through on the way to your screen.' },
  { label: 'Corroboration', detail: 'What independent source, if any, agrees with it.' },
  { label: 'Confidence', detail: 'A stated, revisable degree of certainty — never false precision.' },
]

export function ProvenanceSection() {
  return (
    <section id="provenance" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="04" label="Provenance" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            An answer without a source is an opinion.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Every piece of intelligence that reaches an AKSOS-powered surface carries its own
            lineage. Not a footnote — a structural requirement. If a claim cannot be traced,
            it does not get to be a claim.
          </p>
        </Reveal>

        <div className="mt-20 flex flex-col gap-0 border-t border-border/60 md:flex-row">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.label}
              delay={i * 130}
              className="flex-1 border-b border-border/60 py-8 pr-6 md:border-b-0 md:border-r md:py-10 md:last:border-r-0"
            >
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-4 font-serif text-lg font-medium text-foreground">
                {step.label}
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-muted-foreground">
                {step.detail}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
