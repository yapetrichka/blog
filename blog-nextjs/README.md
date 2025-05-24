# Unity & .NET Development Blog

Modern Next.js blog with GSAP animations, focused on Unity development, .NET programming, and game development tools.

## 🚀 Features

### ✨ Core Features
- **Next.js 15** with App Router and TypeScript
- **GSAP Animations** with smooth scroll-triggered effects
- **Responsive Design** optimized for all devices
- **Dark/Light Theme** with system preference detection
- **Static Export** ready for Yandex Object Storage

### 📝 Content Management
- **10 Migrated Posts** from Jekyll with full content
- **Dynamic Routing** for individual posts (`/posts/[slug]`)
- **Categories Page** with automatic categorization
- **Tags System** with interactive tag cloud and filtering
- **About Page** with professional author information
- **Breadcrumb Navigation** for better UX

### 🎨 UI/UX
- **Professional Design** with modern aesthetics
- **GSAP Animations** for smooth page transitions
- **Tailwind CSS** with custom design system
- **Lucide Icons** for consistent iconography
- **Mobile-First** responsive approach

### 🔍 SEO & Performance
- **Static Generation** for all pages (18 total)
- **SEO Optimized** with meta tags, sitemap, robots.txt
- **Fast Bundle** (~105 kB initial load)
- **Security Headers** configured
- **Cache Optimization** for static assets

## 📁 Project Structure

```
blog-nextjs/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── page.tsx           # Homepage
│   │   ├── about/             # About page
│   │   ├── posts/             # Posts listing and individual posts
│   │   ├── categories/        # Categories page
│   │   └── tags/              # Tags page
│   ├── components/            # React components
│   │   ├── layout/           # Header, Footer, Theme Provider
│   │   ├── posts/            # Post-related components
│   │   ├── categories/       # Category components
│   │   ├── tags/             # Tag components
│   │   └── ui/               # UI components (Breadcrumb, etc.)
│   └── lib/
│       └── posts.ts          # Post utilities and types
├── content/
│   └── posts/                # Markdown blog posts
├── public/                   # Static assets, SEO files
├── dist/                     # Build output for deployment
└── docs/                     # Documentation
```

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP with ScrollTrigger
- **Content**: Gray-matter for Markdown processing
- **Icons**: Lucide React
- **Deployment**: Static export for Yandex Object Storage

## 🏃‍♂️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone <repository-url>
cd blog-nextjs

# Install dependencies
npm install

# Start development server
npm run dev
```

### Development
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run deploy   # Build and prepare for deployment
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
```

## 📊 Content Overview

### Blog Posts (10 total)
1. **GameSensitivity CloudStorage** - Flutter/Dart sensitivity calculator
2. **InstaBreath** - Breathing exercise mobile app
3. **CS2 Crosshairs** - Counter-Strike crosshair tool
4. **Unit Converter** - Multi-purpose conversion utility
5. **GameAim Converter** - Gaming sensitivity converter
6. **Unity UPM Asset Store** - Package management guide
7. **Unity Nullable Reference Types** - C# programming tutorial
8. **Unity Package Publishing** - npm publishing guide
9. **Unity Smart Importer** - Asset import automation
10. **Unity Auto Keystore** - Android build automation

### Categories
- **Unity** - Game development tutorials and tools
- **Tools** - Utilities and converters
- **Mobile** - Flutter/Dart applications
- **C#/.NET** - Programming techniques

## 🎯 Performance Metrics

- **Bundle Size**: 105 kB initial load (gzipped)
- **Page Size**: 176 B - 2.7 kB per page
- **Build Time**: ~6 seconds
- **Static Pages**: 18 pages generated
- **Lighthouse Score**: Optimized for performance, SEO, accessibility

## 🚀 Deployment

The project is configured for static hosting on Yandex Object Storage.

### Quick Deploy
```bash
# Build for production
npm run deploy

# Upload to Yandex Object Storage
aws s3 sync ./dist s3://your-bucket-name --profile yandex --delete
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🎨 Design System

### Colors
- **Primary**: Blue theme with variants
- **Background**: Dynamic based on theme
- **Muted**: Subtle text and borders
- **Card**: Container backgrounds

### Typography
- **Heading**: Inter font family
- **Body**: Inter font family
- **Code**: JetBrains Mono

### Animations
- **Page Transitions**: GSAP-powered smooth transitions
- **Scroll Reveals**: Content reveals on scroll
- **Hover Effects**: Interactive element feedback
- **Loading States**: Smooth loading animations

## 🔧 Configuration

### Next.js Config
```javascript
// next.config.js
{
  output: 'export',           // Static export
  trailingSlash: true,        // URL trailing slashes
  distDir: 'dist',           // Output directory
  images: { unoptimized: true } // Static image optimization
}
```

### Theme Configuration
- System preference detection
- Persistent theme storage
- Smooth theme transitions
- Dark/light mode support

## 📈 SEO Features

- **Meta Tags**: Comprehensive meta tag system
- **Open Graph**: Social media sharing optimization
- **Twitter Cards**: Twitter-specific meta tags
- **Sitemap**: Auto-generated XML sitemap
- **Robots.txt**: Search engine directives
- **Structured Data**: JSON-LD schema markup ready

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📝 Adding New Posts

1. Create a new `.md` file in `content/posts/`
2. Use the format: `YYYY-MM-DD-title.md`
3. Include frontmatter:
```yaml
---
title: "Your Post Title"
date: "YYYY-MM-DD"
tags: ["tag1", "tag2"]
excerpt: "Brief description"
---
```
4. Rebuild the project

## 🐛 Known Issues

- Some Unity post files have spaces in names (non-critical)
- Image assets need migration from Jekyll (future enhancement)
- Code syntax highlighting not implemented (future feature)

## 📋 Roadmap

- [ ] Migrate Jekyll images
- [ ] Add syntax highlighting for code blocks  
- [ ] Implement search functionality
- [ ] Add analytics integration
- [ ] PWA features
- [ ] Comment system

## 📄 License

MIT License - see LICENSE file for details.

## 🙋‍♂️ Support

For questions or issues:
1. Check the documentation
2. Review existing issues
3. Create a new issue with details

---

**Project Status**: Production Ready ✅  
**Last Updated**: January 2025  
**Version**: 1.0.0 