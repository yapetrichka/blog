import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostFrontmatter {
  title: string
  date: string
  tags: string[]
  excerpt?: string
  image?: string
  layout?: string
}

export interface Post {
  slug: string
  frontmatter: PostFrontmatter
  content: string
}

export interface PostPreview {
  slug: string
  frontmatter: PostFrontmatter
  excerpt: string
}

export function getAllPosts(): PostPreview[] {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData = fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        const fullPath = path.join(postsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Extract excerpt from content (first paragraph)
        const excerpt = content
          .split('\n\n')[0]
          .replace(/[#*`]/g, '') // Remove markdown formatting
          .substring(0, 200) + '...'

        return {
          slug,
          frontmatter: {
            ...data,
            date: data.date || extractDateFromFilename(fileName),
            tags: data.tags || [],
          } as PostFrontmatter,
          excerpt,
        }
      })
      .sort((a, b) => {
        // Sort by date descending
        return new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime()
      })

    return allPostsData
  } catch (error) {
    console.error('Error reading posts directory:', error)
    return []
  }
}

export function getPostBySlug(slug: string): Post | null {
  try {
    // Simple decode - only decode once since we're not double-encoding anymore
    let decodedSlug = slug
    try {
      // Only decode if the slug contains encoded characters
      if (slug.includes('%')) {
        decodedSlug = decodeURIComponent(slug)
      }
    } catch (e) {
      // If decoding fails, use original slug
      decodedSlug = slug
    }
    
    const fullPath = path.join(postsDirectory, `${decodedSlug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      slug: decodedSlug,
      frontmatter: {
        ...data,
        date: data.date || extractDateFromFilename(decodedSlug),
        tags: data.tags || [],
      } as PostFrontmatter,
      content,
    }
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error)
    return null
  }
}


export function getRelatedPosts(currentSlug: string, limit: number = 3): PostPreview[] {
  const allPosts = getAllPosts()
  // Simple decode for comparison
  let decodedCurrentSlug = currentSlug
  try {
    if (currentSlug.includes('%')) {
      decodedCurrentSlug = decodeURIComponent(currentSlug)
    }
  } catch (e) {
    decodedCurrentSlug = currentSlug
  }
  const currentPost = allPosts.find(post => post.slug === decodedCurrentSlug)
  
  if (!currentPost) return []

  const currentTags = currentPost.frontmatter.tags
  
  // Score posts based on tag similarity
  const scoredPosts = allPosts
    .filter(post => post.slug !== decodedCurrentSlug)
    .map(post => {
      const commonTags = post.frontmatter.tags.filter(tag =>
        currentTags.some(currentTag => 
          currentTag.toLowerCase() === tag.toLowerCase()
        )
      )
      
      return {
        post,
        score: commonTags.length
      }
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)

  return scoredPosts.map(item => item.post)
}

function extractDateFromFilename(filename: string): string {
  // Extract date from Jekyll filename format: YYYY-MM-DD-title.md
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})/)
  return match ? match[1] : new Date().toISOString().split('T')[0]
}

// Generate static paths for all posts
export function getAllPostSlugs() {
  try {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
      .filter((name) => name.endsWith('.md'))
      .map((fileName) => {
        const slug = fileName.replace(/\.md$/, '')
        return {
          params: {
            slug: slug, // Keep original slug without encoding
          },
        }
      })
  } catch (error) {
    console.error('Error getting post slugs:', error)
    return []
  }
} 