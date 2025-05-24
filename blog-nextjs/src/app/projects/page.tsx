import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects | Dream Code Studio',
  description: 'Explore apps and tools created by Dream Code Studio including Game Aim Converter, CS2 Crosshairs, Univerter, Unity tools and more.',
  openGraph: {
    title: 'Projects | Dream Code Studio',
    description: 'Explore apps and tools created by Dream Code Studio',
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
        platform: 'Uptodown',
        url: 'https://game-aim-converter.en.uptodown.com/android'
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
  'Uptodown': '🤖',
  'Unity Asset Store': '🎮',
  'GitHub': '💻'
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-bg-dark text-text-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="gsap-fade-in mb-12">
          <h1 className="text-4xl font-bold mb-4 cyberpunk-glow">Projects</h1>
          <p className="text-lg text-text-secondary">
            Explore the apps and development tools I've created for the gaming and Unity communities.
          </p>
        </div>

        {/* Apps Section */}
        <section className="mb-16">
          <div className="gsap-slide-up mb-8">
            <h2 className="text-3xl font-bold mb-4 cyberpunk-glow flex items-center">
              <span className="mr-3">📱</span>
              Apps
            </h2>
            <div className="h-px bg-cyberpunk-yellow shadow-neon-yellow"></div>
          </div>

          <div className="grid gap-8">
            {apps.map((app, index) => (
              <div 
                key={app.name}
                className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30 gsap-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-cyberpunk-yellow">
                  {app.name}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {app.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyberpunk-button hover:scale-105 transition-transform duration-300"
                    >
                      {platformIcons[link.platform as keyof typeof platformIcons]} {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tools Section */}
        <section>
          <div className="gsap-slide-up mb-8">
            <h2 className="text-3xl font-bold mb-4 cyberpunk-glow flex items-center">
              <span className="mr-3">🛠️</span>
              Development Tools
            </h2>
            <div className="h-px bg-cyberpunk-yellow shadow-neon-yellow"></div>
          </div>

          <div className="grid gap-8">
            {tools.map((tool, index) => (
              <div 
                key={tool.name}
                className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30 gsap-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-bold mb-4 text-cyberpunk-yellow">
                  {tool.name}
                </h3>
                <div className="flex flex-wrap gap-4">
                  {tool.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cyberpunk-button hover:scale-105 transition-transform duration-300"
                    >
                      {platformIcons[link.platform as keyof typeof platformIcons]} {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className="mt-16">
          <div className="cyber-panel-glass p-8 border border-cyberpunk-yellow/30 gsap-slide-up">
            <h3 className="text-2xl font-bold mb-6 cyberpunk-glow text-center">Project Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="border-r border-cyberpunk-yellow/30 pr-6 last:border-r-0">
                <div className="text-3xl font-bold text-cyberpunk-yellow mb-2">{apps.length}</div>
                <div className="text-text-secondary">Mobile Apps</div>
              </div>
              <div className="border-r border-cyberpunk-yellow/30 pr-6 last:border-r-0">
                <div className="text-3xl font-bold text-cyberpunk-yellow mb-2">{tools.length}</div>
                <div className="text-text-secondary">Unity Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyberpunk-yellow mb-2">∞</div>
                <div className="text-text-secondary">Lines of Code</div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Border Effect */}
        <div className="mt-16 h-px bg-cyberpunk-yellow shadow-neon-yellow"></div>
      </div>
    </div>
  )
} 