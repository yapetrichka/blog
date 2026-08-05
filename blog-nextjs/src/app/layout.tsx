import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import SponsorButtons from '@/components/ui/SponsorButtons'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
})

// Импортируем конфигурацию из локального файла
const siteConfig = require('../site.config.js')

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'Yaroslav Petrichka - Solo Founder',
  description: 'Building digital products as a solo founder. Sharing insights on Unity, mobile development, and the journey of independent software creation.',
  keywords: ['Solo Founder', 'Unity', 'Flutter', 'Mobile Development', 'C#', 'Programming', 'Software Engineering', 'Indie Developer'],
  authors: [{ name: 'Yaroslav Petrichka' }],
  creator: 'Yaroslav Petrichka',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.baseUrl,
    title: 'Yaroslav Petrichka - Solo Founder',
    description: 'Building digital products as a solo founder. Insights on independent software creation.',
    siteName: 'Yaroslav Petrichka',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Yaroslav Petrichka - Solo Founder',
    description: 'Building digital products as a solo founder.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable}`}>
        <div className="min-h-screen flex flex-col bg-bg-primary text-text-primary font-sans relative">
          <Header />
          <main className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
          <SponsorButtons />
        </div>
      </body>
    </html>
  )
} 