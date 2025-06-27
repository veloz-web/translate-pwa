const config = {
  ci: {
    collect: {
      // URLs to test on GitHub Pages
      url: [
        'https://YOUR_USERNAME.github.io/translate-pwa/',
        'https://YOUR_USERNAME.github.io/translate-pwa/intake',
        'https://YOUR_USERNAME.github.io/translate-pwa/phrases',
        'https://YOUR_USERNAME.github.io/translate-pwa/translation',
        'https://YOUR_USERNAME.github.io/translate-pwa/record',
        'https://YOUR_USERNAME.github.io/translate-pwa/conversations',
        'https://YOUR_USERNAME.github.io/translate-pwa/settings',
      ],
      
      // Number of runs per URL for more reliable results
      numberOfRuns: 3,
      
      // Lighthouse settings for production
      settings: {
        preset: 'desktop',
        chromeFlags: [
          '--headless',
          '--no-sandbox',
          '--disable-dev-shm-usage',
          '--disable-gpu',
          '--disable-extensions',
        ],
      },
    },
    
    assert: {
      // Perfect scores required for production
      assertions: {
        'categories:performance': ['error', { minScore: 0.98 }], // Slightly relaxed for GitHub Pages
        'categories:accessibility': ['error', { minScore: 1.0 }],
        'categories:best-practices': ['error', { minScore: 0.95 }],
        'categories:seo': ['error', { minScore: 1.0 }],
        'categories:pwa': ['error', { minScore: 0.9 }],
        
        // Critical accessibility requirements
        'audits:color-contrast': 'error',
        'audits:heading-order': 'error',
        'audits:aria-allowed-attr': 'error',
        'audits:aria-required-attr': 'error',
        'audits:aria-valid-attr-value': 'error',
        'audits:button-name': 'error',
        'audits:form-field-multiple-labels': 'error',
        'audits:label': 'error',
        
        // Security/Best practices
        'audits:is-on-https': 'error', // GitHub Pages uses HTTPS
        'audits:no-vulnerable-libraries': 'error',
      },
    },
    
    upload: {
      target: 'filesystem',
      outputDir: './lighthouse-results',
    },
  },
};

module.exports = config;
