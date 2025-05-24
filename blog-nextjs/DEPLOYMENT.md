# Deployment Guide - Yandex Object Storage

## Overview
This guide explains how to deploy the Next.js blog to Yandex Object Storage for static hosting.

## Prerequisites
- Yandex Cloud account
- Yandex Object Storage bucket configured for static website hosting
- AWS CLI or s3cmd configured for Yandex Object Storage

## Project Build
The project is configured for static export and ready for deployment:

```bash
# Build the project
npm run deploy

# Preview locally (optional)
npm run preview
```

## Deploy to Yandex Object Storage

### 1. Configure AWS CLI for Yandex Object Storage
```bash
aws configure --profile yandex
# Enter your Yandex Object Storage credentials:
# Access Key ID: Your access key
# Secret Access Key: Your secret key
# Default region: ru-central1
# Output format: json
```

### 2. Upload Files
```bash
# Upload all files from dist folder
aws s3 sync ./dist s3://your-bucket-name --profile yandex --delete

# Or using s3cmd
s3cmd sync ./dist/ s3://your-bucket-name --delete-removed
```

### 3. Configure Bucket for Static Website
Set the following settings in Yandex Object Storage console:

- **Index Document**: `index.html`
- **Error Document**: `404.html`
- **Website Hosting**: Enabled

### 4. Set Up Domain (Optional)
1. Point your domain to the Object Storage endpoint
2. Update `sitemap.xml` and `robots.txt` with your actual domain
3. Configure HTTPS certificate if needed

## File Structure
```
dist/
├── index.html              # Homepage
├── 404.html               # Error page
├── robots.txt             # SEO robots file
├── sitemap.xml            # SEO sitemap
├── .htaccess              # Apache configuration (if needed)
├── _next/                 # Next.js assets
├── posts/                 # Individual post pages
│   ├── [slug]/
│   │   └── index.html
│   └── index.html         # Posts listing
├── about/
│   └── index.html         # About page
├── categories/
│   └── index.html         # Categories page
└── tags/
    └── index.html         # Tags page
```

## Performance Features
✅ Static generation for all pages  
✅ Optimized bundle splitting  
✅ GSAP animations with GPU acceleration  
✅ Responsive images  
✅ SEO-optimized meta tags  
✅ Gzip compression configured  
✅ Cache headers for assets  

## Bundle Analysis
- **Initial Load**: ~105 kB gzipped
- **Page Size**: 176 B - 2.7 kB per page
- **Total Pages**: 18 static pages generated
- **Assets**: Optimized CSS and JS chunks

## SEO Configuration
- ✅ `robots.txt` with proper directives
- ✅ `sitemap.xml` with all pages and posts
- ✅ Meta tags for social sharing
- ✅ Structured data ready
- ✅ Clean URLs with trailing slashes

## Security Headers
The `.htaccess` file includes:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

## Monitoring
After deployment, verify:
1. All pages load correctly
2. Navigation works properly
3. Images and assets load
4. GSAP animations work
5. Mobile responsiveness
6. SEO meta tags are present

## Troubleshooting
- **404 errors**: Ensure index.html is set as default document
- **Missing assets**: Check if all files uploaded correctly
- **Routing issues**: Verify .htaccess rules are applied
- **Slow loading**: Enable Yandex CDN for better performance

## Update Process
For future updates:
1. Run `npm run deploy`
2. Sync new files: `aws s3 sync ./dist s3://your-bucket-name --profile yandex --delete`
3. Clear CDN cache if using Yandex CDN

## Domain Configuration
Update these files with your actual domain:
- `public/robots.txt` - Replace "your-domain.com"
- `public/sitemap.xml` - Replace "your-domain.com" 
- Social media meta tags in layout components 