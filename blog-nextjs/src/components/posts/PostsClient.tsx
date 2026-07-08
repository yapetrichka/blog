'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import type { PostPreview } from '@/lib/posts'

interface PostsClientProps {
  posts: PostPreview[]
}

export default function PostsClient({ posts }: PostsClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mm = gsap.matchMedia()

    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const blocks = gsap.utils.toArray<HTMLElement>('[data-animate]', containerRef.current)
      gsap.fromTo(
        blocks,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06 }
      )
    })

    return () => mm.revert()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toISOString().slice(0, 10).replace(/-/g, '.')
  }

  const getReadingTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.trim().split(/\s+/).length
    const time = Math.ceil(words / wordsPerMinute)
    return `${time} min`
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
    <div ref={containerRef} className="mx-auto max-w-3xl px-6">
      {/* Page Header */}
      <header className="pt-12 pb-8" data-animate>
        <span className="meta-label">01 — Writing</span>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 mt-4">
          Posts
        </h1>
      </header>

      {/* Posts List */}
      <div className="pb-16">
        {posts.map((post: PostPreview) => (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block border-t border-border-primary py-8"
            data-animate
          >
            <article>
              <p className="font-mono text-xs text-gray-500">
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
                <span className="mx-2 text-gray-300">·</span>
                {getReadingTime(post.excerpt)}
              </p>

              <h2 className="text-2xl font-semibold tracking-tight text-gray-900 group-hover:text-accent-primary transition-colors duration-200 mt-3">
                {post.frontmatter.title}
              </h2>

              <p className="text-gray-500 mt-2">
                {getFirstSentence(post.excerpt)}
              </p>
            </article>
          </Link>
        ))}

        {/* Empty State */}
        {posts.length === 0 && (
          <div className="border-t border-border-primary py-16">
            <span className="meta-label">No posts yet</span>
          </div>
        )}
      </div>
    </div>
  )
}
