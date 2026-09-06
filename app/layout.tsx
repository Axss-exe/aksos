import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { IBM_Plex_Mono, Space_Grotesk } from 'next/font/google'
import './globals.css'

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
    'AKSOS researches and prototypes systems that make complex environments easier to see, understand and participate in.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/aksos-symbol.svg',
        media: '(prefers-color-scheme: light)',
        type: 'image/png',
      },
      {
        url: '/aksos-symbol.svg',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
