import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://snh-inc.com'),
  title: 'SNH-ICH Bahamas Luxury Real Estate',
  description:
    'Search for luxury real estate in Bahamas with us. View our exclusive listings of Bahamas homes and connect with an agent today.',
  alternates: {
    canonical: 'https://snh-inc.com/',
  },
  icons: {
    icon: '/snh-inc.com-favicon-32x32.png',
    apple: '/snh-inc.com-favicon-32x32.png',
  },
  openGraph: {
    locale: 'en_US',
    type: 'website',
    title: 'SNH-ICH Bahamas Luxury Real Estate',
    description:
      'Search for luxury real estate in Bahamas with us. View our exclusive listings of Bahamas homes and connect with an agent today.',
    url: 'https://snh-inc.com/',
    siteName: 'Snh-inc Bahamas',
    modifiedTime: '2026-03-13T06:19:42+00:00',
    images: [
      {
        url: '/images/Treasure_Cay_Marina.jpg',
        width: 600,
        height: 400,
        alt: 'Treasure Cay Marina in The Bahamas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f3e9',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
