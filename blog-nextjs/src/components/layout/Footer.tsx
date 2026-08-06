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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <span className="block font-semibold text-sm tracking-tight text-gray-900">
              Yaroslav Petrichka
            </span>
            <span className="meta-label block mt-1">Solo Founder</span>
          </div>

          {/* Navigation */}
          <div>
            <span className="meta-label">Navigation</span>
            <nav className="flex flex-col items-start gap-2 mt-4">
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
          </div>

          {/* Contact */}
          <div>
            <span className="meta-label">Contact</span>
            <div className="flex items-center gap-4 mt-4">
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
