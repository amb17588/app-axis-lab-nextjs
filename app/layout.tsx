import type { Metadata, Viewport } from 'next'
import './globals.css'
import ScrollToTop from '@/components/ScrollToTop'

const SITE = 'https://appaxislab.com'
const TITLE = 'AppAxisLab | Mobile app studio for Android and iOS'
const DESCRIPTION =
  'AppAxisLab designs, builds, and launches mobile apps for founders and brands, from the first sketch to the store listing and every update after.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: TITLE,
  description: DESCRIPTION,
  applicationName: 'AppAxisLab',
  icons: { icon: '/image/logo.png', apple: '/image/logo.png' },
  openGraph: {
    type: 'website',
    url: SITE,
    siteName: 'AppAxisLab',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/assets/hero_app_mockup_1781618273028.png', width: 1024, height: 1024, alt: 'AppAxisLab app dashboard preview' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/assets/hero_app_mockup_1781618273028.png'],
  },
}

export const viewport: Viewport = {
  themeColor: '#F4ECDD',
  colorScheme: 'light',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#main" className="skip-link button-sm">Skip to content</a>
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
