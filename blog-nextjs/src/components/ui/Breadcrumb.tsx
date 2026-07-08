import Link from 'next/link'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center font-mono text-xs uppercase tracking-label text-gray-500 mb-6">
      <Link href="/" className="hover:text-accent-primary transition-colors">
        Home
      </Link>

      {items.map((item, index) => (
        <div key={index} className="flex items-center min-w-0">
          <span className="text-gray-300 mx-2">/</span>
          {item.href ? (
            <Link
              href={item.href}
              className="hover:text-accent-primary transition-colors"
            >
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-900 normal-case tracking-normal truncate max-w-[240px]">
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  )
}
