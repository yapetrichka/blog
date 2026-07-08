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
    <div className="mx-auto max-w-5xl px-6">
      {/* Page Header */}
      <header className="pt-12 pb-8">
        <span className="meta-label">01 — Work</span>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mt-4">
          Projects
        </h1>
      </header>

      {/* Apps Section */}
      <section className="border-t border-border-primary pt-6 pb-12">
        <span className="meta-label">01 — Apps</span>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-8 mt-6">
          {apps.map((app) => (
            <a
              key={app.slug}
              href={app.primaryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center"
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
              <h3 className="mt-3 text-sm font-medium text-center text-gray-900 group-hover:text-accent-primary transition-colors duration-200 line-clamp-2">
                {app.name}
              </h3>
            </a>
          ))}
        </div>
      </section>

      {/* Tools Section */}
      <section className="pb-12">
        <span className="meta-label">02 — Development tools</span>

        <ul className="mt-6 border-b border-border-primary">
          {tools.map((tool) => {
            const primary = tool.links[0]
            return (
              <li key={tool.name}>
                <a
                  href={primary.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-baseline justify-between py-4 border-t border-border-primary"
                >
                  <h3 className="text-base font-medium text-gray-900 group-hover:text-accent-primary transition-colors duration-200">
                    {tool.name}
                  </h3>
                  <span className="font-mono text-xs text-gray-500">
                    {primary.platform}{' '}
                    <span className="group-hover:text-accent-primary transition-colors duration-200">
                      ↗
                    </span>
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </section>

      {/* Stats Section */}
      <section className="pb-16">
        <span className="meta-label">03 — Numbers</span>

        <div className="grid grid-cols-3 gap-8 border-t border-border-primary pt-6 mt-6">
          <div>
            <div className="font-mono text-2xl text-gray-900">{apps.length}</div>
            <div className="meta-label mt-2">Mobile apps</div>
          </div>
          <div>
            <div className="font-mono text-2xl text-gray-900">{tools.length}</div>
            <div className="meta-label mt-2">Unity tools</div>
          </div>
          <div>
            <div className="font-mono text-2xl text-gray-900">∞</div>
            <div className="meta-label mt-2">Lines of code</div>
          </div>
        </div>
      </section>
    </div>
  )
}
