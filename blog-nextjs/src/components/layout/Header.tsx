'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Posts', href: '/posts' },
    { name: 'Support', href: '/support' },
  ]

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-bg-blur backdrop-blur-sm border-b border-border-primary">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-baseline">
            <span className="font-semibold text-sm tracking-tight text-gray-900">
              Yaroslav Petrichka
            </span>
            <span className="meta-label ml-3 hidden sm:inline">
              Solo Founder
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-gray-900 font-medium'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <span
                  className={`font-mono text-xs mr-1.5 ${
                    isActive(item.href) ? 'text-accent-primary' : 'text-gray-400'
                  }`}
                >
                  0{index + 1}
                </span>
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border-primary">
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`py-3 text-sm border-b border-border-subtle last:border-b-0 transition-colors duration-200 ${
                    isActive(item.href)
                      ? 'text-gray-900 font-medium'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span
                    className={`font-mono text-xs mr-2 ${
                      isActive(item.href) ? 'text-accent-primary' : 'text-gray-400'
                    }`}
                  >
                    0{index + 1}
                  </span>
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
