export const SITE_URL = 'https://aksos.net'

export function absoluteUrl(path: string) {
  return new URL(path, SITE_URL).toString()
}
