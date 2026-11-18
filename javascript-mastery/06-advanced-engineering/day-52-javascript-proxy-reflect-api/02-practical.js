// Day 52: Practical Proxy for validation and default values
// Date: 2026-11-18

/**
 * Creates a validated settings object using Proxy.
 * Ensures properties are of correct type and provides default values.
 */
function createValidatedSettings(initialSettings = {}) {
  const defaultSettings = {
    theme: 'dark',
    fontSize: 16,
    notifications: true
  };

  const settings = { ...defaultSettings, ...initialSettings };

  const settingsHandler = {
    get(target, prop, receiver) {
      // Return default if property doesn't exist in target, otherwise actual value
      if (!Reflect.has(target, prop)) {
        console.warn(`Attempted to access unknown setting '${String(prop)}'. Returning default if available.`);
        return defaultSettings[prop]; // Provide default for unknown properties
      }
      return Reflect.get(target, prop, receiver);
    },
    set(target, prop, value, receiver) {
      // Basic type validation
      if (prop === 'fontSize' && typeof value !== 'number') {
        throw new TypeError('fontSize must be a number.');
      }
      if (prop === 'theme' && !['dark', 'light', 'system'].includes(value)) {
        throw new Error('theme must be "dark", "light", or "system".');
      }
      if (prop === 'notifications' && typeof value !== 'boolean') {
        throw new TypeError('notifications must be a boolean.');
      }

      // Allow setting new properties, but log a warning if not in default
      if (!Reflect.has(target, prop) && !Reflect.has(defaultSettings, prop)) {
        console.warn(`Setting new property '${String(prop)}' not in default settings.`);
      }

      return Reflect.set(target, prop, value, receiver);
    },
    // Prevent deletion of default properties
    deleteProperty(target, prop) {
      if (Reflect.has(defaultSettings, prop)) {
        throw new Error(`Cannot delete default setting '${String(prop)}'.`);
      }
      return Reflect.deleteProperty(target, prop);
    }
  };

  return new Proxy(settings, settingsHandler);
}

// Export for testing in Node.js environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = createValidatedSettings;
}