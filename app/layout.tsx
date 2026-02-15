import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })

export const metadata: Metadata = {
  title: 'Luce Connessa Impianti | Impianti Elettrici, Fotovoltaico, Climatizzazione e Sicurezza',
  description: 'Luce Connessa Impianti - Specializzati in impianti elettrici, fotovoltaico, climatizzazione, sistemi di sicurezza e videosorveglianza. Team sempre aggiornato sulle ultime tecnologie.',
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
