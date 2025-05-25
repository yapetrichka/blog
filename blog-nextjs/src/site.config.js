/**
 * Конфигурация сайта
 * Измените baseUrl на ваш домен
 */
const siteConfig = {
  // Основной URL сайта
  baseUrl: 'https://www.dream-code-studio.com',
  
  // Альтернативные настройки для разных окружений:
  // baseUrl: 'https://your-domain.com',               // Default
  // baseUrl: 'https://staging.dreamcodestudio.com',   // Staging  
  // baseUrl: 'http://localhost:3000',                 // Development
  
  // Дополнительная информация о сайте
  siteName: 'Dream Code Studio',
  description: 'Unity and .NET development blog with modern animations',
  author: 'dreamcodestudio',
  
  // Social media links
  social: {
    github: 'https://github.com/dreamcodestudio',
    email: 'dreamcodestudio@yandex.com',
    tiktok: 'https://www.tiktok.com/@dreamcodestudio',
    youtube: 'https://www.youtube.com/@dreamcodestudio'
  },

  // Boosty configuration for sponsor button
  boosty: {
    // Replace with your real Boosty username
    username: 'dreamcodestudio',
    // URL for donations - direct link to donate page
    donateUrl: 'https://boosty.to/dreamcodestudio/donate',
    // Whether to display sponsor button
    enabled: true,
    // Button text
    texts: {
      sponsor: '❤️ Support Me'
    }
  }
}

module.exports = siteConfig 