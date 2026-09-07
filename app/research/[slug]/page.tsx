import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd, ResearchDetail } from '@/components/knowledge/research-index'
import { research } from '@/lib/knowledge'

export function generateStaticParams() { return research.map((item) => ({ slug: item.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = research.find((entry) => entry.slug === slug); return item ? { title: `${item.question} | AKSOS`, description: item.directAnswer, alternates: { canonical: `/research/${item.slug}` } } : {} }

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = research.find((entry) => entry.slug === slug); if (!item) notFound(); return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: item.question, description: item.directAnswer, datePublished: item.published, dateModified: item.updated, publisher: { '@type': 'Organization', name: 'AKSOS' }, citation: item.sources.map((source) => source.url) }} /><ResearchDetail slug={slug} /></> }
