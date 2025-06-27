# 🚀 GitHub Pages Deployment Guide

## Quick Setup

This app is configured for seamless GitHub Pages deployment with perfect Lighthouse scores maintained in production.

### 1. Repository Setup

1. **Fork or clone** this repository
2. **Enable GitHub Pages** in Settings → Pages
3. **Set source** to "GitHub Actions"
4. **Update base path** if your repository name differs from `translate-pwa`

### 2. Configuration

The app automatically detects GitHub Pages deployment via the `GITHUB_PAGES` environment variable:

```typescript
// vite.config.ts
base: isGitHubPages ? '/translate-pwa/' : '/',
```

### 3. Deployment Methods

#### Automatic (Recommended)
```bash
# Push to main branch triggers GitHub Actions
git push origin main
```

#### Manual
```bash
# Build for GitHub Pages
npm run build:github

# Deploy using gh-pages
npm run deploy
```

## Features

### 🎯 SPA Routing Support
- **404.html fallback** handles client-side routing
- **History API** support for clean URLs
- **Route preservation** during page refresh

### ⚡ Performance Optimized
- **Base path handling** for GitHub Pages subdirectory
- **Chunk splitting** maintained for optimal caching
- **Asset optimization** with proper relative paths

### 🔒 Security Headers
- **CSP implementation** adapted for GitHub Pages
- **Security headers** via `_headers` file (if supported)
- **HTTPS enforcement** in production

## Live Deployment

Once deployed, your app will be available at:
```
https://username.github.io/translate-pwa/
```

### Route Examples
- `/` → Homepage (redirects to intake)
- `/intake` → Data collection interface
- `/phrases` → Categorized phrase library
- `/settings` → User preferences

## Lighthouse CI Integration

The deployment includes automatic Lighthouse testing:

1. **Build and deploy** the app
2. **Wait for deployment** to be ready
3. **Run Lighthouse CI** against live site
4. **Upload results** as GitHub artifacts

### Production Thresholds
- **Performance**: 98/100 (slightly relaxed for GitHub Pages)
- **Accessibility**: 100/100 (Section 508 compliance)
- **Best Practices**: 95/100 (security standards)
- **SEO**: 100/100 (search optimization)

## Troubleshooting

### Base Path Issues
If routes don't work, check the repository name in `vite.config.ts`:
```typescript
base: isGitHubPages ? '/your-actual-repo-name/' : '/',
```

### 404 Errors
The `404.html` file handles SPA routing. Ensure it's deployed with your app.

### Lighthouse Scores
Update URLs in `lighthouserc.production.cjs` to match your GitHub Pages URL.

## Government Compliance

The deployed app maintains:
- ✅ **Section 508** accessibility standards
- ✅ **HTTPS-only** communication
- ✅ **Zero vulnerabilities** in production
- ✅ **Perfect accessibility** scores
- ✅ **Optimized performance** for government networks

---

*Ready for production deployment with government-grade security and accessibility.*
