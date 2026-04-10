import type { Metadata } from 'next'
import Image from 'next/image'

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
    slug: 'game-aim-converter',
    icon: '/assets/img/projects/game-aim-converter.webp',
    primaryUrl: 'https://apps.apple.com/app/game-aim-converter/id1618000036'
  },
  {
    name: 'CS2 Crosshairs',
    slug: 'cs2-crosshairs',
    icon: '/assets/img/projects/cs2-crosshairs.webp',
    primaryUrl: 'https://apps.apple.com/app/cs2-crosshairs-pro-aim-helper/id6740480835'
  },
  {
    name: 'Bookaura',
    slug: 'bookaura',
    icon: '/assets/img/projects/bookaura.webp',
    primaryUrl: 'https://apps.apple.com/app/reading-tracker-bookaura/id6760946238'
  },
  {
    name: 'Univerter',
    slug: 'univerter',
    icon: '/assets/img/projects/univerter.webp',
    primaryUrl: 'https://apps.apple.com/app/unit-converter-mobile/id6738687525'
  },
  {
    name: 'Game Meta Hub',
    slug: 'game-meta-hub',
    icon: '/assets/img/projects/game-meta-hub.webp',
    primaryUrl: 'https://apps.apple.com/us/app/game-meta-hub/id6755838608'
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

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Apps Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Apps</h2>
            <div className="h-px bg-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5">
            {apps.map((app) => (
              <a
                key={app.slug}
                href={app.primaryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col items-center active:scale-95 transition-transform duration-100 ease-in-out"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src={app.icon}
                    alt={app.name}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="mt-2 text-sm font-semibold text-center text-gray-900 line-clamp-2">
                  {app.name}
                </h3>
              </a>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section className="mb-12">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Development Tools</h2>
            <div className="h-px bg-gray-200"></div>
          </div>

          <ul className="divide-y divide-gray-200 border-b border-gray-200">
            {tools.map((tool) => {
              const primary = tool.links[0]
              return (
                <li key={tool.name}>
                  <a
                    href={primary.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-4 px-2 -mx-2 rounded hover:bg-gray-50 transition-colors duration-150"
                  >
                    <h3 className="text-base font-semibold text-blue-600 hover:underline">
                      {tool.name}
                    </h3>
                    <div className="mt-1 flex items-center gap-3 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-gray-400"></span>
                        {primary.platform}
                      </span>
                    </div>
                  </a>
                </li>
              )
            })}
          </ul>
        </section>

        {/* Stats Section */}
        <section>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
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
