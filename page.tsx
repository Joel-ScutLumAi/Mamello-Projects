import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Archivo } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})
const archivo = Archivo({
  variable: '--font-archivo',
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Mamello Projects — Construction, Welding & General Supply | Vaal Triangle',
  description:
    'Mamello Projects delivers reliable construction, welding, steel fabrication and general supply services across the Vaal Triangle. Call or WhatsApp for a free quote today.',
  keywords: [
    'construction',
    'welding',
    'steel fabrication',
    'Vaal Triangle',
    'Vanderbijlpark',
    'Vereeniging',
    'Sasolburg',
    'builders',
    'gates',
    'carports',
    'roofing',
    'paving',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Mamello Projects — Construction & Welding | Vaal Triangle',
    description:
      'Construction, welding, steel fabrication and general supply across the Vaal Triangle. Call or WhatsApp for a free quote.',
    type: 'website',
  },
}

export const viewport = {
  themeColor: '#2747a8',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${archivo.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
