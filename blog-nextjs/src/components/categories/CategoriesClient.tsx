'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Folder } from 'lucide-react'
import { gsap } from 'gsap'
import type { PostPreview } from '@/lib/posts'

interface CategoriesClientProps {
  categorizedPosts: Record<string, PostPreview[]>
}

export default function CategoriesClient({ categorizedPosts }: CategoriesClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const categoriesRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8,
          ease: "power2.out"
        }
      )

      // Stagger categories animation
      gsap.fromTo(
        categoriesRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          delay: 0.2
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'unity':
        return '🎮'
      case 'tools':
        return '🔧'
      case 'c#/.net':
        return '💻'
      case 'mobile':
        return '📱'
      case 'web':
        return '🌐'
      default:
        return '📁'
    }
  }

  const getCategoryDescription = (category: string) => {
    switch (category.toLowerCase()) {
      case 'unity':
        return 'Game development tutorials, tools, and Unity-specific content'
      case 'tools':
        return 'Useful utilities, converters, and development tools'
      case 'c#/.net':
        return 'C# programming techniques and .NET framework insights'
      case 'mobile':
        return 'Mobile app development with Flutter and Dart'
      case 'web':
        return 'Web development technologies and frameworks'
      default:
        return 'General development content and miscellaneous topics'
    }
  }

  const totalPosts = Object.values(categorizedPosts).reduce((sum, posts) => sum + posts.length, 0)
  const categoryNames = Object.keys(categorizedPosts).sort()

  return (
    <div ref={containerRef} className="min-h-screen bg-background">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Back Navigation */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Categories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Explore posts organized by topic and technology. Find exactly what you're looking for.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            {totalPosts} posts across {categoryNames.length} categories
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {categoryNames.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📂</div>
            <h2 className="text-2xl font-bold mb-2">No categories found</h2>
            <p className="text-muted-foreground">
              Posts will be automatically categorized as they are added.
            </p>
          </div>
        ) : (
          <div className="space-y-12">
            {categoryNames.map((category, categoryIndex) => {
              const posts = categorizedPosts[category]
              
              return (
                <section
                  key={category}
                  ref={(el: HTMLDivElement | null) => {
                    if (el) categoriesRef.current[categoryIndex] = el
                  }}
                  className="category-section"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-3xl">{getCategoryIcon(category)}</div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                        {category}
                      </h2>
                      <p className="text-muted-foreground">
                        {getCategoryDescription(category)}
                      </p>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {posts.length} post{posts.length !== 1 ? 's' : ''}
                      </div>
                    </div>
                  </div>

                  {/* Posts Grid */}
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/posts/${post.slug}`}
                        className="group"
                      >
                        <article className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1">
                          {/* Post Meta */}
                          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.frontmatter.date}>
                              {formatDate(post.frontmatter.date)}
                            </time>
                          </div>

                          {/* Title */}
                          <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                            {post.frontmatter.title}
                          </h3>

                          {/* Excerpt */}
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                            {post.excerpt}
                          </p>

                          {/* Tags */}
                          {post.frontmatter.tags.length > 0 && (
                            <div className="flex flex-wrap gap-1 mb-4">
                              {post.frontmatter.tags.slice(0, 3).map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-1 px-2 py-1 text-xs bg-bg-tertiary text-accent-400 rounded border border-border-primary"
                                >
                                  <Tag className="w-2.5 h-2.5" />
                                  {tag}
                                </span>
                              ))}
                              {post.frontmatter.tags.length > 3 && (
                                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground rounded">
                                  +{post.frontmatter.tags.length - 3}
                                </span>
                              )}
                            </div>
                          )}

                          {/* Read More */}
                          <div className="flex justify-between items-center pt-3 border-t border-border">
                            <span className="text-primary font-medium text-sm group-hover:underline">
                              Read more →
                            </span>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </section>
              )
            })}
          </div>
        )}

        {/* Navigation Footer */}
        <div className="mt-16 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h3 className="text-lg font-bold mb-2">Explore More</h3>
              <p className="text-muted-foreground text-sm">
                Check out our other pages for more ways to discover content.
              </p>
            </div>
            <div className="flex gap-3">
              <Link 
                href="/tags"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Tag className="w-4 h-4" />
                Browse Tags
              </Link>
              <Link 
                href="/posts"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
              >
                <Folder className="w-4 h-4" />
                All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 