# Technical Context

## Core Technologies

### Jekyll Static Site Generator
- **Version**: Jekyll 4.x
- **Language**: Ruby 2.7+
- **Purpose**: Converts Markdown content to static HTML
- **Benefits**: Fast, secure, GitHub Pages compatible

### Chirpy Theme
- **Repository**: [cotes2020/jekyll-theme-chirpy](https://github.com/cotes2020/jekyll-theme-chirpy)
- **Type**: Jekyll theme optimized for technical blogs
- **Features**: Dark/light mode, responsive design, SEO optimization
- **Customization**: SCSS variables and layout overrides

### Dependencies (from Gemfile)
```ruby
source "https://rubygems.org"

gem "jekyll-theme-chirpy", "~> 6.0", ">= 6.0.1"

group :test do
  gem "html-proofer", "~> 4.4"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Jekyll plugins
group :jekyll_plugins do
  gem "jekyll-archives"
end
```

## Development Environment

### Local Setup Requirements
- **Ruby**: Version 2.7 or higher
- **Bundler**: For dependency management
- **Jekyll**: Installed via Bundler
- **Git**: For version control and deployment

### Development Commands
```bash
# Install dependencies
bundle install

# Local development server
bundle exec jekyll serve

# Build for production
bundle exec jekyll build

# Clean build artifacts
bundle exec jekyll clean
```

### Platform Considerations
- **Windows Compatibility**: Special gems for Windows development (wdm, tzinfo-data)
- **GitHub Pages**: All dependencies must be GitHub Pages compatible
- **Performance**: Optimized for static file serving

## Configuration Management

### Site Configuration (_config.yml)
- **Theme Settings**: Chirpy theme configuration
- **SEO Settings**: Title, description, social links
- **Jekyll Settings**: Permalink structure, pagination
- **Plugin Configuration**: Jekyll Archives, SEO tag

### Environment Variables
- **JEKYLL_ENV**: Controls development vs production behavior
- **GitHub Secrets**: For sensitive configuration in CI/CD

## Content Management

### File Formats
- **Posts**: Markdown (.md) files in `_posts/` directory
- **Pages**: Markdown files in root or `_tabs/` directory
- **Data**: YAML files in `_data/` directory
- **Assets**: Images, CSS, JS in `assets/` directory

### Front Matter Schema
```yaml
---
title: "Post Title"
date: YYYY-MM-DD HH:MM:SS +/-TTTT
categories: [category1, category2]
tags: [tag1, tag2]
description: "Post description for SEO"
image: /path/to/featured/image.jpg
---
```

## Deployment Pipeline

### GitHub Pages Integration
- **Repository**: GitHub repository with Pages enabled
- **Build Process**: Automatic Jekyll build on push to main branch
- **Custom Domain**: Configurable via CNAME file
- **SSL**: Automatic HTTPS certificate

### Build Process
1. **Trigger**: Push to main branch
2. **Environment**: GitHub Pages Jekyll environment
3. **Dependencies**: Automatic bundle install
4. **Build**: Jekyll generates static files
5. **Deploy**: Files served from gh-pages branch or `_site/` directory

## Performance Optimization

### Static Asset Handling
- **CSS**: SCSS compilation and minification
- **JavaScript**: Minification and concatenation
- **Images**: Optimized formats and sizes
- **Fonts**: Web font optimization

### Caching Strategy
- **Browser Caching**: Appropriate cache headers
- **CDN**: GitHub Pages CDN for global distribution
- **Service Worker**: PWA features for offline capability

## SEO and Analytics

### Built-in SEO Features
- **Jekyll SEO Tag**: Automatic meta tags
- **Sitemap**: XML sitemap generation
- **Robots.txt**: Search engine crawling control
- **Structured Data**: JSON-LD markup

### Analytics Integration
- **Google Analytics**: Configurable tracking ID
- **Privacy**: GDPR-compliant analytics setup
- **Performance**: Page view tracking and user engagement

## Security Considerations

### Static Site Security
- **No Server-Side Code**: Eliminates many attack vectors
- **HTTPS**: Encrypted connections via GitHub Pages
- **Content Security**: No user-generated content risks

### Dependency Security
- **Regular Updates**: Automated security updates via Dependabot
- **Vulnerability Scanning**: GitHub security alerts
- **Minimal Dependencies**: Reduced attack surface

## Technical Constraints

### GitHub Pages Limitations
- **Jekyll Version**: Must use GitHub Pages supported Jekyll version
- **Plugin Restrictions**: Limited to approved Jekyll plugins
- **Build Time**: Maximum 10-minute build time
- **File Size**: Repository size limits

### Theme Constraints
- **Chirpy Structure**: Must follow theme's file organization
- **Customization Limits**: Some features require theme updates
- **Compatibility**: Theme updates may require migration work 