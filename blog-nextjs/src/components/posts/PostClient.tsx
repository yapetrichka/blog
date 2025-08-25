'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
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
  const headerRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

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

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
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

  // Custom components for ReactMarkdown
  const markdownComponents: any = {
    // Headers
    h1: ({ children, ...props }: any) => (
      <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props}>{children}</h1>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900" {...props}>{children}</h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 className="text-xl font-bold mt-6 mb-3 text-gray-900" {...props}>{children}</h3>
    ),
    // Paragraphs
    p: ({ children, ...props }: any) => (
      <p className="mb-4 text-gray-700 leading-relaxed" {...props}>{children}</p>
    ),
    // Lists
    ul: ({ children, ...props }: any) => (
      <ul className="my-4 space-y-1" {...props}>{children}</ul>
    ),
    li: ({ children, ...props }: any) => (
      <li className="ml-6 mb-2 text-gray-700 list-disc" {...props}>{children}</li>
    ),
    // Inline formatting
    strong: ({ children, ...props }: any) => (
      <strong className="font-bold text-gray-900" {...props}>{children}</strong>
    ),
    em: ({ children, ...props }: any) => (
      <em className="italic text-gray-700" {...props}>{children}</em>
    ),
    code: ({ children, ...props }: any) => (
      <code className="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono" {...props}>{children}</code>
    ),
    // Links and images
    a: ({ href, children, ...props }: any) => (
      <a href={href} className="text-black hover:underline transition-colors" {...props}>{children}</a>
    ),
    img: ({ src, alt, ...props }: any) => (
      <img src={src} alt={alt} className="rounded-lg my-6 w-full border border-gray-200" {...props} />
    ),
  }

  const breadcrumbItems = [
    { label: 'Posts', href: '/posts' },
    { label: post.frontmatter.title }
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Header */}
      <div ref={headerRef} className="bg-white">
        <div className="max-w-4xl mx-auto px-6 py-6 pb-0">
          {/* Breadcrumb Navigation */}
          <div className="mb-4">
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-3 text-gray-900">
            {post.frontmatter.title}
          </h1>

          {/* Post Meta and Share */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={post.frontmatter.date}>
                  {formatDate(post.frontmatter.date)}
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{getReadingTime(post.content)}</span>
              </div>
            </div>

            {/* Share Button */}
            <button 
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: post.frontmatter.title,
                    url: window.location.href
                  })
                }
              }}
              className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Share2 className="w-3 h-3" />
              Share
            </button>
          </div>

        </div>
      </div>

      {/* Content */}
      <div ref={contentRef} className="max-w-4xl mx-auto px-6 pt-4 pb-6">
        <article className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeRaw]}
            components={markdownComponents}
          >
            {post.content}
          </ReactMarkdown>
        </article>

        {/* Footer Navigation */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <Link 
              href="/posts"
              className="inline-flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Posts
            </Link>
            
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="inline-flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}