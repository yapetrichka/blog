'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Code, Calendar, User, GitBranch, Database, Cloud, Server } from 'lucide-react'
import { gsap } from 'gsap'
import { type PostPreview } from '@/lib/posts'

interface HomeClientProps {
  recentPosts: PostPreview[]
}

export default function HomeClient({ recentPosts }: HomeClientProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLDivElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reset elements to initial state
      gsap.set([titleRef.current, descriptionRef.current, buttonsRef.current], {
        opacity: 0,
        y: 30
      })

      // Create timeline for sequential animations
      const tl = gsap.timeline()

      // Animate title
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      })

      // Animate description
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

      // Animate buttons
      tl.to(buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4")

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
    { icon: Code, name: 'Unity & C#', description: 'Game Development' },
    { icon: Server, name: '.NET Core', description: 'Backend Services' },
    { icon: Database, name: 'PostgreSQL', description: 'Data Management' },
    { icon: Cloud, name: 'Cloud Native', description: 'Scalable Architecture' },
  ]

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Large Avatar */}
            <div className="flex justify-center mb-6">
              <Image
                src="/avatar.png"
                alt="Yaroslav Petrichka"
                width={120}
                height={120}
                className="rounded-full ring-2 ring-gray-300 hover:ring-gray-400 shadow-xl transition-all duration-200"
                priority
              />
            </div>
            
            <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-8 text-gray-900">
              Building Digital Products
            </h1>
            
            <div ref={descriptionRef} className="max-w-3xl mx-auto mb-10">
              <p className="text-xl text-gray-600 leading-relaxed">
                Sharing Coding, AI & Tech knowledge 🔥
                <br />
                Teaching through building 📚
              </p>
            </div>
            
            <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/posts"
                className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
              >
                Read Blog Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Technology Stack
            </h2>
            <p className="text-lg text-gray-600">
              Tools and technologies I work with daily
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((tech, index) => {
              const Icon = tech.icon
              return (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-200 gsap-fade-in"
                >
                  <Icon className="w-8 h-8 text-gray-700 mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {tech.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {tech.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Recent Posts Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Recent Posts
              </h2>
              <p className="text-gray-600">
                Latest thoughts and tutorials
              </p>
            </div>
            <Link
              href="/posts"
              className="text-gray-700 hover:text-gray-900 font-medium flex items-center transition-colors duration-200"
            >
              View all posts
              <ArrowRight className="ml-1 w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <article 
                key={post.slug}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-200 gsap-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time>{formatDate(post.frontmatter.date)}</time>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    <Link 
                      href={`/posts/${post.slug}`}
                      className="hover:text-gray-700 transition-colors duration-200"
                    >
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  
                  <p className="text-gray-600">
                    {getFirstSentence(post.excerpt || post.frontmatter.excerpt || '')}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Interested in collaboration or have questions about development?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="inline-flex items-center px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors duration-200 font-medium"
            >
              Get in Touch
            </Link>
            <a
              href={`https://github.com/dreamcodestudio`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-medium"
            >
              <GitBranch className="mr-2 w-5 h-5" />
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}