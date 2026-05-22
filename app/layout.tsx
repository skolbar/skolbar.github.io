import type { Metadata } from 'next'
import { Cormorant_Garamond, Pinyon_Script } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
})

const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-pinyon',
})

export const metadata: Metadata = {
  title: 'Lord Bottino | Uma voz, uma identidade, uma experiência',
  description: 'Lord Bottino - Cantor, artista e apreciador de vinhos. Uma voz, uma identidade, uma experiência.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${pinyonScript.variable}`}>
      <body className="font-serif antialiased overflow-x-hidden">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
