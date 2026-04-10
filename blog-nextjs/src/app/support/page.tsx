import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Support | Yaroslav Petrichka',
  description: "Get support for Game Aim Converter, CS2 Crosshairs, Bookaura, Game Meta Hub, Univerter, and TOshechka. I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you!",
  openGraph: {
    title: 'Support | Yaroslav Petrichka',
    description: "Get support for Game Aim Converter, CS2 Crosshairs, Bookaura, Game Meta Hub, Univerter, and TOshechka.",
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
    id: 'game-meta-hub',
    name: 'Game Meta Hub',
    channel: 'Telegram Support',
    url: 'https://t.me/game_meta_hub'
  },
  {
    id: 'univerter',
    name: 'Univerter',
    channel: 'Telegram Support',
    url: 'https://t.me/unit_m_converter'
  },
  {
    id: 'toshechka',
    name: 'TOshechka',
    channel: 'Telegram Support',
    url: 'https://t.me/+R8ujYqFM7zM1YTVi'
  }
]

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Support</h1>
          <p className="text-lg text-gray-600">
            I'll prioritize urgent issues, but please be patient—I'm probably coding somewhere. Thank you!
          </p>
        </div>

        <ul className="divide-y divide-gray-200 border-b border-gray-200">
          {supportLinks.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-20">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block py-4 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors duration-150"
              >
                <h3 className="text-base font-semibold text-blue-600 hover:underline">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                    {item.channel}
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
