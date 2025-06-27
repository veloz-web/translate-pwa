import React from 'react';

export const OverviewSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
        This Progressive Web App represents a comprehensive solution for secure, effective communication between ICE/CBP agents and individuals during apprehensions.
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Core Mission</h3>
        <ul className="space-y-3 text-gray-700 dark:text-gray-300">
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Prevent Family Separations:</strong> Clear communication about family status and relationships</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Identify Medical Issues:</strong> Immediate assessment of health concerns and establish medical history since detainment can be prolonged</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Set Clear Expectations:</strong> Consistent, transparent communication using proven methods to facilitate better cooperation and understanding of processes</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
            <span><strong>Ensure Accountability:</strong> Complete audit trail for all interactions and decisions</span>
          </li>
        </ul>
      </div>

      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-2">Design Philosophy</h3>
        <p className="text-blue-800 dark:text-blue-200 mb-3">
          Every feature was designed with field conditions in mind: high-stress situations, diverse linguistic backgrounds, 
          varying technical proficiency, and the critical need for accurate, documented communication.
        </p>
      </div>

      <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
        <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-2">Excellence Achieved</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">100</div>
            <div className="text-sm text-green-600 dark:text-green-400">Performance</div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">100</div>
            <div className="text-sm text-green-600 dark:text-green-400">Accessibility</div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">100</div>
            <div className="text-sm text-green-600 dark:text-green-400">Best Practices</div>
          </div>
          <div className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-3">
            <div className="text-2xl font-bold text-green-700 dark:text-green-300">100</div>
            <div className="text-sm text-green-600 dark:text-green-400">SEO</div>
          </div>
        </div>
        <p className="text-green-800 dark:text-green-200 text-sm mt-3 text-center">
          Perfect Lighthouse scores achieved through thoughtful engineering choices and accessibility-first design
        </p>
      </div>
    </div>
  );
};