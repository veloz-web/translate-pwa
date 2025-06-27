#!/usr/bin/env node

/**
 * Simple Lighthouse test for one route to verify setup
 */

import lighthouse from 'lighthouse';
import * as chromeLauncher from 'chrome-launcher';

async function runLighthouseTest() {
  console.log('🚀 Testing Lighthouse setup with one route...\n');
  
  // Launch Chrome
  const chrome = await chromeLauncher.launch({
    chromeFlags: ['--headless', '--no-sandbox', '--disable-dev-shm-usage']
  });
  
  try {
    // Run Lighthouse on the intake page (assuming dev server is running)
    const options = {
      logLevel: 'info',
      output: 'json',
      onlyCategories: ['performance', 'accessibility', 'best-practices', 'seo'],
      port: chrome.port,
    };
    
    const runnerResult = await lighthouse('http://localhost:4175/intake', options);
    
    // Parse results
    const report = runnerResult.lhr;
    const scores = {
      performance: Math.round(report.categories.performance.score * 100),
      accessibility: Math.round(report.categories.accessibility.score * 100),
      'best-practices': Math.round(report.categories['best-practices'].score * 100),
      seo: Math.round(report.categories.seo.score * 100),
    };
    
    console.log('📊 Lighthouse Scores for /intake:');
    console.log(`Performance: ${scores.performance}/100`);
    console.log(`Accessibility: ${scores.accessibility}/100`);
    console.log(`Best Practices: ${scores['best-practices']}/100`);
    console.log(`SEO: ${scores.seo}/100\n`);
    
    // Check if we meet our targets
    const targets = { performance: 95, accessibility: 100, 'best-practices': 95, seo: 100 };
    let allPassed = true;
    
    for (const [category, score] of Object.entries(scores)) {
      const target = targets[category];
      const passed = score >= target;
      if (!passed) allPassed = false;
      
      console.log(`${passed ? '✅' : '❌'} ${category}: ${score}/${target}`);
    }
    
    console.log(`\n${allPassed ? '🎉 All targets met!' : '⚠️  Some targets not met'}`);
    
  } finally {
    await chrome.kill();
  }
}

// Only run if this is the main module
if (import.meta.url === `file://${process.argv[1]}`) {
  runLighthouseTest().catch(console.error);
}

export { runLighthouseTest };
