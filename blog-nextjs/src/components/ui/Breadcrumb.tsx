import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-cyberpunk-yellow/80 mb-6">
      <Link 
        href="/" 
        className="flex items-center hover:text-cyberpunk-yellow transition-colors"
      >
        <Home className="w-4 h-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight className="w-4 h-4" />
          {item.href ? (
            <Link 
              href={item.href}
              className="hover:text-cyberpunk-yellow transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-cyberpunk-white font-medium">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
} 