import Link from 'next/link'
import { ArrowUpRight, Search } from 'lucide-react'
import { topics, regions, research } from '@/lib/knowledge'
import { KnowledgeSearch } from './search'
import { FrontierBreadcrumb, FrontierLabel, FrontierShell } from '@/components/frontier-shell'

export function ResearchIndex() {
  return (
    <FrontierShell>
      <FrontierBreadcrumb items={[{ label: 'FRONTIER' }, { label: 'Research' }]} />
      <main>
        <section className="mx-auto flex max-w-7xl flex-col gap-12 px-6 pb-24 pt-20 md:px-10 lg:pt-28">
          <div className="max-w-4xl">
            <FrontierLabel>Research / What is changing?</FrontierLabel>
            <h1 className="mt-7 text-balance font-serif text-5xl leading-[0.96] tracking-[-0.04em] md:text-8xl">Questions worth seeing clearly.</h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground">A research environment for understanding the systems, technologies and ideas shaping Africa&apos;s next horizon.</p>
          </div>
          <KnowledgeSearch />
          <div className="border-y border-border">
          {research.map((item) => (
            <Link key={item.id} href={`/research/${item.slug}`} className="group flex min-h-64 flex-col justify-between bg-background p-7 transition-colors hover:bg-muted/40 md:p-9">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Research / {item.updated}</p>
                <h2 className="mt-8 max-w-xl font-serif text-3xl leading-tight tracking-[-0.03em]">{item.question}</h2>
              </div>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                <span>{item.regions.map((region) => region.replace('-', ' ')).join(' / ')}</span>
                <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" aria-hidden="true" />
              </div>
            </Link>
          ))}
          </div>
        </section>
        <section className="border-t border-border">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2 md:px-10">
          <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Browse by topic</p><div className="mt-6 flex flex-wrap gap-3">{topics.map((topic) => <Link key={topic.id} href={`/topics/${topic.slug}`} className="border border-border px-4 py-3 text-sm hover:bg-muted/40">{topic.name}</Link>)}</div></div>
          <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Browse by region</p><div className="mt-6 flex flex-wrap gap-3">{regions.map((region) => <Link key={region.id} href={`/regions/${region.slug}`} className="border border-border px-4 py-3 text-sm hover:bg-muted/40">{region.name}</Link>)}</div></div>
        </div>
        </section>
      </main>
    </FrontierShell>
  )
}

export function ResearchDetail({ slug }: { slug: string }) {
  const item = research.find((entry) => entry.slug === slug)
  if (!item) return null
  return <FrontierShell><FrontierBreadcrumb items={[{ label: 'FRONTIER', href: '/research' }, { label: 'Research', href: '/research' }, { label: item.title ?? item.question }]} /><main><article className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:px-10 lg:pt-24"><Link href="/research" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">← Research index</Link><p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Research / {item.updated}</p><h1 className="mt-6 text-balance font-serif text-5xl leading-[0.98] tracking-[-0.04em] md:text-7xl">{item.question}</h1><div className="mt-14 border-y border-border py-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Direct answer</p><p className="mt-5 max-w-3xl font-serif text-2xl leading-tight md:text-4xl">{item.directAnswer}</p></div><div className="mt-16 grid gap-16 md:grid-cols-[1fr_0.32fr]"><div className="flex flex-col gap-14"><ResearchSection title="Why it matters" text={item.whyItMatters} /><ResearchSection title="The landscape" text={item.landscape} /><section><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Evidence</h2><p className="mt-5 text-lg leading-8 text-foreground/80">{item.evidence}</p>{item.evidenceItems?.length ? <div className="mt-8 flex flex-col gap-4">{item.evidenceItems.map((evidence) => <div key={evidence.id} className="border-l border-border pl-5"><p className="text-base leading-7">{evidence.claim}</p><p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">{item.sources.find((source) => source.id === evidence.sourceId)?.organization} {evidence.sourceDate ? ` / ${evidence.sourceDate}` : ''}</p></div>)}</div> : null}</section><ResearchSection title="AKSOS analysis" text={item.analysis} /><ResearchSection title="Limitations" text={item.limitations} /></div><aside className="flex flex-col gap-10"><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Entities</p><ul className="mt-4 flex flex-col gap-3">{item.entities.map((entity) => <li key={entity.id} className="text-sm">{entity.name}</li>)}</ul></div><div><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Sources</p><ul className="mt-4 flex flex-col gap-4">{item.sources.map((source) => <li key={source.id}><a href={source.url} target="_blank" rel="noreferrer" className="text-sm leading-6 underline decoration-border underline-offset-4 hover:decoration-foreground">{source.organization}: {source.title}</a><p className="mt-1 text-xs text-muted-foreground">{source.publishedDate}</p></li>)}</ul></div></aside></div><div className="mt-20 border-t border-border pt-10"><p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Related research</p><div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-2">{item.relatedQuestions.map((related) => { const r = research.find((entry) => entry.id === related); return r ? <Link key={r.id} href={`/research/${r.slug}`} className="bg-background p-5 text-sm hover:bg-muted/40">{r.question}</Link> : null })}</div></div></article></main></FrontierShell>
}

function ResearchSection({ title, text }: { title: string; text: string }) { return <section><h2 className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{title}</h2><p className="mt-5 text-lg leading-8 text-foreground/80">{text}</p></section> }

export function KnowledgeHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) { return <header className="mx-auto max-w-6xl px-6 pb-16 pt-32 md:px-10 lg:pt-44"><p className="font-mono text-xs uppercase tracking-[0.24em] text-muted-foreground">{eyebrow}</p><h1 className="mt-7 max-w-4xl text-balance font-serif text-5xl leading-[0.96] tracking-[-0.04em] md:text-8xl">{title}</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">{description}</p></header> }

export function SearchIconLabel() { return <Search className="size-4" aria-hidden="true" /> }

export function JsonLd({ data }: { data: Record<string, unknown> }) { return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} /> }
