import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Mail, Heart, Zap, Code, Shield, Activity, Globe, Cpu } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-bg-secondary border-t-2 border-accent-primary relative overflow-hidden">
      {/* Cyberpunk hex pattern background */}
      <div className="absolute inset-0 opacity-5 bg-hex-pattern"></div>
      
      {/* Cyberpunk data streams */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full w-full">
          {Array.from({ length: 24 }).map((_, i) => (
            <div 
              key={i} 
              className="bg-accent-primary h-px w-px animate-cyber-flicker" 
              style={{ animationDelay: `${i * 300}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Main Info Panel - Cyberpunk Style */}
          <div className="col-span-1 md:col-span-2">
            <div className="cyber-panel p-6 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-accent-primary rounded-lg opacity-30 animate-cyber-pulse"></div>
                  <Image
                    src="/avatar.png"
                    alt="Dream Code Studio Logo"
                    width={40}
                    height={40}
                    className="relative rounded-lg border border-accent-primary"
                  />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-accent-success rounded-full animate-cyber-flicker"></div>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-accent-secondary animate-cyber-glow" />
                  <span className="font-cyber font-bold text-xl text-text-primary cyber-gradient-text">
                    DREAM CODE STUDIO
                  </span>
                </div>
              </div>
              
              <div className="cyber-hud p-4 mb-4">
                <div className="font-mono text-text-primary mb-2">
                  <span className="text-accent-primary cyber-neon-text">MISSION:</span>
                  <div className="text-text-secondary mt-1">
                    Sharing advanced knowledge on Unity and .NET development systems.
                  </div>
                </div>
                
                <div className="font-mono text-sm text-text-tertiary">
                  <span className="text-accent-secondary">SPECIALIZATION:</span>
                  <div className="text-text-secondary mt-1">
                    Game Development & .NET Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links - Cyberpunk HUD Style */}
            <div className="cyber-panel-glass p-4">
              <div className="font-cyber text-sm text-accent-primary mb-3 cyber-neon-text">
                CONNECTION PROTOCOLS
              </div>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/dreamcodestudio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cyber-btn-outline p-3 text-text-primary hover:text-accent-primary group"
                >
                  <Github className="w-5 h-5 group-hover:animate-cyber-glow" />
                </a>
                <a
                  href="mailto:dreamcodestudio@yandex.com"
                  className="cyber-btn-outline p-3 text-text-primary hover:text-accent-secondary group"
                >
                  <Mail className="w-5 h-5 group-hover:animate-cyber-glow" />
                </a>
                <div className="cyber-btn-outline p-3">
                  <Globe className="w-5 h-5 text-accent-success animate-cyber-pulse" />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Panel - Cyberpunk Style */}
          <div className="cyber-panel p-4">
            <div className="font-cyber text-sm text-accent-primary mb-4 cyber-neon-text">
              NAVIGATION MENU
            </div>
            <nav className="space-y-3">
              {['Posts', 'Categories', 'Tags', 'About'].map((item) => (
                <Link
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="block font-mono text-text-secondary hover:text-accent-primary transition-all duration-300 hover:translate-x-2 group"
                >
                  <span className="flex items-center space-x-2">
                    <Zap className="w-3 h-3 text-accent-secondary group-hover:text-accent-primary" />
                    <span>{item}</span>
                  </span>
                </Link>
              ))}
            </nav>
          </div>

          {/* System Status Panel - Cyberpunk Style */}
          <div className="cyber-panel p-4">
            <div className="font-cyber text-sm text-accent-primary mb-4 cyber-neon-text">
              SYSTEM STATUS
            </div>
            <div className="space-y-3 font-mono text-sm">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Blog Engine:</span>
                <span className="text-accent-success cyber-status-online">ACTIVE</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Database:</span>
                <span className="text-accent-success cyber-status-online">SYNCED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Security:</span>
                <span className="text-accent-warning cyber-status-warning">SECURED</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Network:</span>
                <span className="text-accent-success cyber-status-online">STABLE</span>
              </div>
            </div>
            
            {/* Performance Indicators */}
            <div className="mt-4 pt-3 border-t border-accent-primary border-opacity-30">
              <div className="flex items-center space-x-2">
                <Activity className="w-4 h-4 text-accent-success animate-cyber-pulse" />
                <span className="text-xs text-text-tertiary">PERFORMANCE OPTIMAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom - Cyberpunk HUD */}
        <div className="mt-8 pt-6 border-t-2 border-accent-primary border-opacity-50">
          <div className="cyber-hud p-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="font-mono text-sm">
                <div className="text-accent-primary cyber-neon-text mb-1">
                  COPYRIGHT NOTICE
                </div>
                <div className="text-text-secondary">
                  © {currentYear} DREAM CODE STUDIO. ALL RIGHTS RESERVED.
                </div>
              </div>
              
              <div className="font-mono text-sm text-text-secondary flex items-center space-x-3">
                <span className="text-text-primary">BUILT WITH</span>
                <div className="flex items-center space-x-2">
                  <Heart className="w-4 h-4 text-accent-danger animate-cyber-pulse" />
                  <span>+</span>
                  <Code className="w-4 h-4 text-accent-secondary" />
                  <span>+</span>
                  <Cpu className="w-4 h-4 text-accent-warning" />
                </div>
                <span className="text-accent-primary">NEXT.JS & CYBERPUNK UI</span>
              </div>
            </div>
            
            {/* Cyberpunk cursor indicator */}
            <div className="mt-4 flex items-center">
              <span className="font-mono text-text-tertiary text-accent-primary">TERMINAL:</span>
              <span className="w-2 h-4 bg-accent-primary animate-cyber-flicker ml-2"></span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom scanning line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-80 animate-cyber-scan"></div>
    </footer>
  )
} 