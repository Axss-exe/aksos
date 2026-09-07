import type { MetadataRoute } from 'next'
import { research, regions, topics, projects } from '@/lib/knowledge'

const baseUrl = 'https://aksos.org'
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    '', '/research', '/regions', '/projects', '/about', '/atis', '/rita', '/participate',
    ...research.map((item) => `/research/${item.slug}`),
    ...regions.map((item) => `/regions/${item.slug}`),
    ...topics.map((item) => `/topics/${item.slug}`),
    ...projects.map((item) => `/projects/${item.slug}`),
  ].map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date('2025-09-07') }))
}
