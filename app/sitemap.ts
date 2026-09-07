import type { MetadataRoute } from 'next'
import { research, regions, topics, projects } from '@/lib/knowledge'
import { absoluteUrl } from '@/lib/site-config'

const staticRoutes = ['', '/about', '/research', '/regions', '/projects', '/sources', '/atis', '/rita', '/participate']

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticRoutes.map((path) => ({ url: absoluteUrl(path) })),
    ...research.map((item) => ({ url: absoluteUrl(`/research/${item.slug}`), lastModified: new Date(item.updated) })),
    ...regions.map((item) => ({ url: absoluteUrl(`/regions/${item.slug}`) })),
    ...topics.map((item) => ({ url: absoluteUrl(`/topics/${item.slug}`) })),
    ...projects.map((item) => ({ url: absoluteUrl(`/projects/${item.slug}`) })),
  ]
}
