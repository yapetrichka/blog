import type { Metadata } from 'next'
import { Rajdhani, Orbitron } from 'next/font/google'
import './globals.css'
import { GSAPProvider } from '@/components/animations/GSAPProvider'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const rajdhani = Rajdhani({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-rajdhani',
  display: 'swap',
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  variable: '--font-orbitron',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Dream Code Studio - Cyberpunk Unity & .NET Development',
  description: 'Sharing knowledge on Unity and .NET development in a cyberpunk world. Practical tutorials, tools, and insights for future developers.',
  keywords: ['Unity', '.NET', 'Game Development', 'C#', 'Programming', 'Cyberpunk', 'Futuristic', 'Tech'],
  authors: [{ name: 'dreamcodestudio' }],
  creator: 'dreamcodestudio',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dreamcodestudio.github.io',
    title: 'Dream Code Studio - Cyberpunk Unity & .NET Development',
    description: 'Sharing knowledge on Unity and .NET development in a cyberpunk world',
    siteName: 'Dream Code Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dream Code Studio - Cyberpunk Unity & .NET Development',
    description: 'Sharing knowledge on Unity and .NET development in a cyberpunk world',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${rajdhani.variable} ${orbitron.variable}`}>
        <GSAPProvider>
          <div className="min-h-screen flex flex-col bg-cyberpunk-base text-text-primary font-cyberpunk relative overflow-hidden">
            <Header />
            <main className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </GSAPProvider>
      </body>
    </html>
  )
} 