import React from 'react'
import Link from 'next/link'
import { ArrowRight, Code, Gamepad2, Wrench, Calendar, Zap, User, GitBranch, Shield, Target, Activity, Cpu } from 'lucide-react'
import { getAllPosts, type PostPreview } from '@/lib/posts'

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-bg-primary overflow-hidden">
      {/* Hero Section - Cyberpunk 2077 Style */}
      <section className="relative py-20 lg:py-32 bg-bg-primary">
        {/* Cyberpunk grid background with reduced elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 md:grid-cols-12 lg:grid-cols-16 gap-6 h-full w-full">
            {Array.from({ length: 32 }).map((_, i) => (
              <div 
                key={i} 
                className="bg-accent-primary h-px w-px animate-cyber-flicker" 
                style={{ animationDelay: `${i * 200}ms` }}
              ></div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            {/* Cyberpunk HUD Header */}
            <div className="cyber-hud inline-block mb-6 p-3">
              <div className="flex items-center gap-3 text-accent-primary font-mono text-sm">
                <Shield className="w-4 h-4 animate-cyber-glow" />
                <span className="cyber-neon-text">INITIALIZING SYSTEM...</span>
                <span className="w-2 h-4 bg-accent-primary animate-cyber-flicker"></span>
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 cyber-slide font-cyber">
              <span className="text-text-primary">UNITY & </span>
              <span className="cyber-gradient-text animate-cyber-glow">.NET</span>
              <br />
              <span className="text-accent-primary cyber-neon-text">
                DEVELOPMENT HUB
              </span>
            </h1>
            
            <div className="cyber-panel-glass max-w-3xl mx-auto mb-8 p-6">
              <div className="font-mono text-lg text-text-primary cyber-zoom">
                <div className="text-accent-primary cyber-neon-text mb-2">MISSION BRIEFING:</div>
                <div className="text-text-secondary mb-2">
                  Advanced knowledge protocols for game developers and .NET architects.
                </div>
                <div className="text-text-secondary">
                  From Unity optimization to .NET performance enhancement.
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center cyber-slide">
              <Link
                href="/posts"
                className="cyber-btn inline-flex items-center px-6 py-3 group"
              >
                <Zap className="mr-2 w-4 h-4" />
                <span>ACCESS POSTS</span>
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link
                href="/about"
                className="cyber-btn-outline inline-flex items-center px-6 py-3 group"
              >
                <User className="mr-2 w-4 h-4" />
                PROFILE DATA
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Cyberpunk Panels */}
      <section className="py-20 bg-bg-secondary relative">
        <div className="absolute inset-0 bg-hex-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <div className="cyber-hud inline-block mb-4 p-3">
              <div className="flex items-center gap-2 text-accent-secondary font-mono text-sm">
                <Target className="w-4 h-4 animate-cyber-pulse" />
                <span className="cyber-neon-text">SCANNING AVAILABLE MODULES...</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-text-primary mb-4 cyber-zoom font-cyber">
              SYSTEM CAPABILITIES
            </h2>
            <p className="text-lg text-text-secondary font-mono">
              <span className="text-accent-primary cyber-neon-text">MODULES: </span>
              Advanced development protocols and training systems
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-panel p-6 cyber-zoom group hover:shadow-cyber-lg transition-all duration-300 animate-cyber-float">
              <div className="text-center">
                <div className="cyber-hud w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Gamepad2 className="w-8 h-8 text-accent-success animate-cyber-pulse" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-cyber">
                  UNITY ENGINE
                </h3>
                <p className="text-text-secondary font-mono text-sm leading-relaxed">
                  Advanced game development protocols, optimization techniques, and performance enhancement systems.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Activity className="w-3 h-3 text-accent-success" />
                  <span className="text-xs text-accent-success cyber-status-online">ACTIVE MODULE</span>
                </div>
              </div>
            </div>

            <div className="cyber-panel p-6 cyber-zoom group hover:shadow-cyber-cyan transition-all duration-300 animate-cyber-float" style={{animationDelay: '0.2s'}}>
              <div className="text-center">
                <div className="cyber-hud w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Code className="w-8 h-8 text-accent-secondary animate-cyber-glow" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-cyber">
                  .NET FRAMEWORK
                </h3>
                <p className="text-text-secondary font-mono text-sm leading-relaxed">
                  C# architecture patterns, performance optimization, and advanced .NET ecosystem integration.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Activity className="w-3 h-3 text-accent-secondary" />
                  <span className="text-xs text-accent-secondary cyber-status-info">ENHANCED MODULE</span>
                </div>
              </div>
            </div>

            <div className="cyber-panel p-6 cyber-zoom group hover:shadow-cyber-yellow transition-all duration-300 animate-cyber-float" style={{animationDelay: '0.4s'}}>
              <div className="text-center">
                <div className="cyber-hud w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Wrench className="w-8 h-8 text-accent-warning animate-cyber-pulse" />
                </div>
                <h3 className="text-xl font-bold text-text-primary mb-3 font-cyber">
                  DEV TOOLS
                </h3>
                <p className="text-text-secondary font-mono text-sm leading-relaxed">
                  Professional development utilities, workflow automation, and productivity enhancement systems.
                </p>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Activity className="w-3 h-3 text-accent-warning" />
                  <span className="text-xs text-accent-warning cyber-status-warning">OPTIMIZATION MODULE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Posts Section - Cyberpunk Data Grid */}
      <section className="py-20 bg-bg-primary relative">
        <div className="absolute inset-0 cyber-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex justify-between items-center mb-12">
            <div>
              <div className="cyber-hud inline-block mb-4 p-3">
                <div className="flex items-center gap-2 text-accent-primary font-mono text-sm">
                  <GitBranch className="w-4 h-4 animate-cyber-glow" />
                  <span className="cyber-neon-text">ACCESSING RECENT DATA...</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-text-primary cyber-zoom font-cyber">
                LATEST PROTOCOLS
              </h2>
            </div>
            <Link
              href="/posts"
              className="cyber-btn-outline font-cyber font-medium cyber-zoom group"
            >
              VIEW ALL DATA <span className="group-hover:translate-x-1 inline-block transition-transform duration-300">→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post: PostPreview, index: number) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group"
              >
                <div 
                  className="cyber-panel p-6 cyber-slide hover:shadow-cyber-lg transition-all duration-300 group-hover:-translate-y-2 animate-cyber-loading"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="cyber-hud p-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-accent-secondary mb-2 font-mono">
                      <Calendar className="w-4 h-4" />
                      <span className="text-accent-success">{formatDate(post.frontmatter.date)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-text-primary mb-2 line-clamp-2 font-cyber group-hover:text-accent-primary transition-colors duration-300">
                      {post.frontmatter.title}
                    </h3>
                    <p className="text-text-secondary mb-4 line-clamp-3 font-mono text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {post.frontmatter.tags.slice(0, 2).map((tag: string) => (
                        <span
                          key={tag}
                          className="cyber-btn-outline text-xs px-3 py-1 font-mono hover:bg-accent-primary hover:text-bg-primary transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.frontmatter.tags.length > 2 && (
                        <span className="text-xs px-3 py-1 cyber-panel-glass text-text-tertiary font-mono">
                          +{post.frontmatter.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Status indicator */}
                  <div className="flex items-center justify-between text-xs font-mono">
                    <div className="flex items-center space-x-2">
                      <Cpu className="w-3 h-3 text-accent-primary" />
                      <span className="text-accent-primary">DATA PACKET</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Activity className="w-3 h-3 text-accent-success animate-cyber-pulse" />
                      <span className="text-accent-success cyber-status-online">AVAILABLE</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {recentPosts.length === 0 && (
            <div className="text-center py-12 cyber-panel">
              <div className="cyber-hud p-6">
                <div className="font-mono text-text-primary">
                  <div className="text-accent-danger cyber-neon-text mb-4">
                    NO DATA PACKETS AVAILABLE
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-text-secondary">System initialization in progress...</span>
                    <span className="w-2 h-4 bg-accent-primary animate-cyber-flicker"></span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 