import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import { siteConfig } from '@/lib/site-config'

export function IdentitySection() {
  return (
    <section id="identity" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="00" label="AKSOS" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            What is AKSOS?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.description} Our work brings together research, evidence, technology and
            systems thinking to make difficult environments easier to see and understand.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-border/60 pt-14 sm:grid-cols-3">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              What AKSOS is
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              We research, prototype and build ways of making complex environments easier to see,
              understand and participate in.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              Where we focus
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Africa, Southern Africa and Zimbabwe, where information, institutions, technology,
              skills and participation often intersect in complex ways.
            </p>
          </div>
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
              What we are building
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              A connected research and technology ecosystem that includes {siteConfig.frontier.name},{' '}
              {siteConfig.atis.name} and {siteConfig.batana.name}.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
