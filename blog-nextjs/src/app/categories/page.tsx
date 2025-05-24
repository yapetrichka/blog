import { getAllCategories, getAllPosts } from '@/lib/posts'
import CategoriesClient from '@/components/categories/CategoriesClient'

export default function CategoriesPage() {
  const categories = getAllCategories()
  const allPosts = getAllPosts()
  
  // Group posts by category
  const categorizedPosts = categories.reduce((acc, category) => {
    const categoryPosts = allPosts.filter(post => {
      // Use the same inference logic as in posts.ts
      const tags = post.frontmatter.tags
      const categoryMappings: Record<string, string[]> = {
        'Unity': ['unity', 'unity3d', 'game-development', 'gamedev'],
        'Tools': ['tools', 'utility', 'converter', 'calculator'],
        'C#/.NET': ['csharp', 'dotnet', '.net', 'programming'],
        'Mobile': ['flutter', 'dart', 'mobile', 'android'],
        'Web': ['web', 'javascript', 'typescript', 'react', 'nextjs']
      }
      
      for (const [cat, categoryTags] of Object.entries(categoryMappings)) {
        if (cat === category && tags.some(tag => categoryTags.includes(tag.toLowerCase()))) {
          return true
        }
      }
      
      if (category === 'Unity' && tags.some(tag => tag.toLowerCase().includes('unity'))) return true
      if (category === 'Tools' && tags.some(tag => ['tool', 'utility', 'converter'].includes(tag.toLowerCase()))) return true
      if (category === 'Mobile' && tags.some(tag => ['flutter', 'dart'].includes(tag.toLowerCase()))) return true
      if (category === 'General') {
        // General category for posts that don't fit elsewhere
        const hasSpecificCategory = tags.some(tag => {
          const lowerTag = tag.toLowerCase()
          return ['unity', 'tool', 'utility', 'converter', 'flutter', 'dart', 'csharp', 'dotnet'].includes(lowerTag) ||
                 lowerTag.includes('unity')
        })
        return !hasSpecificCategory
      }
      
      return false
    })
    
    if (categoryPosts.length > 0) {
      acc[category] = categoryPosts
    }
    
    return acc
  }, {} as Record<string, typeof allPosts>)

  return <CategoriesClient categorizedPosts={categorizedPosts} />
} 