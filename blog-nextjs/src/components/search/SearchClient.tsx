'use client'

import { useState, useEffect, useMemo } from 'react'
import { Search, Filter, Calendar, Tag, User, ArrowRight, Terminal, Zap } from 'lucide-react'
import Link from 'next/link'
import Fuse from 'fuse.js'
import { PostPreview } from '@/lib/posts'

interface SearchClientProps {
  posts: PostPreview[]
}

export default function SearchClient({ posts }: SearchClientProps) {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<PostPreview[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [isSearching, setIsSearching] = useState(false)

  // Setup Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    const options = {
      keys: [
        { name: 'frontmatter.title', weight: 0.7 },
        { name: 'frontmatter.tags', weight: 0.3 },
        { name: 'excerpt', weight: 0.2 }
      ],
      threshold: 0.4,
      includeScore: true,
      includeMatches: true
    }
    return new Fuse(posts, options)
  }, [posts])

  // Get unique categories from posts
  const categories = useMemo(() => {
    const categorySet = new Set<string>()
    posts.forEach(post => {
      post.frontmatter.tags.forEach(tag => {
        if (tag.toLowerCase().includes('unity')) categorySet.add('Unity')
        else if (['tool', 'utility', 'converter'].includes(tag.toLowerCase())) categorySet.add('Tools')
        else if (['flutter', 'dart'].includes(tag.toLowerCase())) categorySet.add('Mobile')
      })
    })
    return Array.from(categorySet).sort()
  }, [posts])

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  // Get category from tags
  const getCategoryFromTags = (tags: string[]): string => {
    if (tags.some(tag => tag.toLowerCase().includes('unity'))) return 'Unity'
    if (tags.some(tag => ['tool', 'utility', 'converter'].includes(tag.toLowerCase()))) return 'Tools'
    if (tags.some(tag => ['flutter', 'dart'].includes(tag.toLowerCase()))) return 'Mobile'
    return 'General'
  }

  // Perform search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(posts)
      return
    }

    setIsSearching(true)
    
    // Use a small delay to simulate search processing for UX
    const searchTimeout = setTimeout(() => {
      const fuseResults = fuse.search(searchQuery)
      const results = fuseResults.map(result => result.item)
      setSearchResults(results)
      setIsSearching(false)
    }, 300)

    return () => clearTimeout(searchTimeout)
  }, [searchQuery, fuse, posts])

  // Filter by category
  const filteredResults = useMemo(() => {
    if (selectedCategory === 'all') return searchResults
    
    return searchResults.filter(post => {
      const postCategory = getCategoryFromTags(post.frontmatter.tags)
      return postCategory === selectedCategory
    })
  }, [searchResults, selectedCategory])

  return (
    <div className="min-h-screen cyberpunk-bg">
      {/* Hero Section */}
      <section className="py-16 bg-cyberpunk-base relative overflow-hidden">
        {/* Cyberpunk grid background */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `
                 linear-gradient(rgba(252, 227, 0, 0.3) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(252, 227, 0, 0.3) 1px, transparent 1px)
               `,
               backgroundSize: '40px 40px'
             }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12">
            {/* Cyberpunk terminal prompt header */}
            <div className="inline-flex items-center gap-2 mb-6 text-cyberpunk-yellow font-tech text-sm border border-cyberpunk-yellow/30 px-4 py-2 rounded blur-dark">
              <Terminal className="w-4 h-4 animate-cyberpunk-pulse" />
              <span>&gt; SEARCH DATABASE INITIATED...</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-cyberpunk uppercase tracking-wider">
              <span className="text-text-white">NEURAL </span>
              <span className="text-cyberpunk-yellow">SEARCH</span>
            </h1>
            
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 font-tech">
              Access our complete knowledge database using advanced search algorithms
            </p>
          </div>

          {/* Search Interface */}
          <div className="max-w-4xl mx-auto">
            {/* Search Input */}
            <div className="relative mb-8">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-cyberpunk-yellow" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tutorials, tools, and guides..."
                className="w-full pl-16 pr-6 py-4 bg-bg-secondary border-2 border-cyberpunk-yellow/30 rounded-lg text-text-primary placeholder-text-tertiary focus:border-cyberpunk-yellow focus:outline-none transition-colors duration-300 font-tech text-lg cyber-panel-glass"
              />
              {isSearching && (
                <div className="absolute inset-y-0 right-0 pr-6 flex items-center">
                  <Zap className="h-5 w-5 text-cyberpunk-yellow animate-cyberpunk-pulse" />
                </div>
              )}
            </div>

            {/* Filter Categories */}
            <div className="flex flex-wrap gap-3 mb-8">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg font-tech text-sm transition-all duration-300 ${
                  selectedCategory === 'all'
                    ? 'bg-cyberpunk-yellow text-cyberpunk-base shadow-neon-yellow'
                    : 'bg-bg-secondary text-text-secondary hover:text-cyberpunk-yellow border border-cyberpunk-yellow/30 hover:border-cyberpunk-yellow'
                }`}
              >
                All Results
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-tech text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-cyberpunk-yellow text-cyberpunk-base shadow-neon-yellow'
                      : 'bg-bg-secondary text-text-secondary hover:text-cyberpunk-yellow border border-cyberpunk-yellow/30 hover:border-cyberpunk-yellow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Search Results */}
      <section className="py-12 bg-bg-primary relative">
        <div className="absolute inset-0 cyber-pattern opacity-5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div className="cyber-hud inline-block p-3">
              <div className="flex items-center gap-2 text-accent-primary font-mono text-sm">
                <Filter className="w-4 h-4 animate-cyber-glow" />
                <span className="cyber-neon-text">
                  {filteredResults.length} {filteredResults.length === 1 ? 'RESULT' : 'RESULTS'} FOUND
                </span>
              </div>
            </div>
          </div>

          {/* Results Grid */}
          {filteredResults.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResults.map((post, index) => (
                <article key={post.slug} className="cyber-panel-glass p-6 hover:shadow-cyber-cyan transition-all duration-300 group">
                  {/* Post Category */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent-primary bg-opacity-10 text-accent-primary border border-accent-primary">
                      {getCategoryFromTags(post.frontmatter.tags)}
                    </span>
                    <div className="flex items-center gap-2 text-accent-secondary font-mono text-sm">
                      <Calendar className="w-4 h-4" />
                      <time className="cyber-neon-text">{formatDate(post.frontmatter.date)}</time>
                    </div>
                  </div>
                  
                  {/* Post Title */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 font-cyber group-hover:text-accent-primary transition-colors duration-300">
                    <Link href={`/posts/${post.slug}`} className="hover:cyber-glow">
                      {post.frontmatter.title}
                    </Link>
                  </h3>
                  
                  {/* Post Excerpt */}
                  <p className="text-text-secondary mb-4 group-hover:text-text-primary transition-colors duration-300 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  {/* Post Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.frontmatter.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-bg-secondary text-text-tertiary">
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                    {post.frontmatter.tags.length > 3 && (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-bg-secondary text-text-tertiary">
                        +{post.frontmatter.tags.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  {/* Read More Link */}
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center text-accent-primary hover:text-cyberpunk-yellow transition-colors duration-300 font-tech font-medium group/link"
                  >
                    <span>ACCESS DATA</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                  </Link>

                  {/* Cyberpunk scan line effect */}
                  <div className="mt-4 h-px bg-gradient-to-r from-transparent via-accent-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </article>
              ))}
            </div>
          ) : (
            /* No Results */
            <div className="text-center py-16">
              <div className="cyber-panel-glass p-8 max-w-md mx-auto">
                <Terminal className="w-16 h-16 text-cyberpunk-yellow mx-auto mb-4 animate-cyberpunk-glitch" />
                <h3 className="text-xl font-bold text-text-primary mb-2 font-cyber">
                  NO DATA FOUND
                </h3>
                <p className="text-text-secondary font-tech">
                  Your search query didn't match any records in our database. Try different keywords or clear the filters.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('')
                    setSelectedCategory('all')
                  }}
                  className="mt-4 px-6 py-2 bg-cyberpunk-yellow text-cyberpunk-base rounded font-tech font-bold hover:shadow-neon-yellow transition-all duration-300"
                >
                  RESET SEARCH
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
} 