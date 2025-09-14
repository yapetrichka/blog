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
    github: 'https://github.com/yapetrichka',
    email: 'dreamcodestudio@yandex.com',
    telegram: 'https://t.me/yaroslav_petrichka',
    tiktok: 'https://www.tiktok.com/@yaroslav.petrichka',
    youtube: 'https://www.youtube.com/@yaroslav.petrichka'
  },

  boosty: {
    username: 'dreamcodestudio',
    donateUrl: 'https://nowpayments.io/donation/dreamcode',
    enabled: true,
    texts: {
      sponsor: 'Support Me'
    }
  }
}

module.exports = siteConfig 