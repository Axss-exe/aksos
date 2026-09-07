export const SITE_URL = 'https://aksos.net'

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}

/**
 * Canonical identity for AKSOS and its three pillars. This is the single source of
 * truth for how AKSOS, FRONTIER, ATIS and BATANA are described across the site —
 * copy, metadata and structured data should all trace back to these definitions.
 */
export const siteConfig = {
  name: 'AKSOS',
  url: SITE_URL,
  description:
    'AKSOS is an emerging research and technology initiative focused on helping people understand complex environments, particularly across Africa, Southern Africa and Zimbabwe.',
  founder: {
    name: 'Tino Makiriyado',
  },
  frontier: {
    name: 'FRONTIER',
    description: 'FRONTIER is the research and knowledge arm of AKSOS.',
  },
  atis: {
    name: 'ATIS',
    description:
      'ATIS is an environment-understanding and intelligence system designed to help actors see developments, understand context, orient themselves and make better-informed decisions.',
  },
  batana: {
    name: 'BATANA',
    description:
      'BATANA is the participation layer of AKSOS, helping people make their skills, interests, organizations and direction more discoverable within complex environments.',
  },
} as const
