import { Reveal } from '@/components/reveal'
import { SectionLabel } from '@/components/sections/section-label'

const HORIZON_ITEMS = [
  {
    title: 'Beyond one geography',
    body: 'The Zimbabwe case study is a proof of mechanism, not a boundary. The same discipline applies anywhere an official record and the observable truth can drift apart.',
  },
  {
    title: 'Beyond one seat',
    body: 'ATIS today serves analysts and operators directly. The roadmap extends the same provenance guarantees to systems that act on AKSOS data programmatically.',
  },
  {
    title: 'Beyond one moment',
    body: 'RITA is built to keep reasoning about a record long after it is first filed — revisiting confidence as new corroboration, or contradiction, arrives.',
  },
]

export function HorizonSection() {
  return (
    <section id="horizon" className="border-b border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-28 md:py-36">
        <SectionLabel index="07" label="Horizon" />
        <Reveal delay={100}>
          <h2 className="mt-6 max-w-2xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
            What's built next follows the same discipline.
          </h2>
        </Reveal>

        <div className="mt-20 flex flex-col gap-0 border-t border-border/60">
          {HORIZON_ITEMS.map((item, i) => (
            <Reveal
              key={item.title}
              delay={i * 130}
              className="grid grid-cols-1 gap-4 border-b border-border/60 py-10 md:grid-cols-[220px_1fr] md:gap-16"
            >
              <h3 className="font-serif text-xl font-medium text-foreground">{item.title}</h3>
              <p className="max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
