import Link from 'next/link'

const NAV_ITEMS = [
  { label: 'ATIS', href: '/atis' },
  { label: 'RITA', href: '/rita' },
  { label: 'Provenance', href: '/#provenance' },
  { label: 'Zimbabwe', href: '/#zimbabwe' },
  { label: 'Horizon', href: '/#horizon' },
]

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-[13px] uppercase tracking-[0.22em] text-foreground"
        >
          <img src="/aksos-symbol.svg" alt="" width={20} height={17} className="opacity-90" />
          AKSOS
        </Link>

        <nav className="hidden items-center gap-8 font-mono text-[12px] uppercase tracking-[0.16em] text-muted-foreground md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/participate"
          className="font-mono text-[12px] uppercase tracking-[0.16em] text-foreground underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground"
        >
          Participate
        </Link>
      </div>
    </header>
  )
}
