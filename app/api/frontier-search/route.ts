import { NextResponse } from 'next/server'
import { buildSearchIndex, search } from '@/lib/knowledge'

export async function GET(request: Request) {
  const query = new URL(request.url).searchParams.get('q')?.trim() ?? ''
  if (!query) return NextResponse.json({ results: [] })
  return NextResponse.json({ results: search(query, buildSearchIndex()).slice(0, 12) }, { headers: { 'Cache-Control': 'public, max-age=60, stale-while-revalidate=300' } })
}
