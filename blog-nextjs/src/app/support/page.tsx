import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support | Yaroslav Petrichka',
  description: "Get support for Game Aim Converter, CS2 Crosshairs, Game Meta Hub, Univerter, and TOshechka. I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you!",
  openGraph: {
    title: 'Support | Yaroslav Petrichka',
    description: "Get support for Game Aim Converter, CS2 Crosshairs, Game Meta Hub, Univerter, and TOshechka.",
    type: 'website'
  }
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="gsap-fade-in mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Support</h1>
          <p className="text-lg text-gray-600">
            I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you!
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8 gsap-slide-up">
          <nav className="flex flex-wrap gap-3">
            <Link href="#game-aim-converter" className="text-gray-700 hover:text-black transition-colors duration-200">Game Aim Converter</Link>
            <span className="text-gray-300">•</span>
            <Link href="#cs2-crosshairs" className="text-gray-700 hover:text-black transition-colors duration-200">CS2 Crosshairs</Link>
            <span className="text-gray-300">•</span>
            <Link href="#game-meta-hub" className="text-gray-700 hover:text-black transition-colors duration-200">Game Meta Hub</Link>
            <span className="text-gray-300">•</span>
            <Link href="#univerter" className="text-gray-700 hover:text-black transition-colors duration-200">Univerter</Link>
            <span className="text-gray-300">•</span>
            <Link href="#toshechka" className="text-gray-700 hover:text-black transition-colors duration-200">TOshechka</Link>
          </nav>
        </div>

        {/* Support Sections */}
        <div className="space-y-8">
          {/* Game Aim Converter */}
          <section id="game-aim-converter" className="gsap-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Game Aim Converter</h2>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://t.me/game_aim_converter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  📱 Telegram Support
                </a>
              </div>
            </div>
          </section>

          {/* CS2 Crosshairs */}
          <section id="cs2-crosshairs" className="gsap-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">CS2 Crosshairs</h2>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://t.me/cs_crosshairs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  📱 Telegram Support
                </a>
              </div>
            </div>
          </section>

          {/* Game Meta Hub */}
          <section id="game-meta-hub" className="gsap-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Game Meta Hub</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me/game_meta_hub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  📱 Telegram Support
                </a>
              </div>
            </div>
          </section>

          {/* Univerter */}
          <section id="univerter" className="gsap-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">Univerter</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me/unit_m_converter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  📱 Telegram Support
                </a>
              </div>
            </div>
          </section>

          {/* TOshechka */}
          <section id="toshechka" className="gsap-slide-up">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-900">TOshechka</h2>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me/+R8ujYqFM7zM1YTVi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200"
                >
                  📱 Telegram Support
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 