const assert = require('assert');
const { createGreeter, createCounter } = require('./01-core.js');
const createLogger = require('./02-practical.js');

console.log('Starting closure practice tests...');

// Test 01-core.js: createGreeter
try {
  const sayHello = createGreeter('Hello');
  const sayHi = createGreeter('Hi');

  assert.strictEqual(sayHello('Alice'), 'Hello, Alice!', 'Greeter (Hello) did not work as expected.');
  assert.strictEqual(sayHi('Bob'), 'Hi, Bob!', 'Greeter (Hi) did not work as expected.');
  assert.notStrictEqual(sayHello('Charlie'), 'Hi, Charlie!', 'Greeters should maintain independent states.');
  console.log('✅ createGreeter tests passed.');
} catch (error) {
  console.error('❌ createGreeter tests failed:', error.message);
}

// Test 01-core.js: createCounter
try {
  const counter1 = createCounter();
  assert.strictEqual(counter1.getCount(), 0, 'Initial count should be 0.');
  assert.strictEqual(counter1.increment(), 1, 'Increment did not return 1.');
  assert.strictEqual(counter1.increment(), 2, 'Increment did not return 2.');
  assert.strictEqual(counter1.decrement(), 1, 'Decrement did not return 1.');
  assert.strictEqual(counter1.getCount(), 1, 'Final count should be 1.');

  const counter2 = createCounter(); // New independent counter
  assert.strictEqual(counter2.getCount(), 0, 'New counter should start at 0.');
  counter2.increment();
  assert.strictEqual(counter2.getCount(), 1, 'New counter incremented independently.');
  assert.strictEqual(counter1.getCount(), 1, 'Old counter should remain unaffected.');

  console.log('✅ createCounter tests passed.');
} catch (error) {
  console.error('❌ createCounter tests failed:', error.message);
}

// Test 02-practical.js: createLogger
try {
  let capturedLogs = [];
  const originalConsoleLog = console.log;
  // Temporarily override console.log to capture output for testing
  console.log = (...args) => capturedLogs.push(args.join(' '));

  // Test logger with default 'info' level
  const infoLogger = createLogger();
  infoLogger.info('This is an info message.');
  infoLogger.debug('This debug message should be filtered.');
  infoLogger.warn('This is a warning.');

  assert.strictEqual(capturedLogs.length, 2, 'Info logger should have logged 2 messages.');
  assert.ok(capturedLogs.includes('[INFO] This is an info message.'), 'Info message missing.');
  assert.ok(capturedLogs.includes('[WARN] This is a warning.'), 'Warning message missing.');
  capturedLogs = []; // Clear for next test

  // Test logger with 'debug' level
  const debugLogger = createLogger('debug');
  debugLogger.debug('A debug message.');
  debugLogger.info('An info message.');
  assert.strictEqual(capturedLogs.length, 2, 'Debug logger should have logged 2 messages.');
  assert.ok(capturedLogs.includes('[DEBUG] A debug message.'), 'Debug message missing.');
  capturedLogs = [];

  // Test logger with 'error' level
  const errorLogger = createLogger('error');
  errorLogger.info('This info should be filtered.');
  errorLogger.warn('This warning should be filtered.');
  errorLogger.error('An error message.');
  assert.strictEqual(capturedLogs.length, 1, 'Error logger should have logged 1 message.');
  assert.ok(capturedLogs.includes('[ERROR] An error message.'), 'Error message missing.');
  capturedLogs = [];

  // Restore original console.log
  console.log = originalConsoleLog;
  console.log('✅ createLogger tests passed.');
} catch (error) {
  // Ensure console.log is restored even if tests fail
  if (console.log !== originalConsoleLog) {
    console.log = originalConsoleLog;
  }
  console.error('❌ createLogger tests failed:', error.message);
}

console.log('All closure practice tests finished.');
