import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Yaroslav Petrichka',
  description: 'Explore apps and tools created by Yaroslav Petrichka including Game Aim Converter, CS2 Crosshairs, Univerter, Unity tools and more.',
  openGraph: {
    title: 'Projects | Yaroslav Petrichka',
    description: 'Explore apps and tools created by Yaroslav Petrichka',
    type: 'website'
  }
}

const apps = [
  {
    name: 'Game Aim Converter',
    links: [
      {
        platform: 'App Store',
        url: 'https://apps.apple.com/app/game-aim-converter/id1618000036'
      },
      {
        platform: 'Google Play',
        url: 'https://play.google.com/store/apps/details?id=com.truedreamcode.gameaimconverter'
      }
    ]
  },
  {
    name: 'CS2 Crosshairs',
    links: [
      {
        platform: 'App Store',
        url: 'https://apps.apple.com/app/cs2-crosshairs-pro-aim-helper/id6740480835'
      }
    ]
  },
  {
    name: 'Univerter',
    links: [
      {
        platform: 'App Store',
        url: 'https://apps.apple.com/app/unit-converter-mobile/id6738687525'
      }
    ]
  }
]

const tools = [
  {
    name: 'Easy Share',
    links: [
      {
        platform: 'Unity Asset Store',
        url: 'https://assetstore.unity.com/packages/slug/289206'
      }
    ]
  },
  {
    name: 'Dynamic Icon',
    links: [
      {
        platform: 'Unity Asset Store',
        url: 'https://assetstore.unity.com/packages/slug/299370'
      }
    ]
  },
  {
    name: 'Smart Importer',
    links: [
      {
        platform: 'Unity Asset Store',
        url: 'https://assetstore.unity.com/packages/slug/254217'
      }
    ]
  },
  {
    name: 'AutoKeystore',
    links: [
      {
        platform: 'Unity Asset Store',
        url: 'https://assetstore.unity.com/packages/slug/232044'
      }
    ]
  },
  {
    name: 'UIMask',
    links: [
      {
        platform: 'GitHub',
        url: 'https://github.com/dreamcodestudio/UIMask'
      }
    ]
  }
]

// Platform icons mapping
const platformIcons = {
  'App Store': '📱',
  'Google Play': '🤖',
  'Unity Asset Store': '🎮',
  'GitHub': '💻'
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="gsap-fade-in mb-8">
          <h1 className="text-4xl font-bold mb-3 text-gray-900">Projects</h1>
          <p className="text-lg text-gray-600">
            Explore the apps and development tools I've created for the gaming and Unity communities.
          </p>
        </div>

        {/* Apps Section */}
        <section className="mb-12">
          <div className="gsap-slide-up mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 flex items-center">
              <span className="mr-2">📱</span>
              Apps
            </h2>
            <div className="h-px bg-gray-200"></div>
          </div>

          <div className="space-y-4">
            {apps.map((app, index) => (
              <div 
                key={app.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 gsap-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {app.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {app.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors duration-200"
                    >
                      <span>{platformIcons[link.platform as keyof typeof platformIcons]}</span>
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-12">
          <div className="gsap-slide-up mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900 flex items-center">
              <span className="mr-2">🛠️</span>
              Development Tools
            </h2>
            <div className="h-px bg-gray-200"></div>
          </div>

          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow duration-200 gsap-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg font-semibold mb-3 text-gray-900">
                  {tool.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tool.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 bg-gray-100 text-gray-700 text-sm rounded-md hover:bg-gray-200 transition-colors duration-200"
                    >
                      <span>{platformIcons[link.platform as keyof typeof platformIcons]}</span>
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 gsap-slide-up">
            <h3 className="text-xl font-bold mb-4 text-gray-900 text-center">Project Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="border-r border-gray-200 pr-4 last:border-r-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">{apps.length}</div>
                <div className="text-gray-600 text-sm">Mobile Apps</div>
              </div>
              <div className="border-r border-gray-200 pr-4 last:border-r-0">
                <div className="text-2xl font-bold text-gray-900 mb-1">{tools.length}</div>
                <div className="text-gray-600 text-sm">Unity Tools</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 mb-1">∞</div>
                <div className="text-gray-600 text-sm">Lines of Code</div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
} 