# Technical Context

## Technology Stack

### Core Framework
- **Next.js 15** with App Router
- **TypeScript** for type safety
- **React 18** with modern hooks
- **Node.js** for build process

### Styling & Design
- **Tailwind CSS 3.4** for utility-first styling
- **Custom CSS** for cyberpunk theme in `globals.css`
- **GSAP 3.12** for advanced animations
- **Lucide React** for consistent iconography

### Fonts & Typography
- **Rajdhani** - Primary cyberpunk font (Google Fonts)
- **Orbitron** - Monospace/terminal font (Google Fonts)
- Font optimization via Next.js font system

### Content Management
- **Markdown** files for blog posts
- **Gray-matter** for frontmatter parsing
- **Custom processing** pipeline in `lib/posts.ts`
- Static generation at build time

### Build & Deployment
- **Static Export** for optimal performance
- **21 static pages** generated automatically
- **Automated SEO** file generation
- Compatible with any static hosting (Vercel, Netlify, GitHub Pages)

## Development Dependencies
```json
{
  "next": "^15.1.8",
  "react": "^18.3.1", 
  "typescript": "^5.7.3",
  "tailwindcss": "^3.4.17",
  "gsap": "^3.12.8",
  "gray-matter": "^4.0.3",
  "lucide-react": "^0.468.0"
}
```

## Configuration Files

### Next.js Configuration
```javascript
// next.config.js
const nextConfig = {
  output: 'export',  // Static site generation
  trailingSlash: true,
  images: {
    unoptimized: true
  }
}
```

### Tailwind Configuration
- Extended color palette with cyberpunk colors
- Custom fonts configuration
- Animation keyframes for cyberpunk effects
- Responsive breakpoints

### TypeScript Configuration
- Strict mode enabled
- Path aliases for clean imports (`@/` for src)
- Next.js specific types included

## Site Configuration
```javascript
// src/site.config.js
const siteConfig = {
  baseUrl: 'https://dreamcodestudio.com',
  siteName: 'Dream Code Studio',
  description: 'Unity and .NET development blog',
  author: 'dreamcodestudio'
}
```

## Performance Optimizations

### Build Output
- Static HTML generation
- CSS purging for minimal bundle size
- JavaScript code splitting
- Image optimization disabled for static export

### Loading Performance
- GSAP loaded efficiently
- Font preloading via Next.js
- Minimal JavaScript for static content
- Optimized CSS delivery

### SEO Optimizations
- Automated sitemap.xml with all posts
- Robots.txt with proper directives
- Meta tags for social sharing
- Structured markup for blog posts

## Development Workflow

### Scripts Available
```json
{
  "dev": "next dev",           // Development server
  "build": "next build",       // Production build
  "start": "next start",       // Production server
  "lint": "next lint",         // ESLint checking
  "deploy": "next build",      // Alias for build
  "preview": "npx serve dist", // Preview build locally
  "setup": "node scripts/setup-env.js" // Domain setup
}
```

### Build Process
1. TypeScript compilation
2. Tailwind CSS processing
3. Static page generation (21 pages)
4. Sitemap/robots.txt generation
5. Asset optimization
6. Export to `/dist` folder

## Browser Compatibility
- Modern browsers (ES2017+)
- Mobile browsers optimized
- Progressive enhancement approach
- GSAP compatibility across platforms

## Hosting Requirements
- **Static hosting only** (no server required)
- CDN support for global distribution
- HTTPS recommended
- Custom domain support via `site.config.js`

## File Structure Patterns
- **App Router** for file-based routing
- **Component co-location** for related files
- **Utility functions** in `/lib` directory
- **Configuration centralization** in root and `/src`

## Known Limitations
- No server-side features (comments, forms)
- Static content only (no dynamic data)
- Build-time content processing only
- No real-time features

## Maintenance Notes
- Update dependencies regularly
- Test mobile experience on changes
- Verify build output after updates
- Monitor performance metrics
- Keep cyberpunk color scheme consistent 