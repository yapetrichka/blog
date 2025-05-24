'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock, Tag } from 'lucide-react'
import { gsap } from 'gsap'
import type { PostPreview } from '@/lib/posts'

interface PostsClientProps {
  posts: PostPreview[]
}

export default function PostsClient({ posts }: PostsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement[]>([])

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

      // Stagger posts animation
      gsap.fromTo(
        postsRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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
      month: 'long',
      day: 'numeric'
    })
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wordsPerMinute)
    return `${time} min read`
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-cyberpunk-base">
      {/* Header */}
      <div ref={headerRef} className="bg-gradient-to-r from-cyberpunk-yellow/10 via-cyberpunk-yellow/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-cyberpunk-yellow font-cyber">
            ALL POSTS
          </h1>
          <p className="text-xl text-cyberpunk-white max-w-2xl">
            Explore my thoughts on Unity development, C# programming, and game development tools.
          </p>
          <div className="mt-6 text-sm text-cyberpunk-yellow">
            {posts.length} posts published
          </div>
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-8">
          {posts.map((post: PostPreview, index: number) => (
            <article
              key={post.slug}
              ref={(el: HTMLDivElement | null) => {
                if (el) postsRef.current[index] = el
              }}
              className="group"
            >
              <Link href={`/posts/${post.slug}`}>
                <div className="cyber-panel p-6 hover:shadow-neon-yellow transition-all duration-300 hover:border-cyberpunk-yellow/50 hover:-translate-y-1">
                  <div className="flex flex-col gap-4">
                    {/* Post Meta */}
                    <div className="flex flex-wrap items-center gap-4 text-sm text-cyberpunk-yellow">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={post.frontmatter.date}>
                          {formatDate(post.frontmatter.date)}
                        </time>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{getReadingTime(post.excerpt)}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-bold text-cyberpunk-white group-hover:text-cyberpunk-yellow transition-colors font-cyber">
                      {post.frontmatter.title}
                    </h2>

                    {/* Excerpt */}
                    <p className="text-cyberpunk-white/80 leading-relaxed group-hover:text-cyberpunk-white transition-colors">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    {post.frontmatter.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.frontmatter.tags.map((tag: string) => (
                          <span
                            key={tag}
                            className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium bg-cyberpunk-yellow/10 text-cyberpunk-yellow rounded-full hover:bg-cyberpunk-yellow/20 transition-colors border border-cyberpunk-yellow/30"
                          >
                            <Tag className="w-3 h-3" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Read More */}
                    <div className="flex justify-between items-center pt-4 border-t border-cyberpunk-yellow/20">
                      <span className="text-cyberpunk-yellow font-medium group-hover:underline font-tech">
                        Read more →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-4xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-2 text-cyberpunk-white">No posts found</h2>
            <p className="text-cyberpunk-white/60">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
} 