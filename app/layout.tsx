import type { Metadata, Viewport } from 'next'
import './globals.css'
import { LanguageProvider } from '@/contexts/LanguageContext'

export const metadata: Metadata = {
  title: 'TAROTAROS | God Does Not Blink - Cosmic Horror VR Experience',
  description: 'Cosmic Horror Dilemma VR Experience by TAROTAROS. Face extreme choices in an immersive VR environment powered by Meta Quest 3 and Unreal Engine. 코즈믹 호러 VR 체험 콘텐츠',
  keywords: ['VR', 'Cosmic Horror', 'Interactive Content', 'TAROTAROS', 'Meta Quest 3', 'Unreal Engine', 'Virtual Reality', '코즈믹 호러', 'VR 체험', '인터랙티브 콘텐츠'],
  authors: [{ name: 'TAROTAROS' }],
  creator: 'TAROTAROS',
  publisher: 'TAROTAROS',
  metadataBase: new URL('https://tarotaros.com'),
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    url: 'https://tarotaros.com',
    title: 'TAROTAROS | God Does Not Blink',
    description: 'Cosmic Horror Dilemma VR Experience - Face extreme choices in an immersive VR environment',
    siteName: 'TAROTAROS',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TAROTAROS | God Does Not Blink',
    description: 'Cosmic Horror Dilemma VR Experience',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <LanguageProvider>
          <div className="cosmic-bg min-h-screen">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
