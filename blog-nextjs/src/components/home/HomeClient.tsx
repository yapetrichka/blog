'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { gsap } from 'gsap'
import { type PostPreview } from '@/lib/posts'

interface HomeClientProps {
  recentPosts: PostPreview[]
}

export default function HomeClient({ recentPosts }: HomeClientProps) {
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

  const getFirstSentence = (text: string) => {
    const match = text.match(/^[^.!?]*[.!?]/)
    if (match) {
      return match[0].trim()
    }
    // Fallback: первые 15 слов если нет знаков препинания
    const words = text.split(' ').slice(0, 15).join(' ')
    return words + (text.split(' ').length > 15 ? '.' : '')
  }

  const techStack = [
    { name: 'Unity & C#', description: 'Game Development' },
    { name: 'Flutter & Dart', description: 'Mobile Apps' },
    { name: 'Kotlin & Swift', description: 'Native Plugins' },
    { name: 'Firebase', description: 'Backend & LiveOps' },
  ]

  return (
    <div ref={containerRef} className="mx-auto max-w-5xl px-6">
      {/* Hero Section */}
      <section className="pt-16 pb-12" data-animate>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-gray-900 max-w-3xl">
          Apps that do one thing well
        </h1>

        <p className="text-xl text-gray-500 max-w-2xl mt-6">
          From a reading tracker to aim tools for gamers — I build my own
          products and share what I learn along the way.
        </p>

        <div className="mt-10 flex gap-6 items-center">
          <Link
            href="/posts"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-950 transition-colors duration-200 text-sm font-medium"
          >
            Read the blog
          </Link>
          <Link
            href="/projects"
            className="text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors duration-200"
          >
            View projects →
          </Link>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12" data-animate>
        <span className="meta-label">01 — Stack</span>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-6 mt-6">
          {techStack.map((tech, index) => (
            <div key={tech.name} className="border-t border-border-primary pt-4">
              <span className="font-mono text-xs text-gray-400">0{index + 1}</span>
              <h3 className="text-base font-medium text-gray-900 mt-2">
                {tech.name}
              </h3>
              <p className="text-sm text-gray-500">{tech.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12" data-animate>
        <div className="flex justify-between items-baseline">
          <span className="meta-label">02 — Recent posts</span>
          <Link
            href="/posts"
            className="text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors duration-200"
          >
            All posts →
          </Link>
        </div>

        <div className="mt-6">
          {recentPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/posts/${post.slug}`}
              className="group block border-t border-border-primary py-6"
            >
              <article className="md:grid md:grid-cols-[160px_1fr] gap-6">
                <time
                  dateTime={post.frontmatter.date}
                  className="font-mono text-xs text-gray-500"
                >
                  {formatDate(post.frontmatter.date)}
                </time>
                <div className="mt-2 md:mt-0">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900 group-hover:text-accent-primary transition-colors duration-200">
                    {post.frontmatter.title}
                  </h3>
                  <p className="text-base text-gray-500 mt-1">
                    {getFirstSentence(post.excerpt || post.frontmatter.excerpt || '')}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="border-t border-border-primary py-12 pb-16" data-animate>
        <span className="meta-label">03 — Contact</span>

        <h2 className="text-2xl font-semibold tracking-tight text-gray-900 mt-6">
          Let&apos;s build something together.
        </h2>
        <p className="text-base text-gray-500 mt-2 max-w-2xl">
          Interested in collaboration or have questions about development?
        </p>

        <div className="mt-8 flex gap-6 items-center">
          <Link
            href="/support"
            className="inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white rounded-md hover:bg-gray-950 transition-colors duration-200 text-sm font-medium"
          >
            Get in touch
          </Link>
          <a
            href="https://github.com/yapetrichka"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-label text-gray-500 hover:text-accent-primary transition-colors duration-200"
          >
            GitHub ↗
          </a>
        </div>
      </section>
    </div>
  )
}
