# System Patterns & Architecture

## Project Architecture

### Directory Structure
```
src/
├── app/                    # Next.js 15 App Router
│   ├── layout.tsx         # Root layout with fonts and meta
│   ├── page.tsx           # Homepage
│   ├── globals.css        # Cyberpunk theme styles
│   ├── sitemap.ts         # Automated sitemap generation
│   ├── robots.ts          # Automated robots.txt generation
│   └── posts/             # Blog routes
├── components/            # Reusable UI components
│   ├── home/              # Homepage specific components
│   ├── posts/             # Post-related components
│   ├── layout/            # Layout components (Header, etc.)
│   └── ui/                # Generic UI components
├── lib/                   # Utility functions
│   └── posts.ts           # Post processing logic
└── site.config.js         # Local configuration for domain
```

## Key Design Patterns

### 1. Color System Architecture
**Pattern**: Centralized cyberpunk color scheme
```css
/* Core colors defined in globals.css */
--cyberpunk-base: #000000;      /* Pure black background */
--cyberpunk-yellow: #FCE300;    /* Primary accent */
--cyberpunk-white: #FFFFFF;     /* Text color */
```

**Implementation Rules**:
- Always use defined cyberpunk colors: `cyberpunk-yellow`, `cyberpunk-white`, `cyberpunk-base`
- Never use undefined Tailwind classes like `text-muted-foreground`, `bg-background`
- Text visibility priority: Yellow for accents, White for readable text, Black backgrounds

### 2. Component Client/Server Pattern
**Pattern**: Client components for interactivity, server for data
```typescript
// Server component (data fetching)
export default function PostsPage() {
  const posts = getAllPosts()
  return <PostsClient posts={posts} />
}

// Client component (interactions, animations)
'use client'
export default function PostsClient({ posts }) {
  // GSAP animations, user interactions
}
```

### 3. SEO Automation Pattern
**Pattern**: Configuration-driven generation
```typescript
// src/site.config.js - Single source of truth
const siteConfig = {
  baseUrl: 'https://dreamcodestudio.com',
  siteName: 'Dream Code Studio',
  // ...
}

// Used by both sitemap.ts and robots.ts
const siteConfig = require('../site.config.js')
const baseUrl = siteConfig.baseUrl
```

### 4. Animation Architecture
**Pattern**: GSAP with React refs and cleanup
```typescript
useEffect(() => {
  const ctx = gsap.context(() => {
    // Animations here
  }, containerRef)
  return () => ctx.revert() // Cleanup
}, [])
```

### 5. Post Processing Pipeline
**Pattern**: Frontmatter + Markdown to structured data
```typescript
export interface Post {
  slug: string
  frontmatter: {
    title: string
    date: string
    tags: string[]
  }
  content: string
  excerpt: string
}
```

## Critical Implementation Notes

### Text Visibility Requirements
- **Black backgrounds require careful color choices**
- Always test text contrast on `bg-cyberpunk-base`
- Use `text-cyberpunk-yellow` for headings and accents
- Use `text-cyberpunk-white` for body text
- Use `text-cyberpunk-white/80` for secondary text

### Mobile Navigation Pattern
```typescript
// State management for mobile menu
const [isOpen, setIsOpen] = useState(false)

// Toggle with proper animations
const toggleMenu = () => {
  setIsOpen(!isOpen)
  // GSAP animations
}
```

### Static Generation Optimization
- Next.js App Router with `output: 'export'`
- `export const dynamic = 'force-static'` for routes
- Automatic page generation from markdown files
- Build result: 21 static pages

## Configuration Management

### Domain Configuration
**Pattern**: Local config file instead of environment variables
- Easier to modify than .env files
- Version controlled
- Direct import in generation scripts
- No environment variable complexity

### Build Optimization
- Static export for maximum performance
- GSAP loaded efficiently
- Tailwind CSS purged for production
- Automatic sitemap/robots generation

## Component Interaction Patterns

### Color Scheme Enforcement
```typescript
// ✅ Correct pattern
className="text-cyberpunk-yellow hover:text-cyberpunk-white"

// ❌ Avoid undefined classes
className="text-primary hover:text-muted-foreground"
```

### Animation Integration
```typescript
// Consistent GSAP pattern across components
const containerRef = useRef<HTMLDivElement>(null)

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.fromTo(element, { opacity: 0 }, { opacity: 1 })
  }, containerRef)
  return () => ctx.revert()
}, [])
```

## Maintenance Principles
1. **Color Consistency**: All components must use cyberpunk color scheme
2. **Performance First**: Static generation for optimal loading
3. **Mobile Priority**: Test all changes on mobile devices
4. **SEO Automation**: Never manually edit sitemap/robots files
5. **Clean Architecture**: Separate client/server responsibilities 