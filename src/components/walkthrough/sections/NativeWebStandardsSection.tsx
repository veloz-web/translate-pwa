import React from 'react';

export const NativeWebStandardsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        Leveraging native HTML features and web standards for better performance, reliability, and accessibility.
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Native HTML Patterns</h3>
        
        <div className="space-y-4">
          <div className="bg-green-50 dark:bg-green-900/20 p-4 rounded-lg border border-green-200 dark:border-green-800">
            <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Accordion Pattern with details/summary</h4>
            <ul className="space-y-1 text-green-800 dark:text-green-200 text-sm">
              <li>• Uses HTML `name="accordion"` attribute for automatic exclusivity</li>
              <li>• Only one section open at a time without JavaScript</li>
              <li>• Eliminates complex state management and recursive toggling</li>
              <li>• Better performance and reliability than custom solutions</li>
            </ul>
          </div>

          <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg border border-orange-200 dark:border-orange-800">
            <h4 className="font-semibold text-orange-900 dark:text-orange-100 mb-2">Radio Buttons for State Management</h4>
            <ul className="space-y-1 text-orange-800 dark:text-orange-200 text-sm">
              <li>• Theme selection uses radio inputs - browser natively tracks checked state</li>
              <li>• No custom JavaScript state management needed for selection</li>
              <li>• Similar to details/summary pattern - native HTML handles the complexity</li>
              <li>• Accessible by default with fieldset/legend grouping</li>
              <li>• Screen readers understand radio groups automatically</li>
            </ul>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-200 dark:border-purple-800">
            <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Checkbox Toggles for Binary State</h4>
            <ul className="space-y-1 text-purple-800 dark:text-purple-200 text-sm">
              <li>• Settings toggles use hidden checkboxes with styled labels</li>
              <li>• Native checked/unchecked state without button click handlers</li>
              <li>• Proper form semantics for assistive technology</li>
              <li>• Toggle switches are just visual - checkboxes provide the functionality</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-200 dark:border-blue-800">
            <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Robust Routing Strategy</h4>
            <ul className="space-y-1 text-blue-800 dark:text-blue-200 text-sm">
              <li>• Catch-all route prevents app crashes from invalid URLs</li>
              <li>• Graceful fallback to intake page for deep links</li>
              <li>• Supports sharing and bookmarking of specific routes</li>
              <li>• Maintains app functionality regardless of entry point</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Custom Scrollbar Integration</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong className="text-gray-800 dark:text-gray-200">Native App Feel:</strong>
              <span className="text-gray-700 dark:text-gray-300"> Scrollbars hidden when not actively scrolling</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong className="text-gray-800 dark:text-gray-200">Theme Integration:</strong>
              <span className="text-gray-700 dark:text-gray-300"> Styled scrollbars adapt to light/dark themes</span>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
            <div>
              <strong className="text-gray-800 dark:text-gray-200">Cross-Browser Support:</strong>
              <span className="text-gray-700 dark:text-gray-300"> WebKit and Firefox scrollbar styling</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};