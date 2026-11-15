// 02-practical.js

// A practical use case for .bind(): ensuring 'this' context for callbacks.

class Logger {
  constructor(prefix) {
    this.prefix = prefix ? `[${prefix}] ` : '';
  }

  // Regular method - 'this' refers to the Logger instance
  log(message) {
    console.log(`${this.prefix}LOG: ${message}`);
    return `${this.prefix}LOG: ${message}`; // Return for testing
  }

  warn(message) {
    console.warn(`${this.prefix}WARN: ${message}`);
    return `${this.prefix}WARN: ${message}`; // Return for testing
  }

  error(message) {
    console.error(`${this.prefix}ERROR: ${message}`);
    return `${this.prefix}ERROR: ${message}`; // Return for testing
  }
}

// Imagine a utility that processes items and needs to log their status.
// If we pass a logger method directly, its 'this' context might be lost.
class ItemProcessor {
  constructor(logger) {
    // If logger.log is passed directly as a callback, its 'this' will point to ItemProcessor or global.
    // We need to bind it to the original logger instance.
    this.log = logger.log.bind(logger);
    this.warn = logger.warn.bind(logger);
    this.error = logger.error.bind(logger);
  }

  process(items) {
    const results = [];
    items.forEach(item => {
      if (item.value < 0) {
        this.error(`Invalid item value: ${item.id}`);
        results.push({ id: item.id, status: 'error', message: `Invalid item value: ${item.id}` });
      } else if (item.value === 0) {
        this.warn(`Item value is zero: ${item.id}`);
        results.push({ id: item.id, status: 'warn', message: `Item value is zero: ${item.id}` });
      } else {
        this.log(`Processing item: ${item.id} with value ${item.value}`);
        results.push({ id: item.id, status: 'processed', message: `Processing item: ${item.id}` });
      }
    });
    return results;
  }
}

module.exports = {
  Logger,
  ItemProcessor
};
