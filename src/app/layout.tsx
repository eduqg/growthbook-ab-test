import type { Metadata } from 'next'
import { GoogleTagManager } from '@next/third-parties/google'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Growthbook Test A/B Samples',
  description: 'Study of Growthbook Test A/B Samples',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-55N6CVR5" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
