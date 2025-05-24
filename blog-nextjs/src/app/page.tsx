import { getAllPosts } from '@/lib/posts'
import HomeClient from '@/components/home/HomeClient'

export default function HomePage() {
  const recentPosts = getAllPosts().slice(0, 3)

  return <HomeClient recentPosts={recentPosts} />
} 