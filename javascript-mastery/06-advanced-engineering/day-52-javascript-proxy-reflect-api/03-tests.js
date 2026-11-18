// Day 52: Tests for the validated settings proxy
// Date: 2026-11-18

const assert = require('assert');
const createValidatedSettings = require('./02-practical');

console.log('Running tests for createValidatedSettings...');

// Test case 1: Default settings
const settings1 = createValidatedSettings();
assert.strictEqual(settings1.theme, 'dark', 'Test Case 1 Failed: Default theme should be dark.');
assert.strictEqual(settings1.fontSize, 16, 'Test Case 1 Failed: Default font size should be 16.');
assert.strictEqual(settings1.notifications, true, 'Test Case 1 Failed: Default notifications should be true.');
console.log('Test Case 1 Passed: Default settings work.');

// Test case 2: Initial settings override defaults
const settings2 = createValidatedSettings({ theme: 'light', fontSize: 18 });
assert.strictEqual(settings2.theme, 'light', 'Test Case 2 Failed: Initial theme should override default.');
assert.strictEqual(settings2.fontSize, 18, 'Test Case 2 Failed: Initial font size should override default.');
assert.strictEqual(settings2.notifications, true, 'Test Case 2 Failed: Other defaults should remain.');
console.log('Test Case 2 Passed: Initial settings override defaults.');

// Test case 3: Setting valid properties
const settings3 = createValidatedSettings();
settings3.theme = 'system';
assert.strictEqual(settings3.theme, 'system', 'Test Case 3 Failed: Should be able to set valid theme.');
settings3.fontSize = 20;
assert.strictEqual(settings3.fontSize, 20, 'Test Case 3 Failed: Should be able to set valid font size.');
settings3.notifications = false;
assert.strictEqual(settings3.notifications, false, 'Test Case 3 Failed: Should be able to set valid notifications.');
console.log('Test Case 3 Passed: Setting valid properties works.');

// Test case 4: Attempting to set invalid properties (type errors)
const settings4 = createValidatedSettings();
assert.throws(() => {
  settings4.fontSize = 'large';
}, TypeError, 'Test Case 4 Failed: Should throw TypeError for invalid font size.');

assert.throws(() => {
  settings4.theme = 'blue';
}, Error, 'Test Case 4 Failed: Should throw Error for invalid theme.');

assert.throws(() => {
  settings4.notifications = 123;
}, TypeError, 'Test Case 4 Failed: Should throw TypeError for invalid notifications.');
console.log('Test Case 4 Passed: Setting invalid properties throws errors.');

// Test case 5: Accessing unknown property returns undefined (not in defaultSettings)
const settings5 = createValidatedSettings();
assert.strictEqual(settings5.nonExistentProp, undefined, 'Test Case 5 Failed: Unknown prop (not in defaults) should return undefined.');
assert.strictEqual(settings5.theme, 'dark', 'Test Case 5 Failed: Accessing existing default should still work.');
console.log('Test Case 5 Passed: Accessing unknown property (not in defaults) returns undefined.');

// Test case 6: Cannot delete default properties
const settings6 = createValidatedSettings();
assert.throws(() => {
  delete settings6.theme;
}, Error, 'Test Case 6 Failed: Should throw error when deleting default property.');
console.log('Test Case 6 Passed: Cannot delete default properties.');

// Test case 7: Can delete non-default properties
const settings7 = createValidatedSettings();
settings7.customKey = 'value';
assert.strictEqual(settings7.customKey, 'value', 'Test Case 7 Failed: Custom key should be settable.');
assert.strictEqual(delete settings7.customKey, true, 'Test Case 7 Failed: Custom key should be deletable.');
assert.strictEqual(settings7.customKey, undefined, 'Test Case 7 Failed: Custom key should be deleted.');
console.log('Test Case 7 Passed: Can delete non-default properties.');

console.log('All tests passed!');