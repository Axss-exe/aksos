import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import { zimbabweStory } from '@/data/zimbabwe-story'

export function ZimbabweSection() {
  return (
    <section id="zimbabwe" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="06" label={zimbabweStory.label} />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-3xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            {zimbabweStory.headline}
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {zimbabweStory.summary}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-[1.3fr_1fr]">
          <Reveal delay={250}>
            <h3 className="font-serif text-2xl font-medium text-foreground">
              {zimbabweStory.mechanism.title}
            </h3>
            <div className="mt-5 flex flex-col gap-4">
              {zimbabweStory.mechanism.body.map((para, i) => (
                <p key={i} className="text-[15px] leading-relaxed text-muted-foreground">
                  {para}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={350} className="border-l border-border/60 pl-8">
            <h3 className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted-foreground/70">
              {zimbabweStory.whyItMatters.title}
            </h3>
            <p className="mt-4 text-[15px] leading-relaxed text-foreground">
              {zimbabweStory.whyItMatters.body}
            </p>

            <div className="mt-10 border-t border-border/60 pt-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground/70">
                Sources
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {zimbabweStory.sources.map((source) => (
                  <li key={source.label} className="text-[13px] leading-relaxed text-muted-foreground">
                    {source.label}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
