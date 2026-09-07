import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd, ResearchDetail } from '@/components/knowledge/research-index'
import { research } from '@/lib/knowledge'
import { absoluteUrl } from '@/lib/site-config'

export function generateStaticParams() { return research.map((item) => ({ slug: item.slug })) }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const item = research.find((entry) => entry.slug === slug); return item ? { title: `${item.question} | AKSOS`, description: item.directAnswer, alternates: { canonical: absoluteUrl(`/research/${item.slug}`) }, openGraph: { title: item.question, description: item.directAnswer, url: absoluteUrl(`/research/${item.slug}`), type: 'article' } } : {} }

export default async function ResearchDetailPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const item = research.find((entry) => entry.slug === slug); if (!item) notFound(); return <><JsonLd data={{ '@context': 'https://schema.org', '@type': 'Article', headline: item.question, description: item.directAnswer, datePublished: item.published, dateModified: item.updated, url: absoluteUrl(`/research/${item.slug}`), mainEntityOfPage: absoluteUrl(`/research/${item.slug}`), publisher: { '@type': 'Organization', name: 'AKSOS', url: 'https://aksos.net' }, citation: item.sources.map((source) => source.url), isBasedOn: item.sources.map((source) => source.url), breadcrumb: { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'AKSOS', item: 'https://aksos.net' }, { '@type': 'ListItem', position: 2, name: 'FRONTIER', item: absoluteUrl('/research') }, { '@type': 'ListItem', position: 3, name: 'Research', item: absoluteUrl('/research') }, { '@type': 'ListItem', position: 4, name: item.question, item: absoluteUrl(`/research/${item.slug}`) }] } }} /><ResearchDetail slug={slug} /></> }
