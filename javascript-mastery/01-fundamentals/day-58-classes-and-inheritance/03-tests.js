const assert = require('assert');
const { Person, Employee } = require('./01-core');
const { Shape, Circle, Rectangle, Triangle } = require('./02-practical');

// --- Tests for 01-core.js ---
console.log('Running tests for 01-core.js (Person, Employee)...');

const person1 = new Person('Alice', 30);
assert.strictEqual(person1.name, 'Alice', 'Person: Name should be Alice');
assert.strictEqual(person1.age, 30, 'Person: Age should be 30');
assert.strictEqual(person1.greet(), 'Hello, my name is Alice and I am 30 years old.', 'Person: Greet message incorrect');
person1.celebrateBirthday();
assert.strictEqual(person1.age, 31, 'Person: Age should increment after birthday');

const employee1 = new Employee('Bob', 25, 'EMP001', 'Engineering');
assert.strictEqual(employee1.name, 'Bob', 'Employee: Name should be Bob');
assert.strictEqual(employee1.age, 25, 'Employee: Age should be 25');
assert.strictEqual(employee1.employeeId, 'EMP001', 'Employee: ID should be EMP001');
assert.strictEqual(employee1.department, 'Engineering', 'Employee: Department should be Engineering');
assert.strictEqual(employee1.greet(), 'Hello, my name is Bob and I am 25 years old. I work in the Engineering department.', 'Employee: Overridden greet message incorrect');
assert.strictEqual(employee1.getEmployeeDetails(), 'Employee ID: EMP001, Department: Engineering.', 'Employee: Details incorrect');
employee1.promote('Management');
assert.strictEqual(employee1.department, 'Management', 'Employee: Department should update after promotion');
assert.ok(employee1 instanceof Person, 'Employee should be an instance of Person');
assert.ok(employee1 instanceof Employee, 'Employee should be an instance of Employee');

console.log('All 01-core.js tests passed! ✅\n');

// --- Tests for 02-practical.js ---
console.log('Running tests for 02-practical.js (Shapes)...');

// Test Shape base class (abstract methods)
const genericShape = new Shape('Generic');
assert.strictEqual(genericShape.toString(), 'This is a Generic shape.', 'Shape: toString incorrect');
assert.throws(() => genericShape.getArea(), Error, 'Shape: getArea should throw error');
assert.throws(() => genericShape.getPerimeter(), Error, 'Shape: getPerimeter should throw error');

// Test Circle class
const circle1 = new Circle(10);
assert.strictEqual(circle1.name, 'Circle', 'Circle: Name should be Circle');
assert.strictEqual(circle1.radius, 10, 'Circle: Radius should be 10');
assert.strictEqual(circle1.getArea().toFixed(2), (Math.PI * 100).toFixed(2), 'Circle: Area calculation incorrect');
assert.strictEqual(circle1.getPerimeter().toFixed(2), (2 * Math.PI * 10).toFixed(2), 'Circle: Perimeter calculation incorrect');
assert.ok(circle1 instanceof Shape, 'Circle should be an instance of Shape');
assert.throws(() => new Circle(0), Error, 'Circle: Should throw error for non-positive radius');

// Test Rectangle class
const rect1 = new Rectangle(5, 8);
assert.strictEqual(rect1.name, 'Rectangle', 'Rectangle: Name should be Rectangle');
assert.strictEqual(rect1.width, 5, 'Rectangle: Width should be 5');
assert.strictEqual(rect1.height, 8, 'Rectangle: Height should be 8');
assert.strictEqual(rect1.getArea(), 40, 'Rectangle: Area calculation incorrect');
assert.strictEqual(rect1.getPerimeter(), 26, 'Rectangle: Perimeter calculation incorrect');
assert.ok(rect1 instanceof Shape, 'Rectangle should be an instance of Shape');
assert.throws(() => new Rectangle(-1, 5), Error, 'Rectangle: Should throw error for non-positive width');

// Test Triangle class
const triangle1 = new Triangle(10, 5, 6, 7);
assert.strictEqual(triangle1.name, 'Triangle', 'Triangle: Name should be Triangle');
assert.strictEqual(triangle1.base, 10, 'Triangle: Base should be 10');
assert.strictEqual(triangle1.height, 5, 'Triangle: Height should be 5');
assert.strictEqual(triangle1.getArea(), 25, 'Triangle: Area calculation incorrect');
assert.strictEqual(triangle1.getPerimeter(), 23, 'Triangle: Perimeter calculation incorrect'); // 10 + 6 + 7
assert.ok(triangle1 instanceof Shape, 'Triangle should be an instance of Shape');
assert.throws(() => new Triangle(0, 5, 6, 7), Error, 'Triangle: Should throw error for non-positive base');

console.log('All 02-practical.js tests passed! ✅\n');

console.log('All tests completed successfully! ✨');