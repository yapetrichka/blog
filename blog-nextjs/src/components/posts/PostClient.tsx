'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react'
import { gsap } from 'gsap'
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

  // Convert markdown to HTML (minimalist implementation)
  const renderMarkdown = (content: string) => {
    return content
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-bold mt-6 mb-3 text-gray-900">$1</h3>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-bold mt-8 mb-4 text-gray-900">$1</h2>')
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mt-8 mb-4 text-gray-900">$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700">$1</em>')
      .replace(/`(.*?)`/g, '<code class="bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded text-sm font-mono">$1</code>')
      .replace(/\n\n/g, '</p><p class="mb-4 text-gray-700">')
      .replace(/^- (.*$)/gm, '<li class="ml-4 text-gray-700">$1</li>')
      .replace(/^\* (.*$)/gm, '<li class="ml-4 text-gray-700">$1</li>')
      .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="rounded-lg my-6 w-full border border-gray-200" />')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-black hover:underline transition-colors">$1</a>')
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
          <div 
            className="leading-relaxed text-gray-700 [&>p]:mb-4 [&>p]:text-gray-700 [&>h1]:text-3xl [&>h1]:font-bold [&>h1]:mt-8 [&>h1]:mb-4 [&>h1]:text-gray-900 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-8 [&>h2]:mb-4 [&>h2]:text-gray-900 [&>h3]:text-xl [&>h3]:font-bold [&>h3]:mt-6 [&>h3]:mb-3 [&>h3]:text-gray-900 [&>ul]:my-4 [&>ul]:ml-6 [&>li]:mb-2 [&>li]:text-gray-700 [&>code]:bg-gray-100 [&>code]:text-gray-800 [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono [&>img]:rounded-lg [&>img]:my-6 [&>img]:border [&>img]:border-gray-200 [&>a]:text-black [&>a]:hover:underline [&>a]:transition-colors"
            dangerouslySetInnerHTML={{ __html: renderMarkdown(post.content) }}
          />
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