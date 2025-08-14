import { MetadataRoute } from 'next'

export const dynamic = 'force-static'

// Импортируем конфигурацию из локального файла
const siteConfig = require('../site.config.js')
const baseUrl = siteConfig.baseUrl

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: [
          '/',
          '/posts/',
          '/projects/',
          '/support/',
        ],
        disallow: [
          '/admin/',
          '/_next/',
          '/api/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
} 