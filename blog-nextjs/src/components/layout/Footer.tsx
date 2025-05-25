import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, Heart, Terminal, Code, Sparkles, Music, Video } from 'lucide-react'
import siteConfig from '@/site.config'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t border-border-terminal relative">
      {/* Catppuccin grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="bg-accent-primary h-px w-px catppuccin-fade" 
                 style={{ animationDelay: `${i * 200}ms` }}></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            {/* Catppuccin terminal window logo section */}
            <div className="terminal-window p-6 mb-6">
              <div className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="relative">
                    <Image
                      src="/avatar.png"
                      alt="Dream Code Studio Logo"
                      width={32}
                      height={32}
                      className="rounded-lg ring-2 ring-border-terminal"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Sparkles className="w-4 h-4 text-accent-secondary catppuccin-lavender" />
                    <span className="font-mono font-semibold text-lg text-text-white catppuccin-gradient">
                      Dream Code Studio
                    </span>
                  </div>
                </div>
                
                <div className="font-mono text-text-primary mb-4 max-w-md">
                  <span className="text-accent-secondary catppuccin-mauve">❯ </span>
                  <span className="text-text-white">Sharing knowledge on Unity and .NET development.</span>
                </div>
                
                {/* Catppuccin terminal prompt for description */}
                <div className="font-mono text-sm text-text-secondary mb-4">
                  <span className="text-accent-secondary catppuccin-mauve">❯ </span>whoami
                  <br />
                  <span className="text-text-primary ml-2 catppuccin-teal">→ Game Developer & .NET Enthusiast</span>
                </div>
              </div>
            </div>

            {/* Social links with Catppuccin styling */}
            <div className="terminal-output">
              <div className="font-mono text-sm text-text-secondary mb-2">
                <span className="text-accent-secondary catppuccin-mauve">❯ </span>cat social_links.json
              </div>
              <div className="flex space-x-4">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-primary transition-all duration-300 group p-2 rounded-md hover:bg-bg-terminal catppuccin-blue"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 group-hover:animate-catppuccin-glow" />
                </a>
                <a
                  href={`mailto:${siteConfig.social.email}`}
                  className="text-text-primary hover:text-accent-blue transition-all duration-300 group p-2 rounded-md hover:bg-bg-terminal catppuccin-teal"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 group-hover:animate-catppuccin-glow" />
                </a>
                <a
                  href={siteConfig.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-red transition-all duration-300 group p-2 rounded-md hover:bg-bg-terminal catppuccin-red"
                  aria-label="TikTok"
                >
                  <Music className="w-5 h-5 group-hover:animate-catppuccin-glow" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-primary hover:text-accent-red transition-all duration-300 group p-2 rounded-md hover:bg-bg-terminal catppuccin-yellow"
                  aria-label="YouTube"
                >
                  <Video className="w-5 h-5 group-hover:animate-catppuccin-glow" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links with Catppuccin styling */}
          <div className="terminal-output">
            <div className="font-mono text-sm text-text-secondary mb-4">
              <span className="text-accent-secondary catppuccin-mauve">❯ </span>ls -la navigation/
            </div>
            <nav className="space-y-2">
              {['Posts', 'Categories', 'Tags', 'About'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block font-mono text-text-primary hover:text-accent-primary transition-all duration-300 hover:translate-x-2 catppuccin-blue"
                >
                  <span className="text-accent-secondary catppuccin-teal">→ </span>
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Recent Activity with Catppuccin styling */}
          <div className="terminal-output">
            <div className="font-mono text-sm text-text-secondary mb-4">
              <span className="text-accent-secondary catppuccin-mauve">❯ </span>git status
            </div>
            <div className="space-y-2 font-mono text-sm">
              <div className="text-text-primary">
                <span className="text-accent-green catppuccin-green">✓ </span>
                Blog posts updated
              </div>
              <div className="text-text-primary">
                <span className="text-accent-green catppuccin-green">✓ </span>
                Catppuccin UI deployed
              </div>
              <div className="text-text-primary">
                <span className="text-accent-yellow catppuccin-yellow">~ </span>
                More content coming...
              </div>
            </div>
          </div>
        </div>

        {/* Footer bottom with Catppuccin styling */}
        <div className="mt-8 pt-8 border-t border-border-terminal">
          <div className="terminal-output">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="font-mono text-sm text-text-secondary">
                <span className="text-accent-secondary catppuccin-mauve">❯ </span>echo "© {currentYear} Dream Code Studio. All rights reserved."
                <br />
                <span className="text-text-primary ml-2">© {currentYear} Dream Code Studio. All rights reserved.</span>
              </div>
              
              <div className="font-mono text-sm text-text-secondary flex items-center">
                <span className="text-accent-secondary catppuccin-mauve">❯ </span>
                <span className="text-text-primary ml-2">Made with </span>
                <Heart className="w-4 h-4 mx-1 text-accent-red catppuccin-red" />
                <span className="text-text-primary">using </span>
                <Code className="w-4 h-4 mx-1 text-accent-blue catppuccin-blue" />
                <span className="text-text-primary">Next.js & GSAP</span>
              </div>
            </div>
            
            {/* Catppuccin terminal cursor at bottom */}
            <div className="mt-4 flex items-center">
              <span className="font-mono text-text-secondary catppuccin-mauve">❯</span>
              <span className="w-2 h-4 bg-accent-primary animate-terminal-blink ml-2"></span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 