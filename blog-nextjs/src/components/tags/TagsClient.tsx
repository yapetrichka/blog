'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Calendar, Tag, Search, X } from 'lucide-react'
import { gsap } from 'gsap'
import type { PostPreview } from '@/lib/posts'

interface TagStat {
  tag: string
  count: number
  posts: PostPreview[]
}

interface TagsClientProps {
  tagStats: TagStat[]
}

export default function TagsClient({ tagStats }: TagsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const tagsRef = useRef<HTMLButtonElement[]>([])
  const postsRef = useRef<HTMLDivElement[]>([])
  
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

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

      // Stagger tags animation
      gsap.fromTo(
        tagsRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          delay: 0.2
        }
      )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  // Animate posts when tag is selected
  useEffect(() => {
    if (selectedTag && postsRef.current.length > 0) {
      gsap.fromTo(
        postsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.4,
          stagger: 0.1,
          ease: "power2.out"
        }
      )
    }
  }, [selectedTag])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  // Filter tags based on search query
  const filteredTags = tagStats.filter(tagStat =>
    tagStat.tag.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Get posts for selected tag
  const selectedTagPosts = selectedTag 
    ? tagStats.find(t => t.tag === selectedTag)?.posts || []
    : []

  const totalPosts = tagStats.reduce((sum, tagStat) => sum + tagStat.count, 0)

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
            Tags
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Discover content by exploring tags. Click on any tag to see related posts.
          </p>
          <div className="mt-6 text-sm text-muted-foreground">
            {tagStats.length} unique tags across {totalPosts} posts
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search tags..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Selected Tag Header */}
        {selectedTag && (
          <div className="mb-8 p-6 bg-primary/5 border border-primary/10 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Tag className="w-5 h-5 text-primary" />
                <h2 className="text-xl font-bold">
                  Posts tagged with "{selectedTag}"
                </h2>
                <span className="px-2 py-1 bg-bg-tertiary text-accent-secondary rounded text-sm border border-border-primary">
                  {selectedTagPosts.length} post{selectedTagPosts.length !== 1 ? 's' : ''}
                </span>
              </div>
              <button
                onClick={() => setSelectedTag(null)}
                className="text-muted-foreground hover:text-foreground p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Tags Cloud */}
        {!selectedTag && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">All Tags</h2>
            {filteredTags.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-muted-foreground">
                  No tags found matching "{searchQuery}"
                </p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {filteredTags.map((tagStat, index) => {
                  const size = Math.min(Math.max(tagStat.count, 1), 10) // Scale 1-10
                  const fontSize = 0.75 + (size / 10) * 0.5 // 0.75rem to 1.25rem
                  
                  return (
                    <button
                      key={tagStat.tag}
                      ref={(el: HTMLButtonElement | null) => {
                        if (el) tagsRef.current[index] = el
                      }}
                      onClick={() => setSelectedTag(tagStat.tag)}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-card border border-border rounded-lg hover:border-primary/20 hover:bg-primary/5 transition-all duration-200 hover:scale-105"
                      style={{ fontSize: `${fontSize}rem` }}
                    >
                      <Tag className="w-3 h-3" />
                      <span>{tagStat.tag}</span>
                      <span className="px-1.5 py-0.5 bg-muted text-muted-foreground rounded text-xs">
                        {tagStat.count}
                      </span>
                    </button>
                  )
                })}
              </div>
            )}
          </div>
        )}

        {/* Posts for Selected Tag */}
        {selectedTag && selectedTagPosts.length > 0 && (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedTagPosts.map((post, index) => (
              <Link
                key={post.slug}
                href={`/posts/${post.slug}`}
                className="group"
              >
                <article
                  ref={(el: HTMLDivElement | null) => {
                    if (el) postsRef.current[index] = el
                  }}
                  className="bg-card border border-border rounded-lg p-6 h-full hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:-translate-y-1"
                >
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
                  <div className="flex flex-wrap gap-1 mb-4">
                    {post.frontmatter.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`inline-flex items-center gap-1 px-2 py-1 text-xs rounded ${
                          tag === selectedTag
                            ? 'bg-accent-primary text-bg-primary'
                            : 'bg-bg-tertiary text-accent-secondary border border-border-primary'
                        }`}
                      >
                        <Tag className="w-2.5 h-2.5" />
                        {tag}
                      </span>
                    ))}
                  </div>

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
        )}

        {/* Empty State */}
        {selectedTag && selectedTagPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">🏷️</div>
            <h2 className="text-2xl font-bold mb-2">No posts found</h2>
            <p className="text-muted-foreground">
              No posts are tagged with "{selectedTag}".
            </p>
          </div>
        )}

        {/* Footer Navigation */}
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
                href="/categories"
                className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-muted transition-colors"
              >
                <Tag className="w-4 h-4" />
                Browse Categories
              </Link>
              <Link 
                href="/posts"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent-primary text-bg-primary rounded-lg hover:bg-accent-hover transition-colors"
              >
                All Posts
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 