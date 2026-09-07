'use client'

import Link from 'next/link'
import { useMemo, useState } from 'react'
import { buildSearchIndex, search } from '@/lib/knowledge'

export function KnowledgeSearch() {
  const [query, setQuery] = useState('')
  const index = useMemo(() => buildSearchIndex(), [])
  const results = search(query, index)

  function href(type: string, slug: string) {
    if (type === 'research') return `/research/${slug}`
    if (type === 'topic') return `/topics/${slug}`
    if (type === 'region') return `/regions/${slug}`
    return `/projects/${slug}`
  }

  return <div className="border-y border-border py-5"><label htmlFor="knowledge-search" className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">Search the knowledge layer</label><input id="knowledge-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try AI strategy, Zimbabwe, infrastructure..." className="mt-4 w-full border-0 bg-transparent text-xl outline-none placeholder:text-muted-foreground/60" />{query && <div className="mt-5 grid gap-px border border-border bg-border md:grid-cols-2">{results.length ? results.map((result) => <Link key={`${result.type}-${result.id}`} href={href(result.type, result.slug)} className="bg-background p-4 text-sm hover:bg-muted/40"><span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{result.type}</span><span className="mt-2 block">{result.title}</span></Link>) : <p className="bg-background p-4 text-sm text-muted-foreground">No indexed pages match that query.</p>}</div>}</div>
}
