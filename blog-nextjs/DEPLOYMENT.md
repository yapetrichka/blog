# 🚀 Деплой блога

Сайт хостится на **Firebase Hosting** — проект `game-aim-converter`, отдельный сайт `yapetrichka-blog`, кастомный домен **https://yapetrichka.com**.

## Деплой одной командой

```bash
cd blog-nextjs
npm run deploy
```

Команда выполняет `next build` (статический экспорт в `dist/`) и `firebase deploy --only hosting:blog`.

## Пошагово

```bash
npm install                            # если зависимости ещё не установлены
npm run build                          # статический экспорт в dist/
npm run preview                        # локальная проверка сборки (npx serve dist)
firebase deploy --only hosting:blog    # выкладка
```

Требуется авторизация Firebase CLI: `firebase login`. CLI ставится глобально (`npm i -g firebase-tools`), в зависимостях проекта его нет.

## Конфигурация

- `next.config.js` — `output: 'export'`, `trailingSlash: true`, `distDir: 'dist'`, `images.unoptimized: true`, без `basePath`
- `firebase.json` — `target: "blog"`, `public: "dist"`, `cleanUrls: true`, `trailingSlash: true`, immutable-кэш на `/_next/static/**`
- `.firebaserc` — проект `game-aim-converter`, target `blog` → сайт `yapetrichka-blog`
- `src/site.config.js` — `baseUrl`, единственный источник домена для `sitemap.xml`, `robots.txt` и Open Graph (`src/app/layout.tsx` читает его же)

⚠️ В проекте `game-aim-converter` два hosting-сайта: `game-aim-converter` (лендинг aimconverter.app) и `yapetrichka-blog` (этот блог). Поэтому деплой всегда с явным таргетом — `--only hosting:blog`. Без таргета можно перезаписать лендинг.

## Смена домена

1. Поменять `baseUrl` в `src/site.config.js` — sitemap, robots и og:url подтянутся автоматически.
2. Firebase Console → Hosting → сайт `yapetrichka-blog` → Add custom domain, прописать выданные A-записи у регистратора.
3. Пересобрать и задеплоить.

## Проверка после деплоя

- [ ] https://yapetrichka.com/ открывается (200 OK), HTTPS валиден
- [ ] https://www.yapetrichka.com/ редиректит на apex
- [ ] `/posts/`, `/projects/`, `/support/` открываются
- [ ] пост со слагом с пробелом открывается (`/posts/2023-01-29-Unity%20AutoKeystore/`)
- [ ] `/sitemap.xml` и `/robots.txt` содержат актуальный домен
- [ ] несуществующий URL отдаёт 404-страницу
- [ ] CSS/GSAP-анимации работают, мобильная вёрстка в порядке

Быстрый прогон:

```bash
for u in / /posts/ /projects/ /support/ /sitemap.xml /robots.txt; do
  curl -s -o /dev/null -w "%{http_code} $u\n" "https://yapetrichka.com$u"
done
```

## Структура сборки

```
dist/
├── index.html          # главная
├── 404.html            # страница ошибки (Firebase подхватывает автоматически)
├── robots.txt
├── sitemap.xml
├── _next/              # ассеты Next.js (хэшированные, immutable-кэш)
├── assets/             # картинки постов
├── posts/
│   ├── <slug>/index.html
│   └── index.html
├── projects/index.html
└── support/index.html
```

## История

До августа 2026 сайт формально числился на Yandex Object Storage (`aws s3 sync ./dist s3://...`), домен был `www.dream-code-studio.com`. Схема больше не используется — редиректы со старого домена не настраивались.
