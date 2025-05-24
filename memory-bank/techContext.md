# Technical Context

## Core Technologies

### Next.js 15 Framework
- **Version**: Next.js 15 with App Router
- **Language**: TypeScript 5.x
- **Purpose**: Modern React framework with static generation
- **Benefits**: Server-side rendering, image optimization, automatic code splitting

### GSAP Animation Library
- **Version**: GSAP 3.12+
- **Plugins**: ScrollTrigger for scroll-based animations
- **Purpose**: High-performance animations and micro-interactions
- **Benefits**: 60fps animations, cross-browser compatibility, timeline control

### Styling and UI
- **Tailwind CSS**: Utility-first CSS framework for rapid development
- **Lucide React**: Modern icon library with consistent design
- **Inter Font**: Professional typography for technical content
- **JetBrains Mono**: Monospace font for code blocks

### Dependencies (from package.json)
```json
{
  "dependencies": {
    "next": "^15.1.8",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "gsap": "^3.12.8",
    "gray-matter": "^4.0.3",
    "fuse.js": "^7.0.0",
    "lucide-react": "^0.468.0",
    "tailwindcss": "^3.4.17",
    "postcss": "^8.5.0",
    "autoprefixer": "^10.4.20"
  },
  "devDependencies": {
    "typescript": "^5.7.3",
    "@types/node": "^22.10.5",
    "@types/react": "^18.3.17",
    "@types/react-dom": "^18.3.5",
    "eslint": "^8",
    "eslint-config-next": "15.1.8"
  }
}
```

## Development Environment

### Local Setup Requirements
- **Node.js**: Version 18+ (currently limited by v16.17.0 - needs upgrade)
- **npm**: Package management and script execution
- **TypeScript**: Type checking and development experience
- **Git**: Version control and deployment pipeline

### Development Commands
```bash
# Install dependencies
npm install

# Local development server
npm run dev

# Production build
npm run build

# Static export for deployment
npm run export

# Code linting
npm run lint
```

### Modern Toolchain
- **Hot Reload**: Instant feedback during development
- **TypeScript**: Compile-time error detection
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Path Aliases**: Clean import statements with @/ prefix

## Animation Technology

### GSAP Configuration
```typescript
// GSAP setup in GSAPProvider
gsap.registerPlugin(ScrollTrigger)
gsap.config({
  force3D: true,
  nullTargetWarn: false
})
```

### Animation Classes System
```css
/* Declarative animation triggers */
.gsap-fade-in     { opacity: 0; }
.gsap-slide-up    { opacity: 0; transform: translateY(30px); }
.gsap-slide-down  { opacity: 0; transform: translateY(-30px); }
.gsap-scale       { opacity: 0; transform: scale(0.8); }
```

### ScrollTrigger Integration
- **Performance**: Hardware-accelerated transforms
- **Accessibility**: Reduced motion support
- **Mobile Optimization**: Touch-friendly animations
- **Memory Management**: Automatic cleanup on unmount

## Content Management

### Markdown Processing
- **Gray-matter**: YAML frontmatter parsing
- **Build-time Processing**: Static content compilation
- **Type Safety**: TypeScript interfaces for post data
- **SEO Optimization**: Automatic meta tag generation

### Post Structure
```typescript
interface BlogPost {
  slug: string
  title: string
  date: string
  categories: string[]
  tags: string[]
  description?: string
  image?: string
  content: string
}
```

### Search Technology
- **Fuse.js**: Client-side fuzzy search
- **Build-time Indexing**: Pre-computed search index
- **Real-time Results**: Sub-100ms response times
- **Keyboard Navigation**: Accessible search interface

## Styling Architecture

### Tailwind CSS Configuration
```javascript
// Custom design system
theme: {
  extend: {
    colors: {
      primary: {
        50: '#f0f9ff',
        500: '#3b82f6',
        600: '#2563eb',
        700: '#1d4ed8',
        900: '#1e3a8a',
      }
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    }
  }
}
```

### Dark Mode Implementation
- **CSS Variables**: Dynamic color switching
- **System Preference**: Automatic theme detection
- **Local Storage**: Persistent user preferences
- **Smooth Transitions**: Animated theme changes

## Performance Optimization

### Static Generation
- **Build-time Rendering**: Pre-computed HTML pages
- **Image Optimization**: Next.js Image component with WebP
- **Code Splitting**: Automatic bundle optimization
- **Tree Shaking**: Unused code elimination

### Animation Performance
- **RequestAnimationFrame**: Smooth 60fps animations
- **GPU Acceleration**: Hardware-accelerated transforms
- **Intersection Observer**: Efficient scroll detection
- **Memory Management**: Proper cleanup of animation instances

### Bundle Optimization
```javascript
// next.config.js
{
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react']
  }
}
```

## Deployment Pipeline

### Static Export Configuration
```javascript
// next.config.js for Yandex Object Storage
{
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: { unoptimized: true },
  experimental: {
    mdxRs: true
  }
}
```

### Build Process
1. **TypeScript Compilation**: Type checking and transpilation
2. **Static Generation**: Pre-rendering all pages
3. **Asset Optimization**: Image and font optimization
4. **Bundle Creation**: Optimized JavaScript bundles
5. **Export**: Static files ready for deployment

### Yandex Object Storage
- **Static Hosting**: CDN-optimized file serving
- **Client-side Routing**: SPA behavior with fallbacks
- **Caching Strategy**: Optimized cache headers
- **Compression**: Gzip and Brotli support

## Development Tools

### Type Safety
```typescript
// Strict TypeScript configuration
{
  "strict": true,
  "noEmit": true,
  "esModuleInterop": true,
  "moduleResolution": "bundler"
}
```

### Code Quality
- **ESLint**: Next.js recommended rules
- **TypeScript**: Compile-time error detection
- **Import Organization**: Automatic import sorting
- **Path Aliases**: Clean module resolution

### Performance Monitoring
- **Bundle Analyzer**: Webpack bundle analysis
- **Core Web Vitals**: Performance metrics tracking
- **Animation Performance**: Frame rate monitoring
- **Memory Usage**: GSAP instance management

## Security Considerations

### Content Security
- **Static Generation**: No server-side vulnerabilities
- **XSS Prevention**: React's built-in sanitization
- **Type Safety**: TypeScript preventing runtime errors
- **Content Validation**: Frontmatter schema validation

### Privacy and Data
- **Minimal Data Collection**: Theme preferences only
- **Local Storage**: Client-side preference storage
- **No Tracking**: Privacy-focused analytics approach
- **GDPR Compliance**: Transparent data practices

## Technical Constraints

### Deployment Limitations
- **Static Export**: No server-side features
- **Client-side Routing**: Browser history API dependency
- **Image Optimization**: Disabled for static export
- **API Routes**: Not available in static export mode

### Performance Constraints
- **Bundle Size**: Target under 500KB initial load
- **Animation Budget**: Maximum 16ms frame time
- **Memory Usage**: Efficient GSAP instance management
- **Mobile Performance**: Optimized for lower-end devices

### Browser Support
- **Modern Browsers**: ES2020+ JavaScript features
- **GSAP Compatibility**: IE11+ animation support
- **CSS Grid**: Modern layout techniques
- **IntersectionObserver**: For scroll animations

## Future Technical Roadmap

### Performance Enhancements
- **PWA Support**: Service worker implementation
- **Lazy Loading**: Progressive content loading
- **Edge Optimization**: CDN performance tuning
- **Critical CSS**: Above-the-fold optimization

### Feature Expansion
- **API Integration**: Dynamic content capabilities
- **Real-time Updates**: WebSocket integration potential
- **Advanced Analytics**: Custom event tracking
- **A/B Testing**: Performance-driven optimization

### Development Experience
- **Component Library**: Storybook integration
- **Visual Testing**: Screenshot regression testing
- **Performance Budgets**: Automated performance monitoring
- **CI/CD Pipeline**: Automated testing and deployment 