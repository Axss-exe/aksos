import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { KnowledgeHeader } from '@/components/knowledge/research-index'
import { topics, research } from '@/lib/knowledge'

export function generateStaticParams() { return topics.map((topic) => ({ slug: topic.slug })) }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const topic = topics.find((entry) => entry.slug === slug); return topic ? { title: `${topic.name} | AKSOS`, description: topic.description } : {} }
export default async function TopicPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const topic = topics.find((entry) => entry.slug === slug); if (!topic) notFound(); const items = research.filter((item) => item.topics.includes(topic.id)); return <main className="min-h-screen bg-background text-foreground"><KnowledgeHeader eyebrow="Knowledge / Topic" title={topic.name} description={topic.description} /><section className="mx-auto max-w-6xl px-6 pb-24 md:px-10"><p className="max-w-2xl text-lg leading-8 text-muted-foreground">This topic index connects source-backed questions and related work across the AKSOS knowledge layer.</p><div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">{items.map((item) => <Link key={item.id} href={`/research/${item.slug}`} className="bg-background p-7 hover:bg-muted/40"><p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">Research</p><h2 className="mt-5 font-serif text-2xl leading-tight">{item.question}</h2></Link>)}</div></section></main> }
