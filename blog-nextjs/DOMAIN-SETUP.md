# Настройка автоматической генерации Sitemap.xml и Robots.txt

## 🎯 Проблема решена!

Теперь `sitemap.xml` и `robots.txt` **автоматически генерируются** с правильным доменом при каждой сборке!

## 🔧 Как это работает

### Автоматическая генерация:
- ✅ `src/app/sitemap.ts` - генерирует sitemap.xml
- ✅ `src/app/robots.ts` - генерирует robots.txt  
- ✅ Использует локальный конфигурационный файл `src/site.config.js`
- ✅ Автоматически добавляет все посты блога
- ✅ Обновляет даты изменения файлов

### Удалены статические файлы:
- ❌ `public/sitemap.xml` (удален)
- ❌ `public/robots.txt` (удален)

## 🚀 Настройка

### 1. Откройте конфигурационный файл:
Отредактируйте файл `src/site.config.js`:

```javascript
const siteConfig = {
  // Измените на ваш домен
  baseUrl: 'https://yapetrichka.com',

  siteName: 'Yaroslav Petrichka',
  description: 'Unity and mobile development blog',
  author: 'Yaroslav Petrichka'
}
```

### 2. Соберите проект:
```bash
npm run build
```

### 3. Проверьте результат:
- `dist/sitemap.xml` - содержит ваш домен
- `dist/robots.txt` - содержит ваш домен

## 📋 Примеры конфигурации

### Production:
```javascript
const siteConfig = {
  baseUrl: 'https://yapetrichka.com',
  // ...остальная конфигурация
}
```

### Firebase preview URL:
```javascript
const siteConfig = {
  baseUrl: 'https://yapetrichka-blog.web.app',
  // ...остальная конфигурация  
}
```

### Development:
```javascript
const siteConfig = {
  baseUrl: 'http://localhost:3000',
  // ...остальная конфигурация
}
```

## 🔧 Проверка настройки

Запустите команду для проверки текущего домена:
```bash
npm run setup
```

Вывод покажет:
- ✅ Текущий настроенный домен
- ⚠️ Предупреждение если используется домен по умолчанию
- 📝 Инструкции по настройке

## 📊 Что генерируется

### Sitemap.xml включает:
- ✅ Главная страница (приоритет 1.0)
- ✅ Страница постов (приоритет 0.9)
- ✅ Страница проектов (приоритет 0.8)
- ✅ Страница поддержки (приоритет 0.8)
- ✅ Страница тегов (приоритет 0.7)
- ✅ Все посты блога (приоритет 0.8)
- ✅ Правильные даты последнего изменения

### Robots.txt включает:
- ✅ Разрешения для всех ботов
- ✅ Блокировка административных путей
- ✅ Ссылка на sitemap.xml с правильным доменом

## ✨ Преимущества

### Больше не нужно:
- ❌ Вручную редактировать sitemap.xml после каждой сборки
- ❌ Менять домен в robots.txt
- ❌ Добавлять новые посты в sitemap
- ❌ Настраивать переменные окружения

### Автоматически:
- ✅ Все новые посты добавляются в sitemap
- ✅ Правильный домен во всех файлах
- ✅ Актуальные даты изменения
- ✅ SEO-оптимизированная структура
- ✅ Простая настройка через локальный файл

## 🔄 Workflow

```mermaid
graph LR
    A[Изменить src/site.config.js] --> B[npm run build]
    B --> C[Next.js читает конфиг]
    C --> D[Генерирует sitemap.xml]
    D --> E[Генерирует robots.txt]
    E --> F[Файлы в dist/ с правильным доменом]
    F --> G[Готово к деплою!]
```

## 🎛️ Структура конфигурации

```javascript
// src/site.config.js
const siteConfig = {
  baseUrl: 'https://your-domain.com',      // Основной URL
  siteName: 'Dream Code Studio',           // Название сайта
  description: 'Blog description...',      // Описание
  author: 'dreamcodestudio'               // Автор
}

module.exports = siteConfig
```

**Результат**: Полностью автоматизированная генерация SEO файлов с простой настройкой через локальный конфиг! 🎉 