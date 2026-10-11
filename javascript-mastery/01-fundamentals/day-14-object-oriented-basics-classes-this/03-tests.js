// Day 14: Tests for the inventory management system

const assert = require('assert');
const { InventoryItem, InventoryManager } = require('./02-practical');

console.log('Running tests for Inventory Management System...');

// Test 1: InventoryItem creation and basic properties
try {
  const item = new InventoryItem('P001', 'Monitor', 5, 199.99);
  assert.strictEqual(item.id, 'P001', 'Test 1.1: Item ID should match.');
  assert.strictEqual(item.name, 'Monitor', 'Test 1.2: Item name should match.');
  assert.strictEqual(item.quantity, 5, 'Test 1.3: Item quantity should match.');
  assert.strictEqual(item.price, 199.99, 'Test 1.4: Item price should match.');
  assert.throws(() => new InventoryItem('P00X', 'Bad', -1, 10), Error, 'Test 1.5: Should throw error for negative quantity at creation.');
  assert.throws(() => new InventoryItem('P00Y', 'Bad', 10, -1), Error, 'Test 1.6: Should throw error for negative price at creation.');
  console.log('Test 1: InventoryItem creation passed.');
} catch (error) {
  console.error('Test 1 failed:', error.message);
}

// Test 2: InventoryItem methods
try {
  const item = new InventoryItem('P002', 'Webcam', 10, 49.95);
  item.updateQuantity(8);
  assert.strictEqual(item.quantity, 8, 'Test 2.1: Quantity should update.');
  item.updatePrice(45.00);
  assert.strictEqual(item.price, 45.00, 'Test 2.2: Price should update.');
  assert.strictEqual(item.getItemDetails(), 'Webcam (ID: P002) - Qty: 8, Price: $45.00', 'Test 2.3: Item details format correct.');
  assert.throws(() => item.updateQuantity(-1), Error, 'Test 2.4: Should throw error for negative quantity.');
  assert.throws(() => item.updatePrice(-10), Error, 'Test 2.5: Should throw error for negative price.');
  console.log('Test 2: InventoryItem methods passed.');
} catch (error) {
  console.error('Test 2 failed:', error.message);
}

// Test 3: InventoryManager - addItem and findItemById
try {
  const manager = new InventoryManager();
  const item1 = new InventoryItem('M001', 'Desk Chair', 2, 150.00);
  const item2 = new InventoryItem('M002', 'Standing Desk', 1, 300.00);

  manager.addItem(item1);
  manager.addItem(item2);
  assert.strictEqual(manager.items.length, 2, 'Test 3.1: Manager should have 2 items.');
  assert.deepStrictEqual(manager.findItemById('M001'), item1, 'Test 3.2: Should find item by ID.');
  assert.strictEqual(manager.findItemById('M003'), undefined, 'Test 3.3: Should return undefined for non-existent ID.');
  assert.throws(() => manager.addItem(item1), Error, 'Test 3.4: Should throw error for adding duplicate ID.');
  assert.throws(() => manager.addItem({ id: 'X', name: 'Y', quantity: 1, price: 10 }), Error, 'Test 3.5: Should throw error for non-InventoryItem object.');
  console.log('Test 3: InventoryManager addItem and findItemById passed.');
} catch (error) {
  console.error('Test 3 failed:', error.message);
}

// Test 4: InventoryManager - removeItemById and getTotalInventoryValue
try {
  const manager = new InventoryManager();
  const item1 = new InventoryItem('N001', 'Headphones', 5, 80.00);
  const item2 = new InventoryItem('N002', 'Microphone', 3, 120.00);
  const item3 = new InventoryItem('N003', 'LED Light', 10, 20.00);

  manager.addItem(item1); // 5 * 80 = 400
  manager.addItem(item2); // 3 * 120 = 360
  manager.addItem(item3); // 10 * 20 = 200
  // Total: 400 + 360 + 200 = 960

  assert.strictEqual(manager.getTotalInventoryValue(), 960, 'Test 4.1: Initial total inventory value correct.');

  manager.removeItemById('N002'); // Remove Microphone
  assert.strictEqual(manager.items.length, 2, 'Test 4.2: Manager should have 2 items after removal.');
  assert.strictEqual(manager.findItemById('N002'), undefined, 'Test 4.3: Removed item should not be found.');
  assert.strictEqual(manager.getTotalInventoryValue(), 600, 'Test 4.4: Total inventory value correct after removal.'); // 400 + 200 = 600
  assert.strictEqual(manager.removeItemById('N999'), false, 'Test 4.5: Removing non-existent item returns false.');
  console.log('Test 4: InventoryManager removeItemById and getTotalInventoryValue passed.');
} catch (error) {
  console.error('Test 4 failed:', error.message);
}

// Test 5: InventoryManager - listAllItems
try {
  const manager = new InventoryManager();
  assert.strictEqual(manager.listAllItems(), 'No items in inventory.', 'Test 5.1: Empty inventory message correct.');

  const item1 = new InventoryItem('L001', 'Cable', 20, 5.00);
  manager.addItem(item1);
  assert.strictEqual(manager.listAllItems(), 'Cable (ID: L001) - Qty: 20, Price: $5.00', 'Test 5.2: Single item list correct.');

  const item2 = new InventoryItem('L002', 'Adapter', 15, 12.50);
  manager.addItem(item2);
  const expectedList = 'Cable (ID: L001) - Qty: 20, Price: $5.00\nAdapter (ID: L002) - Qty: 15, Price: $12.50';
  assert.strictEqual(manager.listAllItems(), expectedList, 'Test 5.3: Multiple item list correct.');
  console.log('Test 5: InventoryManager listAllItems passed.');
} catch (error) {
  console.error('Test 5 failed:', error.message);
}

console.log('\nAll tests completed.');