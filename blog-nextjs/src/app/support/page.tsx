import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support | Yaroslav Petrichka',
  description: "Get support for Game Aim Converter, CS2 Crosshairs, Bookaura, and Univerter. I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you!",
  openGraph: {
    title: 'Support | Yaroslav Petrichka',
    description: "Get support for Game Aim Converter, CS2 Crosshairs, Bookaura, and Univerter.",
    type: 'website'
  }
}

const supportLinks = [
  {
    id: 'game-aim-converter',
    name: 'Game Aim Converter',
    channel: 'Telegram Support',
    url: 'https://t.me/game_aim_converter'
  },
  {
    id: 'cs2-crosshairs',
    name: 'CS2 Crosshairs',
    channel: 'Telegram Support',
    url: 'https://t.me/cs_crosshairs'
  },
  {
    id: 'bookaura',
    name: 'Bookaura',
    channel: 'Telegram Support',
    url: 'https://t.me/reading_tracker_bookaura'
  },
  {
    id: 'univerter',
    name: 'Univerter',
    channel: 'Telegram Support',
    url: 'https://t.me/unit_m_converter'
  }
]

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      {/* Page Header */}
      <header className="pt-12 pb-8">
        <span className="meta-label">01 — Help</span>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mt-4">
          Support
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl mt-4">
          I&apos;ll prioritize urgent issues, but please be patient—I&apos;m probably coding somewhere. Thank you!
        </p>
      </header>

      <ul className="border-b border-border-primary pb-0 mb-16">
        {supportLinks.map((item) => (
          <li key={item.id} id={item.id} className="scroll-mt-20">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-baseline justify-between py-4 border-t border-border-primary"
            >
              <h3 className="text-base font-medium text-gray-900 group-hover:text-accent-primary transition-colors duration-200">
                {item.name}
              </h3>
              <span className="font-mono text-xs text-gray-500">
                Telegram{' '}
                <span className="group-hover:text-accent-primary transition-colors duration-200">
                  ↗
                </span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
