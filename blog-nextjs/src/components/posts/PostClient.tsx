'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehypeRaw from 'rehype-raw'
import { Breadcrumb } from '@/components/ui/Breadcrumb'
import type { Post } from '@/lib/posts'

interface PostClientProps {
  post: Post
}

export default function PostClient({ post }: PostClientProps) {
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
    return `${time} min read`
  }

  // Behavior-only overrides — styling lives in globals.css .prose
  const markdownComponents = {
    a: ({ href, children, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
      const isExternal = typeof href === 'string' && /^https?:\/\//.test(href)
      return (
        <a
          href={href}
          target={isExternal ? '_blank' : undefined}
          rel={isExternal ? 'noopener noreferrer' : undefined}
          {...props}
        >
          {children}
        </a>
      )
    },
  }

  const breadcrumbItems = [
    { label: 'Posts', href: '/posts' },
    { label: post.frontmatter.title }
  ]

  return (
    <div ref={containerRef} className="mx-auto max-w-3xl px-6">
      {/* Header */}
      <header className="pt-12 pb-8" data-animate>
        <Breadcrumb items={breadcrumbItems} />

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900">
          {post.frontmatter.title}
        </h1>

        <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
          <p className="font-mono text-xs text-gray-500">
            <time dateTime={post.frontmatter.date}>
              {formatDate(post.frontmatter.date)}
            </time>
            <span className="mx-2 text-gray-300">·</span>
            {getReadingTime(post.content)}
          </p>

          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({
                  title: post.frontmatter.title,
                  url: window.location.href
                })
              }
            }}
            className="font-mono text-xs uppercase tracking-label text-gray-500 hover:text-gray-900 transition-colors duration-200"
          >
            Share
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="pb-16" data-animate>
        <article className="prose">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-border-primary">
          <div className="flex justify-between items-center">
            <Link
              href="/posts"
              className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              ← All posts
            </Link>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-mono text-xs uppercase tracking-label text-gray-500 hover:text-accent-primary transition-colors duration-200"
            >
              Top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
