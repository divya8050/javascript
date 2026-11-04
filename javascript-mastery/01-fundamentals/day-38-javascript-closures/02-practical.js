// A practical application of closures: a configurable logging utility.
// The logger instance remembers its configured minimum log level.

function createLogger(minLevel = 'info') {
  const levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3
  };

  // Convert minLevel string to its numeric value for comparison
  const currentLevelValue = levels[minLevel.toLowerCase()] || levels.info;

  // The returned object's methods close over `currentLevelValue` and `levels`
  return {
    log: function(level, message) {
      const messageLevelValue = levels[level.toLowerCase()];
      // Only log if the message's level is at or above the logger's configured minimum level
      if (messageLevelValue !== undefined && messageLevelValue >= currentLevelValue) {
        console.log(`[${level.toUpperCase()}] ${message}`);
        return true; // Indicate that the message was logged
      }
      return false; // Indicate that the message was filtered out
    },
    // Convenience methods for specific log levels
    debug: function(message) {
      return this.log('debug', message);
    },
    info: function(message) {
      return this.log('info', message);
    },
    warn: function(message) {
      return this.log('warn', message);
    },
    error: function(message) {
      return this.log('error', message);
    }
  };
}

// Example usage:
const defaultAppLogger = createLogger(); // Defaults to 'info'
defaultAppLogger.info('Application started.'); // Logs
defaultAppLogger.debug('Loading user data...'); // Does not log (below 'info')
defaultAppLogger.error('Failed to connect to database!'); // Logs

const devLogger = createLogger('debug'); // Configured for 'debug'
devLogger.debug('Detailed debug info for dev.'); // Logs
devLogger.info('Info message for dev.');   // Logs

const prodLogger = createLogger('warn'); // Configured for 'warn' in production
prodLogger.info('This info message will not show in prod.'); // Does not log
prodLogger.warn('This warning message will show in prod.'); // Logs

module.exports = createLogger;
