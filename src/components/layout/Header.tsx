'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Search, Zap, Shield, Target } from 'lucide-react'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Posts', href: '/posts' },
    { name: 'Categories', href: '/categories' },
    { name: 'Tags', href: '/tags' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 cyber-nav">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Cyberpunk Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-3 group cyber-slide"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-cyber-yellow rounded-lg opacity-20 animate-cyber-pulse"></div>
              <Image
                src="/avatar.png"
                alt="Dream Code Studio Logo"
                width={32}
                height={32}
                className="relative rounded-lg border border-accent-primary group-hover:border-accent-secondary transition-all duration-300"
              />
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-success rounded-full cyber-status-online animate-cyber-flicker"></div>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-accent-secondary animate-cyber-glow" />
              <span className="font-cyber font-bold text-lg text-text-primary group-hover:text-accent-primary transition-colors duration-300 cyber-gradient-text">
                DREAM CODE STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation - Cyberpunk Style */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="cyber-nav-item relative px-4 py-2 text-text-secondary hover:text-accent-primary transition-all duration-300 font-cyber text-sm group"
              >
                <span className="relative z-10">{item.name}</span>
                <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 clip-path-cyber-angle"></div>
              </Link>
            ))}
          </nav>

          {/* Cyberpunk Actions */}
          <div className="flex items-center space-x-4">
            {/* Search Button - Cyberpunk Style */}
            <Link
              href="/search"
              className="relative p-2 text-text-secondary hover:text-accent-secondary transition-all duration-300 group cyber-panel-glass rounded-none hover:shadow-cyber-cyan"
              aria-label="Search"
            >
              <Search className="w-5 h-5 relative z-10 group-hover:animate-cyber-glow" />
              <div className="absolute inset-0 bg-accent-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>

            {/* Status Indicator */}
            <div className="hidden sm:flex items-center space-x-2 px-3 py-1 cyber-panel-glass">
              <Target className="w-4 h-4 text-accent-success animate-cyber-pulse" />
              <span className="text-xs font-mono text-accent-success cyber-status-online">ONLINE</span>
            </div>

            {/* Mobile Menu Button - Cyberpunk Style */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative p-2 text-text-secondary hover:text-accent-primary transition-all duration-300 group cyber-btn-outline border-none"
              aria-label="Toggle menu"
            >
              <div className="relative z-10">
                {isMenuOpen ? (
                  <X className="w-5 h-5 animate-cyber-glitch" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </div>
              <div className="absolute inset-0 bg-accent-primary opacity-0 group-hover:opacity-20 transition-opacity duration-300 clip-path-cyber-angle"></div>
            </button>
          </div>
        </div>

        {/* Mobile Navigation - Cyberpunk Style */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-accent-primary cyber-slide cyber-panel-glass mt-2">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="font-cyber text-text-secondary hover:text-accent-primary transition-all duration-300 py-3 px-4 hover:bg-accent-primary hover:bg-opacity-10 clip-path-cyber-angle group"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-accent-secondary group-hover:text-accent-primary" />
                    <span>{item.name}</span>
                  </span>
                </Link>
              ))}
            </nav>
            
            {/* Cyberpunk Status Panel */}
            <div className="mt-4 pt-4 border-t border-accent-secondary border-opacity-30">
              <div className="cyber-hud p-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-accent-primary cyber-neon-text">SYSTEM STATUS</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent-success rounded-full animate-cyber-pulse"></div>
                    <span className="text-accent-success cyber-status-online">READY</span>
                  </div>
                </div>
                <div className="mt-2 text-xs text-text-tertiary">
                  <span className="text-accent-secondary">Connection:</span> SECURED
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Cyberpunk glow effect line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-70 animate-cyber-scan"></div>
    </header>
  )
} 