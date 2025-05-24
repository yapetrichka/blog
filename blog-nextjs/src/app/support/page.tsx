import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Support | Dream Code Studio',
  description: "Get support for Game Aim Converter, CS2 Crosshairs, InstaBreath, and Univerter. I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you! ❤️",
  openGraph: {
    title: 'Support | Dream Code Studio',
    description: "Get support for Game Aim Converter, CS2 Crosshairs, InstaBreath, and Univerter.",
    type: 'website'
  }
}

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-white">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="gsap-fade-in mb-8">
          <h1 className="text-4xl font-bold mb-4 cyberpunk-glow">Support</h1>
          <p className="text-lg text-text-secondary">
            I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you! ❤️
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="cyber-panel-glass p-6 mb-8 gsap-slide-up border border-cyberpunk-yellow/30">
          <nav className="flex flex-wrap gap-4">
            <Link href="#game-aim-converter" className="cyberpunk-link">Game Aim Converter</Link>
            <Link href="#cs2-crosshairs" className="cyberpunk-link">CS2 Crosshairs</Link>
            <Link href="#insta-breath" className="cyberpunk-link">InstaBreath</Link>
            <Link href="#univerter" className="cyberpunk-link">Univerter</Link>
          </nav>
        </div>

        {/* Support Sections */}
        <div className="space-y-12">
          {/* Game Aim Converter */}
          <section id="game-aim-converter" className="gsap-slide-up">
            <div className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30">
              <h2 className="text-2xl font-bold mb-6 cyberpunk-glow">Game Aim Converter</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/game_aim_converter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  📱 Telegram Support
                </a>
                <a 
                  href="https://discord.gg/qA3cbc9J8w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  💬 Discord Community
                </a>
              </div>
            </div>
          </section>

          {/* CS2 Crosshairs */}
          <section id="cs2-crosshairs" className="gsap-slide-up">
            <div className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30">
              <h2 className="text-2xl font-bold mb-6 cyberpunk-glow">CS2 Crosshairs</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/cs_crosshairs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  📱 Telegram Support
                </a>
                <a 
                  href="https://discord.gg/99h74wfU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  💬 Discord Community
                </a>
              </div>
            </div>
          </section>

          {/* InstaBreath */}
          <section id="insta-breath" className="gsap-slide-up">
            <div className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30">
              <h2 className="text-2xl font-bold mb-6 cyberpunk-glow">InstaBreath</h2>
              <div className="space-y-4">
                <p className="text-text-secondary">
                  If you're experiencing issues with the InstaBreath app or have questions, please use one of the following methods to contact us:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-cyberpunk-yellow">•</span>
                    <span className="font-semibold">Email Support:</span>
                    <a 
                      href="mailto:dreamcodestudio@yandex.com" 
                      className="cyberpunk-link"
                    >
                      dreamcodestudio@yandex.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-cyberpunk-yellow">•</span>
                    <span className="font-semibold">Response Time:</span>
                    <span className="text-text-secondary">24-48 hours</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-cyberpunk-yellow">•</span>
                    <span className="font-semibold">Join Our Community:</span>
                    <div className="flex space-x-4">
                      <a 
                        href="https://t.me/insta_breath_dc" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyberpunk-button"
                      >
                        📱 Telegram
                      </a>
                      <a 
                        href="https://discord.gg/6syPMn5J" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="cyberpunk-button"
                      >
                        💬 Discord
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Univerter */}
          <section id="univerter" className="gsap-slide-up">
            <div className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30">
              <h2 className="text-2xl font-bold mb-6 cyberpunk-glow">Univerter</h2>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="https://t.me/unit_m_converter" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  📱 Telegram Support
                </a>
                <a 
                  href="https://discord.gg/hzcyw6AQ" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="cyberpunk-button"
                >
                  💬 Discord Community
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Bottom Border Effect */}
        <div className="mt-16 h-px bg-cyberpunk-yellow shadow-neon-yellow"></div>
      </div>
    </div>
  )
} 