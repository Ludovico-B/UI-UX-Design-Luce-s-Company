import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.luceconnessaimpianti.it'),
  title: {
    default: 'Luce Connessa Impianti | Elettricista Crevoladossola, Ossola e Verbania',
    template: '%s | Luce Connessa Impianti',
  },
  description:
    'Impianti elettrici, fotovoltaico, climatizzazione, videosorveglianza e sicurezza a Crevoladossola, Val d\'Ossola e provincia di Verbania. Preventivo gratuito.',
  keywords: [
    'elettricista Crevoladossola',
    'impianti elettrici Ossola',
    'fotovoltaico Verbania',
    'climatizzazione Domodossola',
    'videosorveglianza Ossola',
    'sistemi di sicurezza Verbania',
    'impianti TV-SAT Ossola',
    'automazione cancelli Crevoladossola',
    'pompe di calore Val d\'Ossola',
    'pannelli solari Domodossola',
  ],
  authors: [{ name: 'Luce Connessa Impianti' }],
  openGraph: {
    title: 'Luce Connessa Impianti | Elettricista a Crevoladossola e Ossola',
    description:
      'Impianti elettrici, fotovoltaico, climatizzazione e sicurezza a Crevoladossola, Val d\'Ossola e provincia di Verbania. Preventivo gratuito.',
    url: 'https://www.luceconnessaimpianti.it',
    siteName: 'Luce Connessa Impianti',
    locale: 'it_IT',
    type: 'website',
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.luceconnessaimpianti.it' },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
