import Link from 'next/link'
import { Github, Mail, Music, Video } from 'lucide-react'
import siteConfig from '@/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const navigation = [
    { name: 'Posts', href: '/posts' },
    { name: 'Projects', href: '/projects' },
    { name: 'Support', href: '/support' },
  ]

  const socials = [
    { label: 'GitHub', href: siteConfig.social.github, icon: Github },
    { label: 'Email', href: `mailto:${siteConfig.social.email}`, icon: Mail },
    { label: 'TikTok', href: siteConfig.social.tiktok, icon: Music },
    { label: 'YouTube', href: siteConfig.social.youtube, icon: Video },
  ]

  return (
    <footer className="bg-bg-primary border-t border-border-primary">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          {/* Brand */}
          <div className="flex items-baseline">
            <span className="font-semibold text-sm tracking-tight text-gray-900">
              Yaroslav Petrichka
            </span>
            <span className="meta-label ml-3">Solo Founder</span>
          </div>

          {/* Nav + Social */}
          <div className="flex items-center gap-8">
            <nav className="flex items-center gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-4">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                  className="text-gray-400 hover:text-gray-900 transition-colors duration-200"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-subtle pt-4 mt-8">
          <span className="meta-label">© {currentYear} Yaroslav Petrichka</span>
        </div>
      </div>
    </footer>
  )
}
