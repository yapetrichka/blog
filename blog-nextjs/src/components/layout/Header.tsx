'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Search, Zap } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Projects', href: '/projects' },
    { name: 'Support', href: '/support' },
    { name: 'Tags', href: '/tags' },
  ]

  return (
    <header className="sticky top-0 z-50 blur-heavy border-b border-cyberpunk-yellow shadow-cyberpunk relative">
      {/* Cyberpunk scanning line effect */}
      <div className="absolute top-0 left-0 w-full h-0.5 bg-cyberpunk-yellow opacity-60 animate-cyberpunk-scan"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with Cyberpunk styling */}
          <div 
            className="flex items-center space-x-2 gsap-fade-in group"
          >
            <div className="relative">
              <Image
                src="/avatar.png"
                alt="Dream Code Studio Logo"
                width={32}
                height={32}
                className="rounded ring-2 ring-cyberpunk-yellow group-hover:ring-cyberpunk-white transition-all duration-300 group-hover:shadow-neon-white"
              />
              {/* Cyberpunk pulse effect */}
              <div className="absolute inset-0 rounded ring-1 ring-cyberpunk-white opacity-0 group-hover:opacity-100 animate-cyberpunk-pulse"></div>
            </div>
            <span className="font-tech font-bold text-lg text-text-white group-hover:text-cyberpunk-yellow transition-colors duration-300">
              DREAM CODE STUDIO
            </span>
          </div>

          {/* Desktop Navigation with Cyberpunk styling */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-text-white hover:text-cyberpunk-yellow transition-all duration-300 font-tech text-sm uppercase tracking-wider group border border-transparent hover:border-cyberpunk-yellow"
              >
                <span className="relative z-10 group-hover:cyberpunk-glow">{item.name}</span>
                <div className="absolute inset-0 blur-dark rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyberpunk-yellow group-hover:w-full transition-all duration-300 shadow-neon-yellow"></div>
                {/* Cyberpunk glitch effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:animate-cyberpunk-glitch pointer-events-none">
                  <div className="absolute inset-0 bg-cyberpunk-yellow mix-blend-multiply opacity-20"></div>
                </div>
              </Link>
            ))}
          </nav>

          {/* Actions with Cyberpunk styling */}
          <div className="flex items-center space-x-4">
            {/* Search Button */}
            <Link
              href="/search"
              className="relative p-2 text-text-white hover:text-cyberpunk-yellow transition-all duration-300 group border border-cyberpunk-yellow rounded hover:shadow-cyberpunk-yellow blur-dark"
              aria-label="Search"
            >
              <Search className="w-5 h-5 relative z-10 group-hover:cyberpunk-glow" />
              <div className="absolute inset-0 blur-heavy rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>

            {/* Terminal Indicator */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 blur-dark border border-cyberpunk-yellow rounded text-xs font-tech">
              <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full"></div>
              <span className="text-cyberpunk-yellow uppercase tracking-wider">ONLINE</span>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 text-text-white hover:text-cyberpunk-yellow transition-all duration-300 group border border-cyberpunk-yellow rounded hover:shadow-cyberpunk-yellow blur-dark"
              aria-label="Toggle menu"
            >
              <div className="relative z-10 group-hover:cyberpunk-glow">
                {isMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </div>
              <div className="absolute inset-0 blur-heavy rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation with Cyberpunk styling */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-cyberpunk-yellow gsap-slide-down blur-intense rounded-b border border-cyberpunk-yellow/30">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-tech text-text-white hover:text-cyberpunk-yellow transition-all duration-300 py-3 px-4 rounded border border-transparent hover:border-cyberpunk-yellow blur-dark uppercase tracking-wider group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="group-hover:cyberpunk-glow">{item.name}</span>
                    <Zap className="w-4 h-4 text-cyberpunk-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </Link>
              ))}
            </nav>
            
            {/* Cyberpunk status line */}
            <div className="mt-4 pt-4 border-t border-cyberpunk-yellow/30">
              <div className="flex items-center justify-between text-xs font-tech text-cyberpunk-yellow blur-dark rounded px-3 py-2 border border-cyberpunk-yellow/30">
                <span className="text-cyberpunk-yellow">&gt;</span>
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyberpunk-yellow rounded-full"></div>
                  <span className="text-cyberpunk-yellow uppercase tracking-wider">SYSTEM READY</span>
                </span>
                <span className="text-cyberpunk-white">[OK]</span>
              </div>
              
              {/* Blue typewriter code effect */}
              <div className="mt-2 h-8 overflow-hidden blur-heavy rounded border border-cyberpunk-yellow/20 relative">
                <div className="absolute inset-0 typewriter-code text-xs leading-none">
                  <div className="typewriter-line" style={{ animationDelay: '0s' }}>public class Player : MonoBehaviour</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Cyberpunk neon glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-cyberpunk-yellow opacity-80 shadow-neon-yellow"></div>
      
      {/* Additional cyberpunk grid lines */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" 
           style={{
             backgroundImage: `
               linear-gradient(rgba(252, 227, 0, 0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(252, 227, 0, 0.3) 1px, transparent 1px)
             `,
             backgroundSize: '20px 20px'
           }}>
      </div>
    </header>
  )
} 