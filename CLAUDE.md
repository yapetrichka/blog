# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
cd blog-nextjs
npm run dev        # Start development server on http://localhost:3000
npm run build      # Build for production (static export)
npm run start      # Start production server (after build)
npm run lint       # Run ESLint for code quality
npm run deploy     # Build and prepare for deployment
npm run preview    # Preview production build locally
npm run setup      # Setup environment variables
```

### Content Management
```bash
# Add new blog post
# Create new file: content/posts/YYYY-MM-DD-title.md
# Include frontmatter with title, date, tags, excerpt
```

## Architecture Overview

This is a **Next.js 15 blog with GSAP animations** focused on Unity and .NET development content.

### Key Architecture Components

**Framework**: Next.js 15 with App Router, TypeScript, and static export
**Styling**: Tailwind CSS with cyberpunk theme (Rajdhani + Orbitron fonts)
**Animations**: GSAP with ScrollTrigger for smooth page transitions
**Content**: Markdown posts with gray-matter frontmatter processing
**Deployment**: Static export optimized for Yandex Object Storage

### File Structure
```
blog-nextjs/                    # Main Next.js application
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── posts/[slug]/       # Dynamic post routes
│   │   ├── search/             # Search functionality
│   │   └── tags/               # Tag filtering
│   ├── components/
│   │   ├── animations/         # GSAP animation providers
│   │   ├── layout/             # Header, Footer components
│   │   ├── posts/              # Post display components
│   │   └── ui/                 # Reusable UI components
│   ├── lib/
│   │   └── posts.ts            # Core post processing utilities
│   └── site.config.js          # Site configuration and social links
├── content/posts/              # Markdown blog posts
├── public/assets/              # Static images and assets
└── memory-bank/                # Project documentation and context
```

### Content System

**Post Processing**: Posts are processed from `content/posts/` using gray-matter
**File Format**: `YYYY-MM-DD-title.md` with frontmatter (title, date, tags, excerpt)
**Categories**: Auto-inferred from tags (Unity, Tools, C#/.NET, Mobile, Web)
**Search**: Tag-based filtering and related posts system
**Routing**: Dynamic routes at `/posts/[slug]` with URL-safe slugs

### Animation System

**Provider Pattern**: GSAPProvider wraps the app for centralized animation management
**CSS Classes**: Declarative animations (.gsap-fade-in, .gsap-slide-up, .gsap-scale)
**ScrollTrigger**: Elements animate when 80% visible with proper cleanup
**Performance**: Hardware-accelerated transforms with reduced motion support

### Configuration

**Path Aliases**: `@/*` maps to `src/*`, `@/components/*` to `src/components/*`
**TypeScript**: Strict mode with ES2017 target
**Static Export**: Configured for deployment to static hosting
**Tailwind**: Custom cyberpunk theme with yellow/white color scheme

### Key Files to Understand

- `src/lib/posts.ts`: Core content processing and data structures
- `src/app/layout.tsx`: Root layout with providers and global styling
- `src/site.config.js`: Site configuration including social links
- `tailwind.config.js`: Custom cyberpunk theme and animations
- `next.config.js`: Static export configuration

### Development Notes

**Working Directory**: Always `cd blog-nextjs` before running commands
**Hot Reload**: Development server supports hot reload for all file types
**Type Safety**: All post data uses TypeScript interfaces
**Memory Bank**: Contains project context and system patterns documentation
**Static Assets**: Images stored in `public/assets/img/posts/`