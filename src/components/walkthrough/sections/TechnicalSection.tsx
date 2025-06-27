import React from 'react';

export const TechnicalSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Built with modern web standards, progressive enhancement, and performance optimization for field conditions.
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Architecture Decisions</h3>
        
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100">Progressive Web App (PWA)</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
              Installable on mobile devices, works offline, and provides native app-like experience 
              without app store dependencies. Enhanced manifest with maskable icons and screenshots.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-900 dark:text-green-100">Vite 7.0 + Standard React Plugin</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
              Switched from SWC to standard React plugin for better stability and eliminated preamble issues. 
              Optimized chunk splitting for vendor, router, icons, and store for maximum caching efficiency.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100">Local-First Data + Zero External Dependencies</h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm mt-1">
              Conversation history and settings stored locally for privacy and offline access. 
              No external CDNs or third-party services - everything runs locally for maximum security.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Performance Optimizations</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Lighthouse 100s Optimizations</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• <strong>Aggressive chunk splitting</strong> - vendor/router/icons/store</li>
              <li>• <strong>Console.log removal</strong> in production builds</li>
              <li>• <strong>Terser optimization</strong> with multiple compression passes</li>
              <li>• <strong>Modern ES2020 targeting</strong> for optimal performance</li>
              <li>• <strong>Pre-bundled dependencies</strong> for faster loading</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-2">Bundle Analysis Results</h4>
            <ul className="space-y-1 text-gray-700 dark:text-gray-300">
              <li>• vendor-[hash].js: 139KB (45KB gzipped)</li>
              <li>• index-[hash].js: 131KB (25KB gzipped)</li>
              <li>• router-[hash].js: 22KB (8KB gzipped)</li>
              <li>• icons-[hash].js: 7KB (3KB gzipped)</li>
              <li>• store-[hash].js: 0.6KB (0.4KB gzipped)</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-3">Automated Quality Assurance</h3>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100">Comprehensive Route Testing</h4>
            <p className="text-blue-800 dark:text-blue-200 text-sm mt-1">
              Lighthouse CI tests all 7 routes (/, /intake, /phrases, /translation, /record, /conversations, /settings) 
              with strict thresholds: 100% accessibility, 95%+ performance, 100% SEO compliance.
            </p>
          </div>
          
          <div className="border-l-4 border-green-500 pl-4">
            <h4 className="font-semibold text-green-900 dark:text-green-100">Government Compliance Validation</h4>
            <p className="text-green-800 dark:text-green-200 text-sm mt-1">
              Automated Section 508 testing ensures accessibility compliance. Every form control, color contrast, 
              and ARIA implementation is validated against federal standards on every deployment.
            </p>
          </div>
          
          <div className="border-l-4 border-purple-500 pl-4">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100">CI/CD Integration</h4>
            <p className="text-purple-800 dark:text-purple-200 text-sm mt-1">
              GitHub Actions workflow prevents regressions by blocking deployments that don't meet quality gates. 
              Perfect scores are maintained automatically through thoughtful engineering choices.
            </p>
          </div>
          
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
            <div className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-2">Quality Validation Commands:</div>
            <div className="space-y-1 text-xs font-mono">
              <div><span className="text-blue-600 dark:text-blue-400">npm run lighthouse</span> <span className="text-gray-500">- Full audit with build</span></div>
              <div><span className="text-blue-600 dark:text-blue-400">npm run lighthouse:routes</span> <span className="text-gray-500">- Test all routes + summary</span></div>
              <div><span className="text-blue-600 dark:text-blue-400">npm run lighthouse:ci</span> <span className="text-gray-500">- CI/CD validation</span></div>
              <div><span className="text-blue-600 dark:text-blue-400">npm run lighthouse:test</span> <span className="text-gray-500">- Quick single-route test</span></div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-600">
              <div className="text-xs text-gray-600 dark:text-gray-400 mb-1">Key Validations:</div>
              <div className="grid grid-cols-2 gap-1 text-xs">
                <div>✅ Radio/checkbox semantics</div>
                <div>✅ ARIA label coverage</div>
                <div>✅ Color contrast ratios</div>
                <div>✅ Chunk splitting performance</div>
                <div>✅ Security header implementation</div>
                <div>✅ Zero vulnerability tolerance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};