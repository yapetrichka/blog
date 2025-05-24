import SearchClient from '@/components/search/SearchClient'
import { getAllPosts } from '@/lib/posts'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Search - Unity & .NET Development Blog',
  description: 'Search through our collection of Unity tutorials, .NET guides, and development tools.',
  openGraph: {
    title: 'Search - Unity & .NET Development Blog',
    description: 'Find Unity tutorials, .NET guides, and development tools.',
    type: 'website',
  },
}

export default function SearchPage() {
  const posts = getAllPosts()

  return <SearchClient posts={posts} />
} 