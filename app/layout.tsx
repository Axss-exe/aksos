import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SITE_URL, siteConfig } from '@/lib/site-config'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600', '700'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'AKSOS — Research, Technology & Understanding Complex Environments',
    template: '%s | AKSOS',
  },
  description: siteConfig.description,
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
      },
    ],
    apple: '/icon-dark-32x32.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f5f0' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${spaceGrotesk.variable} ${plexMono.variable}`}>
      <body className="antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Organization',
                  '@id': `${SITE_URL}/#organization`,
                  name: siteConfig.name,
                  url: SITE_URL,
                  description: siteConfig.description,
                  founder: { '@type': 'Person', name: siteConfig.founder.name },
                },
                {
                  '@type': 'Person',
                  '@id': `${SITE_URL}/about#tino-makiriyado`,
                  name: siteConfig.founder.name,
                  founderOf: { '@type': 'Organization', '@id': `${SITE_URL}/#organization`, name: siteConfig.name },
                  url: `${SITE_URL}/about`,
                },
                {
                  '@type': 'WebSite',
                  name: siteConfig.name,
                  url: SITE_URL,
                  publisher: { '@id': `${SITE_URL}/#organization` },
                  potentialAction: { '@type': 'SearchAction', target: `${SITE_URL}/research?q={search_term_string}`, 'query-input': 'required name=search_term_string' },
                },
              ],
            }),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
