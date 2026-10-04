// 03-tests.js
// Basic tests for core functions and task utility

const assert = require('assert');

// Import functions from core and practical files
const core = require('./01-core.js');
const practical = require('./02-practical.js');

console.log('Running tests...');

// --- Tests for 01-core.js functions ---

// Test greetUser
try {
  assert.strictEqual(core.greetUser('Alice'), 'Hello, Alice! Welcome.', 'greetUser failed');
  console.log('✓ greetUser passed');
} catch (error) {
  console.error('✗ greetUser failed:', error.message);
}

// Test sayGoodbye
try {
  assert.strictEqual(core.sayGoodbye('Bob'), 'Goodbye, Bob. See you next time!', 'sayGoodbye failed');
  console.log('✓ sayGoodbye passed');
} catch (error) {
  console.error('✗ sayGoodbye failed:', error.message);
}

// Test multiply
try {
  assert.strictEqual(core.multiply(5, 3), 15, 'multiply failed');
  assert.strictEqual(core.multiply(-2, 4), -8, 'multiply negative failed');
  console.log('✓ multiply passed');
} catch (error) {
  console.error('✗ multiply failed:', error.message);
}

// Test calculateArea
try {
  assert.strictEqual(core.calculateArea(10, 5), 'The area is 50 square units.', 'calculateArea failed');
  assert.strictEqual(core.calculateArea(7, 7), 'The area is 49 square units.', 'calculateArea square failed');
  console.log('✓ calculateArea passed');
} catch (error) {
  console.error('✗ calculateArea failed:', error.message);
}

// Test describeProduct with and without defaults
try {
  assert.strictEqual(core.describeProduct('Laptop', 1200, true), 'Laptop costs $1200. In stock: Yes.', 'describeProduct full failed');
  assert.strictEqual(core.describeProduct('Keyboard', 50), 'Keyboard costs $50. In stock: Yes.', 'describeProduct default inStock failed');
  assert.strictEqual(core.describeProduct('Mouse'), 'Mouse costs $0. In stock: Yes.', 'describeProduct all defaults failed');
  assert.strictEqual(core.describeProduct('Monitor', 300, false), 'Monitor costs $300. In stock: No.', 'describeProduct not in stock failed');
  console.log('✓ describeProduct passed');
} catch (error) {
  console.error('✗ describeProduct failed:', error.message);
}

console.log('\n--- Tests for 02-practical.js task utility ---');

// Clear tasks before each test run for a clean state
practical.clearTasks();

// Test addTask
try {
  assert.strictEqual(practical.addTask('Learn functions'), 'Task "Learn functions" added.', 'addTask simple failed');
  assert.strictEqual(practical._getTasks().length, 1, 'addTask length check failed');
  assert.strictEqual(practical._getTasks()[0].description, 'Learn functions', 'addTask description failed');
  assert.strictEqual(practical.addTask('  Code practice  '), 'Task "Code practice" added.', 'addTask trim failed');
  assert.strictEqual(practical._getTasks()[1].description, 'Code practice', 'addTask trim description failed');
  assert.strictEqual(practical.addTask(''), 'Task description cannot be empty.', 'addTask empty failed');
  assert.strictEqual(practical.addTask(' '), 'Task description cannot be empty.', 'addTask whitespace failed');
  console.log('✓ addTask passed');
} catch (error) {
  console.error('✗ addTask failed:', error.message);
}

// Test completeTask
try {
  practical.clearTasks(); // Reset tasks
  practical.addTask('Task A');
  practical.addTask('Task B');
  assert.strictEqual(practical.completeTask(1), 'Task 1 marked as completed.', 'completeTask existing failed');
  assert.strictEqual(practical._getTasks()[0].completed, true, 'completeTask status failed');
  assert.strictEqual(practical.completeTask(99), 'Task with ID 99 not found.', 'completeTask non-existing failed');
  assert.strictEqual(practical._getTasks()[1].completed, false, 'completeTask other task not affected');
  console.log('✓ completeTask passed');
} catch (error) {
  console.error('✗ completeTask failed:', error.message);
}

// Test listTasks
try {
  practical.clearTasks(); // Reset tasks
  assert.strictEqual(practical.listTasks(), 'No tasks in the list.', 'listTasks empty failed');

  practical.addTask('First task');
  practical.addTask('Second task');
  practical.completeTask(1);
  const expectedList = [
    'ID: 1, Desc: "First task", Status: Completed',
    'ID: 2, Desc: "Second task", Status: Pending'
  ].join('\n');
  assert.strictEqual(practical.listTasks(), expectedList, 'listTasks populated failed');
  console.log('✓ listTasks passed');
} catch (error) {
  console.error('✗ listTasks failed:', error.message);
}

console.log('\nAll tests completed.');
