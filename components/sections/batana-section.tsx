import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import { siteConfig } from '@/lib/site-config'

const ENTRY_MODES = [
  {
    title: 'Bring a question',
    body: 'A difficult record, a disputed account, or a decision that needs more than a confident answer.',
  },
  {
    title: 'Bring a dataset',
    body: 'A source that deserves structure, provenance, and a clearer path from evidence to action.',
  },
  {
    title: 'Bring a partnership',
    body: 'An institution willing to test the method where the distance between record and reality matters.',
  },
]

export function BatanaSection() {
  return (
    <section id="batana" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="09" label="Batana" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            The work enters through a real problem.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.batana.description}
          </p>
        </Reveal>
        <Reveal delay={250}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            The aim is not to promise an opportunity. It is to reduce the distance between people
            who can contribute and environments where that contribution may matter. Start with what
            is difficult to see, verify, or explain.
          </p>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden border border-border/60 md:grid-cols-3">
          {ENTRY_MODES.map((item, index) => (
            <Reveal
              key={item.title}
              delay={300 + index * 130}
              className="bg-background p-8"
            >
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                {index + 1}
              </p>
              <h3 className="mt-8 font-serif text-xl font-medium text-foreground">{item.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={700}>
          <p className="mt-12 max-w-xl border-l border-border/60 pl-6 font-mono text-[12px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
            Understand → orient → enter → act
          </p>
        </Reveal>
      </div>
    </section>
  )
}

export default BatanaSection
