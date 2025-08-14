'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { gsap } from 'gsap'
import type { PostPreview } from '@/lib/posts'

interface PostsClientProps {
  posts: PostPreview[]
}

export default function PostsClient({ posts }: PostsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const postsRef = useRef<HTMLDivElement[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
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

  const getFirstSentence = (text: string) => {
    const match = text.match(/^[^.!?]*[.!?]/)
    if (match) {
      return match[0].trim()
    }
    // Fallback: первые 15 слов если нет знаков препинания
    const words = text.split(' ').slice(0, 15).join(' ')
    return words + (text.split(' ').length > 15 ? '.' : '')
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Posts List */}
      <div className="max-w-4xl mx-auto px-6 py-6">
        <div className="space-y-6">
          {posts.map((post: PostPreview, index: number) => (
            <article
              key={post.slug}
              ref={(el: HTMLDivElement | null) => {
                if (el) postsRef.current[index] = el
              }}
              className="group"
            >
              <Link href={`/posts/${post.slug}`}>
                <div className="space-y-3">
                  {/* Post Meta */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
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
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">
                    {post.frontmatter.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {getFirstSentence(post.excerpt)}
                  </p>

                  {/* Read More */}
                  <div className="flex items-center text-black font-medium group-hover:translate-x-1 transition-transform">
                    Read more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </div>
                </div>
              </Link>
              
              {/* Divider */}
              {index < posts.length - 1 && (
                <div className="border-b border-gray-200"></div>
              )}
            </article>
          ))}
        </div>

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📝</div>
            <h2 className="text-2xl font-bold mb-2 text-gray-900">No posts found</h2>
            <p className="text-gray-600">
              Check back later for new content!
            </p>
          </div>
        )}
      </div>
    </div>
  )
}