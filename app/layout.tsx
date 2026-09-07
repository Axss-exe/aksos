import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SITE_URL } from '@/lib/site-config'

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
  title: 'AKSOS — See the environment. Participate in it.',
  description:
    'AKSOS is an independent research and systems-building initiative founded by Tino Makiriyado, exploring how complex environments become easier to see, understand, and participate in.',
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: SITE_URL },
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    siteName: 'AKSOS',
    title: 'AKSOS — See the environment. Participate in it.',
    description: 'Independent research and systems-building for understanding complex environments.',
    url: SITE_URL,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    shortcut: '/icon-light-32x32.png',
    apple: '/aksos-symbol.svg',
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
                { '@type': 'Organization', name: 'AKSOS', url: SITE_URL, description: 'Independent research and systems-building initiative founded by Tino Makiriyado.', founder: { '@type': 'Person', name: 'Tino Makiriyado', url: `${SITE_URL}/about` }, sameAs: ['https://aksos.net'] },
                { '@type': 'Person', name: 'Tino Makiriyado', url: `${SITE_URL}/about`, founderOf: { '@type': 'Organization', name: 'AKSOS', url: SITE_URL } },
                { '@type': 'WebSite', name: 'AKSOS', url: SITE_URL, potentialAction: { '@type': 'SearchAction', target: `${SITE_URL}/research?q={search_term_string}`, 'query-input': 'required name=search_term_string' } },
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
