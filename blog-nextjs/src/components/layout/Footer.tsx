import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, Heart, Code, Music, Video } from 'lucide-react'
import siteConfig from '@/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image
                src="/avatar.png"
                alt="Yaroslav Petrichka Avatar"
                width={56}
                height={56}
                className="rounded-full ring-2 ring-gray-200 shadow-sm"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  Yaroslav Petrichka
                </h3>
                <p className="text-sm text-gray-500">
                  Solo Founder
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 mb-6 max-w-md">
              Building digital products independently. Sharing insights on 
              the journey of solo software development.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${siteConfig.social.email}`}
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="TikTok"
              >
                <Music className="w-5 h-5" />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
                aria-label="YouTube"
              >
                <Video className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <nav className="space-y-2">
              {['Posts', 'Projects', 'Support'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">Resources</h4>
            <nav className="space-y-2">
              <Link
                href="/posts"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Blog Archive
              </Link>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                GitHub Projects
              </a>
            </nav>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500">
              © {currentYear} Yaroslav Petrichka. All rights reserved.
            </div>
            
            <div className="flex items-center text-sm text-gray-500">
              <span>Built with</span>
              <Heart className="w-3 h-3 mx-1 text-gray-400" />
              <span>using</span>
              <Code className="w-3 h-3 mx-1 text-gray-400" />
              <span>Next.js</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}