import { getAllTags, getAllPosts } from '@/lib/posts'
import TagsClient from '@/components/tags/TagsClient'

export default function TagsPage() {
  const allTags = getAllTags()
  const allPosts = getAllPosts()
  
  // Create tag statistics
  const tagStats = allTags.map(tag => {
    const postCount = allPosts.filter(post => 
      post.frontmatter.tags.some(postTag => 
        postTag.toLowerCase() === tag.toLowerCase()
      )
    ).length
    
    return {
      tag,
      count: postCount,
      posts: allPosts.filter(post => 
        post.frontmatter.tags.some(postTag => 
          postTag.toLowerCase() === tag.toLowerCase()
        )
      )
    }
  }).sort((a, b) => b.count - a.count) // Sort by post count descending

  return <TagsClient tagStats={tagStats} />
} 