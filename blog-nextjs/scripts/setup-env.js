const fs = require('fs')
const path = require('path')

// Путь к конфигурационному файлу
const configPath = path.join(process.cwd(), 'src', 'site.config.js')

console.log('🔧 Настройка домена сайта')
console.log('')

// Проверяем существует ли конфиг
if (fs.existsSync(configPath)) {
  console.log('✅ src/site.config.js уже существует')
  
  // Читаем текущий конфиг
  const config = require(configPath)
  console.log(`📍 Текущий домен: ${config.baseUrl}`)
  
  if (config.baseUrl === 'https://your-domain.com') {
    console.log('⚠️  Используется домен по умолчанию')
    console.log('')
    console.log('📝 Для установки вашего домена:')
    console.log('1. Откройте файл src/site.config.js')
    console.log('2. Измените baseUrl на ваш домен')
    console.log('3. Запустите npm run build')
  } else {
    console.log('✅ Домен настроен!')
  }
} else {
  console.log('❌ src/site.config.js не найден')
  console.log('Создайте файл src/site.config.js в папке src/')
}

console.log('')
console.log('📋 Примеры настройки в src/site.config.js:')
console.log('  baseUrl: "https://yapetrichka.com"             // Production')
console.log('  baseUrl: "https://yapetrichka-blog.web.app"    // Firebase preview')
console.log('  baseUrl: "http://localhost:3000"               // Development')
console.log('')
console.log('🚀 После изменения домена запустите: npm run build') 