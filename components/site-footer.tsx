import Link from 'next/link'

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground">
              <img src="/aksos-symbol.svg" alt="" width={18} height={15} className="opacity-90" />
              AKSOS
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              The operating environment beneath institutional intelligence. Built for the
              record, not the headline.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground sm:grid-cols-3">
            <div className="flex flex-col gap-3">
              <span className="text-foreground/70">Platform</span>
              <Link href="/atis" className="hover:text-foreground">
                ATIS
              </Link>
              <Link href="/rita" className="hover:text-foreground">
                RITA
              </Link>
              <Link href="/research" className="hover:text-foreground">
                Frontier
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground/70">Site</span>
              <Link href="/about" className="hover:text-foreground">
                About
              </Link>
              <Link href="/#provenance" className="hover:text-foreground">
                Provenance
              </Link>
              <Link href="/#zimbabwe" className="hover:text-foreground">
                Case Study
              </Link>
              <Link href="/#horizon" className="hover:text-foreground">
                Horizon
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-foreground/70">Connect</span>
              <Link href="/participate" className="hover:text-foreground">
                Participate
              </Link>
              <a href="mailto:connect@aksos.net" className="hover:text-foreground">
                connect@aksos.net
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground/70 sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} AKSOS. All rights reserved.</span>
          <span>Provenance-first. Monochrome by design.</span>
        </div>
      </div>
    </footer>
  )
}
