import type { Metadata } from 'next'
import { Playfair_Display, Poppins, Merriweather, Montserrat, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _playfair = Playfair_Display({ subsets: ["latin"], weight: ['700', '600', '500'] });
const _poppins = Poppins({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });
const _merriweather = Merriweather({ subsets: ["latin"], weight: ['400', '700'] });
const _montserrat = Montserrat({ subsets: ["latin"], weight: ['400', '500', '600', '700'] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Naitik Gupta | Chemistry Researcher & Professional',
  description: 'Professional portfolio of Naitik Gupta - M.Sc. Chemistry graduate with expertise in organic synthesis, C-H activation, and heterogeneous catalysis',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Times New Roman', Times, serif" }} className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
