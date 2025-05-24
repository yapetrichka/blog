---
title: Automating publishing Unity packages to npm registry
date: '2023-10-22'
tags:
  - unity
  - unity-packages
  - workflow
  - ci
  - npm
  - npmjs
excerpt: "\U0001F3AF Why npmjs registry?\r\n\r\n<ul>\r\n  <li>Ready up to open source projects</li>\r\n  <li>In-box GitHub Actions solution</li>\r\n  <li>CLI support</li>\r\n</ul>\r\n\r\n1. Generate Access Token in npmjs registry..."
---

# 🎯 Why npmjs registry?

<ul>
  <li>Ready up to open source projects</li>
  <li>In-box GitHub Actions solution</li>
  <li>CLI support</li>
</ul>

1. Generate `Access Token` in npmjs registry
![](/assets/img/posts/GljgtqpFeo.png)

2. Select `Access Token` type
![](/assets/img/posts/chrome_Y6Piz4Q7sd.png)

3. Add npm `Access Token` to GitHub repository secrets
![](/assets/img/posts/GMQSbVozZV.png)

4. Config GitHub workflow using a `yml` template as follows

```yaml
name: npm

on:
  release:
    types: [published]

jobs:
  publish-npm:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      packages: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v3
        with:
          node-version: '20.x'
          registry-url: https://registry.npmjs.org
      - run: npm install --package-lock-only
      - run: npm ci
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
          GITHUB_TOKEN: ${{secrets.GITHUB_TOKEN}}
```

### 🎉 Now GitHub Actions  will automatically upload package to npmjs registry
![](/assets/img/posts/chrome_lhfCawA1bC.png)

# 🎁 Sample project

[Unity AutoKeystore](https://github.com/dreamcodestudio/com.dreamcode.mobile.android-keystore)
