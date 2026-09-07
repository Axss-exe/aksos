import type { Metadata } from 'next'
import { ResearchIndex } from '@/components/knowledge/research-index'

export const metadata: Metadata = { title: 'Research | AKSOS', description: 'Source-backed research on AI strategy, digital infrastructure, and intelligence systems.' }

export default function ResearchPage() { return <ResearchIndex /> }
