// 02-practical.js

// Day 8: Practical Application - A Simple Configuration Manager

/**
 * A simple configuration manager to handle application settings.
 * It allows setting, getting, and resetting configurations,
 * and merging new settings with defaults.
 */
const configManager = (function() {
  let _currentConfig = {};
  const _defaultConfig = {
    appName: 'MyAwesomeApp',
    version: '1.0.0',
    theme: 'dark',
    logLevel: 'info',
    apiEndpoint: 'https://api.example.com',
    features: {
      darkMode: true,
      notifications: true,
      analytics: false
    }
  };

  // Initialize with default config
  _currentConfig = { ..._defaultConfig };

  /**
   * Gets a configuration value by key.
   * @param {string} key - The configuration key (can be dot-separated for nested access).
   * @returns {*} The configuration value, or undefined if not found.
   */
  function get(key) {
    // Simple deep access for nested objects
    const keys = key.split('.');
    let value = _currentConfig;
    for (const k of keys) {
      if (typeof value === 'object' && value !== null && value.hasOwnProperty(k)) {
        value = value[k];
      } else {
        return undefined; // Key not found at this level
      }
    }
    return value;
  }

  /**
   * Sets a configuration value for a given key.
   * This performs a shallow merge for top-level keys.
   * For nested objects, it replaces the object.
   * @param {string} key - The configuration key.
   * @param {*} value - The value to set.
   */
  function set(key, value) {
    // Basic shallow set for top-level keys
    // For deep setting, a more complex utility function would be needed
    _currentConfig[key] = value;
  }

  /**
   * Updates the current configuration by merging new settings.
   * New settings will override existing ones.
   * @param {object} newSettings - An object containing new configuration values.
   */
  function update(newSettings) {
    // Use spread syntax for a shallow merge
    _currentConfig = { ..._currentConfig, ...newSettings };
    // For deep merge, a recursive function would be needed
  }

  /**
   * Resets the configuration to its initial default state.
   */
  function reset() {
    _currentConfig = { ..._defaultConfig };
  }

  /**
   * Returns a copy of the entire current configuration.
   * @returns {object} A copy of the current configuration.
   */
  function getAll() {
    // Return a deep copy to prevent external modification
    return JSON.parse(JSON.stringify(_currentConfig));
  }

  return {
    get,
    set,
    update,
    reset,
    getAll
  };
})();

// Example usage (uncomment to run in a browser console or Node.js):
// console.log('Initial app name:', configManager.get('appName'));
// console.log('Initial theme:', configManager.get('theme'));
// console.log('Initial notifications feature:', configManager.get('features.notifications'));

// configManager.set('theme', 'light');
// configManager.set('logLevel', 'debug');
// configManager.set('features', { darkMode: false, notifications: true, analytics: true }); // Overwrites features object

// console.log('Updated theme:', configManager.get('theme'));
// console.log('Updated log level:', configManager.get('logLevel'));
// console.log('Updated features:', configManager.get('features'));
// console.log('Updated darkMode feature (nested):', configManager.get('features.darkMode'));

// configManager.update({
//   appName: 'MyProApp',
//   apiEndpoint: 'https://pro.example.com',
//   logLevel: 'verbose' // This will override 'debug'
// });

// console.log('App name after update:', configManager.get('appName'));
// console.log('API endpoint after update:', configManager.get('apiEndpoint'));
// console.log('Log level after update:', configManager.get('logLevel'));

// configManager.reset();
// console.log('App name after reset:', configManager.get('appName')); // Should be default again
// console.log('All config after reset:', configManager.getAll());
