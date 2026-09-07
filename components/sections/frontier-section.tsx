import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'
import { siteConfig } from '@/lib/site-config'
import Link from 'next/link'

const ORGANIZED_BY = ['Questions', 'Topics', 'Regions', 'Entities', 'Projects', 'Sources']

export function FrontierSection() {
  return (
    <section id="frontier" className="border-b border-border/60 bg-card/40">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="02" label="FRONTIER" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            Questions worth seeing clearly.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {siteConfig.frontier.description} It brings together source-backed research, evidence
            and analysis on technology, artificial intelligence, institutions and changing
            environments across Africa, Southern Africa and Zimbabwe.
          </p>
        </Reveal>
        <Reveal delay={300}>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Research is organized around questions, topics, regions, entities, projects and
            sources so that individual findings can be understood within a wider context.
          </p>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-3">
          {ORGANIZED_BY.map((item, i) => (
            <Reveal key={item} delay={i * 80}>
              <span className="border border-border/60 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                {item}
              </span>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <Link
            href="/research"
            className="mt-14 inline-flex items-center gap-2 border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Explore FRONTIER
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
