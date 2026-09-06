import { HeroFieldCanvas } from '@/components/visuals/hero-field-canvas'
import Link from 'next/link'

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden border-b border-border/60 pt-20"
    >
      <HeroFieldCanvas />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/10 via-transparent to-background" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <p className="font-mono text-[12px] uppercase tracking-[0.28em] text-muted-foreground">
          AKSOS / RESEARCHING CONNECTED INTELLIGENCE
        </p>
        <h1 className="mt-8 max-w-3xl text-balance font-serif text-5xl font-light leading-[1.08] text-foreground sm:text-6xl md:text-7xl">
          WHAT&apos;S BENEATH COMPLEXITY?
        </h1>
        <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
          There is rarely a shortage of information. The difficult part is understanding what belongs together. A company announces an investment. A regulation changes. A ministry publishes a decision. A bank finances a project. A new supplier appears. A market responds. Each event can be understood on its own. The more difficult question is what becomes visible when they are understood together. AKSOS is researching what becomes possible when those relationships are made visible.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link
            href="/atis"
            className="border border-foreground px-6 py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-foreground transition-colors hover:bg-foreground hover:text-background"
          >
            Enter ATIS
          </Link>
          <a
            href="#provenance"
            className="font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
          >
            How it's built
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground/60">
        Scroll
      </div>
    </section>
  )
}
