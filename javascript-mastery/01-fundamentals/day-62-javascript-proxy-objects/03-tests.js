const assert = require('node:assert');

// --- Test 01-core.js concepts ---
console.log('--- Testing core proxy concepts ---');

const targetCore = {
  value: 10,
  name: "test"
};

let logMessages = [];
const handlerCore = {
  get(target, property, receiver) {
    logMessages.push(`GET ${String(property)}`);
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    logMessages.push(`SET ${String(property)} to ${value}`);
    return Reflect.set(target, property, value, receiver);
  }
};

const proxyCore = new Proxy(targetCore, handlerCore);

// Test 1: Initial values
assert.strictEqual(proxyCore.value, 10, 'Test 1 Failed: Initial value should be 10');
assert.strictEqual(proxyCore.name, 'test', 'Test 1 Failed: Initial name should be "test"');
assert.deepStrictEqual(logMessages, ['GET value', 'GET name'], 'Test 1 Failed: Get logs should be recorded');
logMessages = []; // Clear logs for next test

// Test 2: Set property
proxyCore.value = 20;
assert.strictEqual(targetCore.value, 20, 'Test 2 Failed: Target value should update');
assert.strictEqual(proxyCore.value, 20, 'Test 2 Failed: Proxy value should reflect update');
assert.deepStrictEqual(logMessages, ['SET value to 20', 'GET value'], 'Test 2 Failed: Set and Get logs for value');
logMessages = [];

// Test 3: Add new property
proxyCore.newProp = true;
assert.strictEqual(targetCore.newProp, true, 'Test 3 Failed: New property should be added to target');
assert.strictEqual(proxyCore.newProp, true, 'Test 3 Failed: New property should be accessible via proxy');
assert.deepStrictEqual(logMessages, ['SET newProp to true', 'GET newProp'], 'Test 3 Failed: Set and Get logs for new property');
logMessages = [];

console.log('All core proxy tests passed!');

// --- Test 02-practical.js concepts ---
console.log('\n--- Testing observable object with proxy ---');

// Mock the createObservable function for testing
function createObservableForTest(obj, onChangeCallback) {
  const handler = {
    set(target, property, value, receiver) {
      const oldValue = target[property];
      if (oldValue !== value) {
        const result = Reflect.set(target, property, value, receiver);
        onChangeCallback(property, oldValue, value, target);
        return result;
      }
      return true;
    },
    deleteProperty(target, property) {
      const oldValue = target[property];
      const result = Reflect.deleteProperty(target, property);
      if (result) {
        onChangeCallback(property, oldValue, undefined, target, 'delete');
      }
      return result;
    }
  };
  return new Proxy(obj, handler);
}

let callbackCalls = [];
const testCallback = (key, oldVal, newVal, obj, action = 'set') => {
  callbackCalls.push({ key, oldVal, newVal, obj, action });
};

let data = { count: 0, status: 'pending' };
const observableData = createObservableForTest(data, testCallback);

// Test 4: Initial state
assert.strictEqual(observableData.count, 0, 'Test 4 Failed: Initial count should be 0');
assert.strictEqual(observableData.status, 'pending', 'Test 4 Failed: Initial status should be pending');
assert.deepStrictEqual(callbackCalls, [], 'Test 4 Failed: No callback calls initially');

// Test 5: Modify property
observableData.count = 1;
assert.strictEqual(observableData.count, 1, 'Test 5 Failed: Count should be 1');
assert.strictEqual(data.count, 1, 'Test 5 Failed: Original object count should be 1');
assert.strictEqual(callbackCalls.length, 1, 'Test 5 Failed: One callback call expected');
assert.deepStrictEqual(callbackCalls[0].key, 'count', 'Test 5 Failed: Callback key');
assert.deepStrictEqual(callbackCalls[0].oldVal, 0, 'Test 5 Failed: Callback old value');
assert.deepStrictEqual(callbackCalls[0].newVal, 1, 'Test 5 Failed: Callback new value');
assert.deepStrictEqual(callbackCalls[0].obj, data, 'Test 5 Failed: Callback object reference');
callbackCalls = []; // Clear for next test

// Test 6: Modify property with same value (should not trigger callback)
observableData.count = 1;
assert.strictEqual(callbackCalls.length, 0, 'Test 6 Failed: No callback call expected for same value');

// Test 7: Add new property
observableData.isValid = true;
assert.strictEqual(observableData.isValid, true, 'Test 7 Failed: New property should be true');
assert.strictEqual(callbackCalls.length, 1, 'Test 7 Failed: One callback call expected for new property');
assert.deepStrictEqual(callbackCalls[0].key, 'isValid', 'Test 7 Failed: Callback key');
assert.deepStrictEqual(callbackCalls[0].oldVal, undefined, 'Test 7 Failed: Callback old value for new prop');
assert.deepStrictEqual(callbackCalls[0].newVal, true, 'Test 7 Failed: Callback new value for new prop');
callbackCalls = [];

// Test 8: Delete property
delete observableData.status;
assert.strictEqual(observableData.status, undefined, 'Test 8 Failed: Status should be undefined after deletion');
assert.strictEqual(callbackCalls.length, 1, 'Test 8 Failed: One callback call expected for deletion');
assert.deepStrictEqual(callbackCalls[0].key, 'status', 'Test 8 Failed: Callback key for deletion');
assert.deepStrictEqual(callbackCalls[0].oldVal, 'pending', 'Test 8 Failed: Callback old value for deletion');
assert.deepStrictEqual(callbackCalls[0].newVal, undefined, 'Test 8 Failed: Callback new value for deletion');
assert.deepStrictEqual(callbackCalls[0].action, 'delete', 'Test 8 Failed: Callback action for deletion');
callbackCalls = [];

console.log('All observable object tests passed!');
console.log('\nAll tests completed successfully!');
