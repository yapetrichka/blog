/**
 * Конфигурация сайта
 * Измените baseUrl на ваш домен
 */
const siteConfig = {
  // Основной URL сайта
  baseUrl: 'https://yapetrichka.com',

  // Альтернативные настройки для разных окружений:
  // baseUrl: 'https://yapetrichka.web.app',      // Firebase preview URL
  // baseUrl: 'http://localhost:3000',                 // Development
  
  // Дополнительная информация о сайте
  siteName: 'Yaroslav Petrichka',
  description: 'Unity and mobile development blog',
  author: 'Yaroslav Petrichka',
  
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
    enabled: false,
    texts: {
      sponsor: 'Support Me'
    }
  }
}

module.exports = siteConfig 