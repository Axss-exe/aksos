import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Reveal } from '@/components/reveal'
import { ParticipationForm } from '@/components/participation-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Participate — AKSOS',
  description: 'Bring a problem, a dataset, or a hard question to AKSOS.',
}

export default function ParticipatePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-20">
        <section className="border-b border-border/60">
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-32">
            <Reveal>
              <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
                Participation
              </p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 max-w-xl text-balance font-serif text-4xl font-light leading-tight text-foreground md:text-5xl">
                Bring AKSOS a problem worth solving.
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
                Whether you're an institution evaluating ATIS, a researcher with a dataset, or a
                partner with a hard question — this reaches the team directly at{' '}
                <span className="font-mono text-foreground">connect@aksos.net</span>.
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-16 max-w-2xl">
              <ParticipationForm />
            </Reveal>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
