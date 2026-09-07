import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const links = [
  ['Research', '/research'],
  ['Topics', '/topics/artificial-intelligence'],
  ['Regions', '/regions/africa'],
  ['Projects', '/projects/batana'],
  ['Sources', '/sources'],
] as const

export function FrontierShell({ children }: { children: React.ReactNode }) {
  return (
    <div data-frontier className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-start justify-between gap-6 px-6 py-6 md:px-10">
          <Link href="/" className="group flex items-center gap-4" aria-label="Return to AKSOS home">
            <span className="font-mono text-sm font-semibold tracking-[0.18em]">AKSOS</span>
            <span className="h-5 w-px bg-border" aria-hidden="true" />
            <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">FRONTIER</span>
          </Link>
          <p className="hidden max-w-xs text-right font-mono text-[10px] uppercase leading-5 tracking-[0.16em] text-muted-foreground md:block">
            A research environment for understanding change.
          </p>
        </div>
        <nav className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 pb-5 md:px-10" aria-label="FRONTIER navigation">
          {links.map(([label, href]) => <Link key={href} href={href} className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-foreground">{label}</Link>)}
        </nav>
      </header>
      {children}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">FRONTIER / AKSOS research environment</p>
          <Link href="/participate" className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.18em] hover:text-muted-foreground">Participate <ArrowUpRight className="size-3" aria-hidden="true" /></Link>
        </div>
      </footer>
    </div>
  )
}

export function FrontierBreadcrumb({ items }: { items: Array<{ label: string; href?: string }> }) {
  return <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-6 pt-8 md:px-10"><ol className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link href={item.href} className="hover:text-foreground">{item.label}</Link> : <span aria-current="page">{item.label}</span>}</li>)}</ol></nav>
}

export function FrontierLabel({ children }: { children: React.ReactNode }) {
  return <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{children}</p>
}
