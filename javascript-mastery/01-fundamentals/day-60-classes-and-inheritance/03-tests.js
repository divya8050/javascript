const assert = require('assert');
const { Vehicle, Car, Motorcycle } = require('./01-core');
const { InventoryItem, VehicleInventoryItem, InventoryManager } = require('./02-practical');

console.log('Running tests...');

// --- Test 01-core.js classes ---

// Test Vehicle class
const genericVehicle = new Vehicle('Boeing', '747');
assert.strictEqual(genericVehicle.make, 'Boeing', 'Vehicle make should be Boeing');
assert.strictEqual(genericVehicle.model, '747', 'Vehicle model should be 747');
assert.strictEqual(genericVehicle.isRunning, false, 'Vehicle should not be running initially');
assert.strictEqual(genericVehicle.start(), 'Boeing 747 started.', 'Vehicle should start');
assert.strictEqual(genericVehicle.isRunning, true, 'Vehicle should be running after start');
assert.strictEqual(genericVehicle.start(), 'Boeing 747 is already running.', 'Vehicle should not start if already running');
assert.strictEqual(genericVehicle.stop(), 'Boeing 747 stopped.', 'Vehicle should stop');
assert.strictEqual(genericVehicle.isRunning, false, 'Vehicle should be off after stop');
assert.strictEqual(genericVehicle.getDetails(), 'Vehicle: Boeing 747. Running: No', 'Vehicle details should be correct');

// Test Car class (inheritance and method overriding)
const myCar = new Car('Honda', 'Civic', 2022, 'Gasoline');
assert.strictEqual(myCar.make, 'Honda', 'Car make should be Honda');
assert.strictEqual(myCar.model, 'Civic', 'Car model should be Civic');
assert.strictEqual(myCar.year, 2022, 'Car year should be 2022');
assert.strictEqual(myCar.fuelType, 'Gasoline', 'Car fuel type should be Gasoline');
assert.strictEqual(myCar.honk(), 'Beep beep!', 'Car should honk');
assert.strictEqual(myCar.start(), 'Honda Civic started.', 'Car should start');
assert.strictEqual(myCar.getDetails(), 'Vehicle: Honda Civic. Running: Yes, Year: 2022, Fuel: Gasoline', 'Car details should include inherited and own properties');

// Test Motorcycle class
const myBike = new Motorcycle('Yamaha', 'MT-07', 689);
assert.strictEqual(myBike.make, 'Yamaha', 'Motorcycle make should be Yamaha');
assert.strictEqual(myBike.engineSize, 689, 'Motorcycle engine size should be 689');
assert.strictEqual(myBike.wheelie(), 'Doing a wheelie!', 'Motorcycle should do a wheelie');
assert.strictEqual(myBike.getDetails(), 'Vehicle: Yamaha MT-07. Running: No, Engine: 689cc', 'Motorcycle details should be correct');

// --- Test 02-practical.js classes ---

// Test InventoryItem
const milk = new InventoryItem('Milk', 3.50, 10);
assert.strictEqual(milk.name, 'Milk', 'InventoryItem name should be Milk');
assert.strictEqual(milk.getTotalValue(), 35.00, 'InventoryItem total value should be correct');
assert.strictEqual(milk.updateQuantity(5), 'Quantity for Milk updated to 15.', 'Quantity should update');
assert.strictEqual(milk.quantity, 15, 'Quantity should be 15');
assert.strictEqual(milk.displayInfo(), 'Milk | Price: $3.50 | Qty: 15 | Value: $52.50', 'InventoryItem display info should be correct');

// Test VehicleInventoryItem
const truck = new Vehicle('Ford', 'F-150');
const truckItem = new VehicleInventoryItem(truck, 45000, 1);
assert.strictEqual(truckItem.name, 'Ford F-150 (undefined)', 'VehicleInventoryItem name should include vehicle details'); // Year is undefined for base Vehicle
assert.strictEqual(truckItem.price, 45000, 'VehicleInventoryItem price should be correct');
assert.strictEqual(truckItem.vehicleDetails.make, 'Ford', 'VehicleInventoryItem should store actual vehicle object');
assert.strictEqual(truckItem.displayInfo(), 'Ford F-150 (undefined) | Price: $45000.00 | Qty: 1 | Value: $45000.00 | Vehicle: Ford F-150. Running: No', 'VehicleInventoryItem display info should include vehicle details');

// Test InventoryManager
const manager = new InventoryManager();
assert.strictEqual(manager.items.length, 0, 'Manager should start with no items');

manager.addItem(milk);
assert.strictEqual(manager.items.length, 1, 'Manager should have 1 item after adding milk');
assert.strictEqual(manager.addItem(milk), 'Updated quantity for Milk.', 'Manager should update quantity for existing item');
assert.strictEqual(milk.quantity, 30, 'Milk quantity should be 30 after adding again');

const bread = new InventoryItem('Bread', 2.00, 5);
manager.addItem(bread);
assert.strictEqual(manager.items.length, 2, 'Manager should have 2 items after adding bread');

assert.strictEqual(manager.getTotalInventoryValue(), (3.50 * 30) + (2.00 * 5), 'Total inventory value should be correct');

const itemInfo = manager.listAllItems();
assert.strictEqual(itemInfo.length, 2, 'List all items should return 2 items');
assert.ok(itemInfo[0].includes('Milk'), 'First item info should contain Milk');
assert.ok(itemInfo[1].includes('Bread'), 'Second item info should contain Bread');

assert.strictEqual(manager.removeItem('Milk'), 'Removed item: Milk.', 'Manager should remove Milk');
assert.strictEqual(manager.items.length, 1, 'Manager should have 1 item after removing Milk');
assert.strictEqual(manager.removeItem('NonExistent'), "Item 'NonExistent' not found.", 'Manager should report if item not found');

console.log('All tests passed!');
