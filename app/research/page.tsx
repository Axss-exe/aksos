import type { Metadata } from 'next'
import { ResearchIndex } from '@/components/knowledge/research-index'

export const metadata: Metadata = { title: 'FRONTIER — AKSOS Research', description: 'FRONTIER is AKSOS’s research environment: source-backed questions about AI strategy, digital infrastructure, institutions, and connected intelligence.', alternates: { canonical: 'https://aksos.net/research' } }

export default function ResearchPage() { return <ResearchIndex /> }
