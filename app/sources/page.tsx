import type { Metadata } from 'next'
import Link from 'next/link'
import { FrontierBreadcrumb, FrontierLabel, FrontierShell } from '@/components/frontier-shell'
import { sourceRegistry } from '@/lib/knowledge'

export const metadata: Metadata = { title: 'Sources | FRONTIER', description: 'Inspectable sources behind the FRONTIER research environment.' }

export default function SourcesPage() {
  return <FrontierShell><FrontierBreadcrumb items={[{ label: 'FRONTIER', href: '/research' }, { label: 'Sources' }]} /><main className="mx-auto max-w-7xl px-6 pb-24 pt-20 md:px-10 lg:pt-28"><FrontierLabel>Source registry</FrontierLabel><h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[0.96] tracking-[-0.04em] md:text-8xl">What the research is built on.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">FRONTIER keeps external evidence visible so readers can inspect the material behind each question.</p><ol className="mt-20 border-t border-border">{sourceRegistry.map((source, index) => <li key={source.id} className="grid gap-5 border-b border-border py-8 md:grid-cols-[5rem_1fr_auto] md:items-start"><span className="font-mono text-xs text-muted-foreground">{String(index + 1).padStart(2, '0')}</span><div><p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{source.organization} / {source.sourceType.replaceAll('-', ' ')}</p><h2 className="mt-3 max-w-2xl font-serif text-2xl leading-tight">{source.title}</h2></div><Link href={source.url} target="_blank" rel="noreferrer" className="font-mono text-[10px] uppercase tracking-[0.18em] underline underline-offset-4 hover:text-muted-foreground">Inspect source</Link></li>)}</ol></main></FrontierShell>
}
