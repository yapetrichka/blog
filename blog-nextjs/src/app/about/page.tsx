import Link from 'next/link'
import { ArrowLeft, Code, Gamepad2, Mail, Github, Linkedin } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Unity developer and .NET enthusiast sharing practical knowledge and tools for game development.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="prose prose-lg prose-invert max-w-none">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* About Text */}
            <div className="md:col-span-2 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4">Hello! 👋</h2>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a passionate Unity developer and .NET programmer with a love for creating useful tools and sharing knowledge with the community. 
                  This blog is where I document my journey, share tutorials, and showcase the tools I build to solve real-world development challenges.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">What I Do</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I focus on creating practical Unity tools, exploring C# programming techniques, and building applications that solve specific problems for developers and gamers. 
                  From sensitivity converters for gaming to Unity package management tools, I enjoy building things that make life easier.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3">Why This Blog?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Knowledge sharing is at the heart of the developer community. Through this blog, I aim to contribute back by sharing tutorials, 
                  insights, and tools that I've found useful in my development journey. Whether you're a Unity beginner or an experienced .NET developer, 
                  I hope you'll find something valuable here.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Skills */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Tech Stack</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Gamepad2 className="w-5 h-5 text-primary" />
                    <span>Unity Game Engine</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>C# / .NET</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>TypeScript / React</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Code className="w-5 h-5 text-primary" />
                    <span>Flutter / Dart</span>
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-4">Get In Touch</h3>
                <div className="space-y-3">
                  <a 
                    href="mailto:contact@example.com" 
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span>contact@example.com</span>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Projects */}
          <div className="border-t border-border pt-12">
            <h2 className="text-2xl font-bold mb-6">Recent Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">GameSensitivity CloudStorage</h3>
                <p className="text-muted-foreground mb-4">
                  Flutter application for calculating and converting gaming sensitivity settings across different games.
                </p>
                <div className="flex flex-wrap gap-2">
                                        <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">Flutter</span>                      <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">Dart</span>                      <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">Gaming</span>
                </div>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-bold mb-2">Unity Package Tools</h3>
                <p className="text-muted-foreground mb-4">
                  Collection of Unity tools for package management, asset importing, and development workflow optimization.
                </p>
                <div className="flex flex-wrap gap-2">
                                    <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">Unity</span>                  <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">C#</span>                  <span className="px-2 py-1 bg-bg-tertiary text-accent-400 rounded text-sm border border-border-primary">Tools</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 