import React from 'react';
import { ArrowLeft, Monitor, Sun, Moon, Info, Smile, RotateCcw } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../store/appStore';
import { defaultSettings } from '../config/defaultSettings';

export const SettingsPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    theme, 
    setTheme, 
    showTips, 
    toggleTips, 
    showEmojis, 
    toggleEmojis, 
    resetDismissedTips,
    resetToDefaults
  } = useAppStore();

  const handleBack = () => {
    navigate(-1);
  };

  const themeOptions = [
    { value: 'system' as const, label: 'System', icon: Monitor, description: 'Follow device settings' },
    { value: 'light' as const, label: 'Light', icon: Sun, description: 'Always light theme' },
    { value: 'dark' as const, label: 'Dark', icon: Moon, description: 'Always dark theme' }
  ];

  const isUsingDefaults = 
    theme === defaultSettings.theme &&
    showTips === defaultSettings.showTips &&
    showEmojis === defaultSettings.showEmojis;

  return (
    <div className="flex flex-col h-full bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex-shrink-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              title="Go back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Settings</h2>
          </div>
          
          {!isUsingDefaults && (
            <button
              onClick={resetToDefaults}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500"
              title="Reset all settings to defaults"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto prevent-bounce">
        <div className="p-4 space-y-6">
          {/* Theme Selection */}
          <section>
            <fieldset>
              <legend className="text-lg font-medium text-gray-900 dark:text-white mb-4">Appearance</legend>
              <div className="space-y-3" role="radiogroup" aria-labelledby="theme-selection">
                {themeOptions.map((option) => {
                  const Icon = option.icon;
                  const inputId = `theme-${option.value}`;
                  return (
                    <div key={option.value} className="relative">
                      <input
                        type="radio"
                        id={inputId}
                        name="theme"
                        value={option.value}
                        checked={theme === option.value}
                        onChange={() => setTheme(option.value)}
                        className="sr-only"
                      />
                      <label
                        htmlFor={inputId}
                        className={`w-full flex items-center gap-4 p-4 rounded-lg border transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 ${
                          theme === option.value
                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300'
                            : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        <Icon className="w-5 h-5" aria-hidden="true" />
                        <div className="flex-1 text-left">
                          <div className="font-medium">{option.label}</div>
                          <div className="text-sm opacity-75">{option.description}</div>
                        </div>
                        {theme === option.value && (
                          <div className="w-3 h-3 bg-blue-500 rounded-full" aria-hidden="true"></div>
                        )}
                      </label>
                    </div>
                  );
                })}
              </div>
            </fieldset>
          </section>

          {/* Interface Options */}
          <section>
            <fieldset>
              <legend className="text-lg font-medium text-gray-900 dark:text-white mb-4">Interface</legend>
              <div className="space-y-3">
                {/* Emoji Setting */}
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Smile className="w-5 h-5 text-yellow-500" aria-hidden="true" />
                    <div>
                      <label htmlFor="emoji-toggle" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                        Show Emojis
                      </label>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Display emojis in headings and categories</div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="emoji-toggle"
                      checked={showEmojis}
                      onChange={toggleEmojis}
                      className="sr-only"
                    />
                    <label
                      htmlFor="emoji-toggle"
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
                        showEmojis ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                      aria-label={`${showEmojis ? 'Disable' : 'Enable'} emoji display`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showEmojis ? 'translate-x-6' : 'translate-x-1'
                        }`}
                        aria-hidden="true"
                      />
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </section>

          {/* Officer Training Mode */}
          <section>
            <fieldset>
              <legend className="text-lg font-medium text-gray-900 dark:text-white mb-4">Training</legend>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-center gap-3">
                    <Info className="w-5 h-5 text-blue-500" aria-hidden="true" />
                    <div>
                      <label htmlFor="tips-toggle" className="font-medium text-gray-900 dark:text-white cursor-pointer">
                        Officer Training Mode
                      </label>
                      <div className="text-sm text-gray-600 dark:text-gray-400">Show helpful tips and guidance</div>
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="tips-toggle"
                      checked={showTips}
                      onChange={toggleTips}
                      className="sr-only"
                    />
                    <label
                      htmlFor="tips-toggle"
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors cursor-pointer focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 ${
                        showTips ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-700'
                      }`}
                      aria-label={`${showTips ? 'Disable' : 'Enable'} officer training mode`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          showTips ? 'translate-x-6' : 'translate-x-1'
                        }`}
                        aria-hidden="true"
                      />
                    </label>
                  </div>
                </div>

                {showTips && (
                  <button
                    onClick={resetDismissedTips}
                    className="w-full p-4 text-left bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <div className="font-medium text-blue-700 dark:text-blue-300">Reset Dismissed Tips</div>
                    <div className="text-sm text-blue-600 dark:text-blue-400">Show all tips that were previously dismissed</div>
                  </button>
                )}
              </div>
            </fieldset>
          </section>

          {/* Default Settings Info */}
          <section>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Default Configuration</h3>
            <div className="p-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                <div><strong className="text-gray-900 dark:text-white">Professional Mode:</strong> Tips and emojis disabled by default</div>
                <div><strong className="text-gray-900 dark:text-white">System Theme:</strong> Automatically follows device preference</div>
                <div><strong className="text-gray-900 dark:text-white">Local Storage:</strong> Settings persist across sessions</div>
                <div className="pt-2 text-xs opacity-75">
                  Settings are stored locally on your device and merged with secure defaults.
                </div>
              </div>
            </div>
          </section>

          {/* App Information */}
          <section>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">About</h3>
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="text-gray-600 dark:text-gray-400 space-y-2">
                <div><strong className="text-gray-900 dark:text-white">ICE/CBP Translation Tool</strong></div>
                <div>Version 1.0.0</div>
                <div>Secure communication for law enforcement</div>
                <div className="pt-2 text-sm">
                  Designed for field use with offline capabilities, comprehensive audit trails, and accessibility features.
                </div>
              </div>
            </div>
          </section>

          {/* Additional spacing for safe area */}
          <div className="h-4"></div>
        </div>
      </div>
    </div>
  );
};