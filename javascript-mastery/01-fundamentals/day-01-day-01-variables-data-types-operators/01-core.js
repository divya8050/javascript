/**
 * Day 1: Variables, Data Types, and Basic Operators
 * Target Date: 2026-09-28
 *
 * This lesson introduces the absolute building blocks of JavaScript: how to store information
 * using variables, the different kinds of data JavaScript can handle, and fundamental operations
 * to manipulate that data. We'll delve into the architectural implications of `var`, `let`, and `const`,
 * and the nature of primitive data types.
 */

/**
 * Section 1: Understanding Variables (var, let, const)
 * -----------------------------------------------------
 * In JavaScript, variables are symbolic names for values. They allow us to store and manipulate data.
 * Historically, `var` was the only way to declare variables. ES2015 (ES6) introduced `let` and `const`,
 * which provide better control over variable scoping and mutability, leading to more predictable code.
 */

// 1.1 `var`: Function-scoped and Hoisted
// -------------------------------------
// `var` declarations are function-scoped. If declared outside any function, they are global.
// `var` variables are also 'hoisted' to the top of their scope during the compilation phase,
// meaning you can access them before their declaration, though their value will be `undefined`.

console.log('// --- Understanding `var` ---');
console.log('before declaration (var_example):', var_example); // Output: undefined (due to hoisting)
var var_example = 'I am a var variable';
console.log('after declaration (var_example):', var_example); // Output: I am a var variable

function showVarScope() {
  var function_scoped_var = 'I live only within this function';
  console.log('inside function (function_scoped_var):', function_scoped_var);
  if (true) {
    var another_var = 'I am also function-scoped, not block-scoped';
  }
  console.log('outside if block (another_var):', another_var); // `another_var` is accessible here
}
showVarScope();
// console.log(function_scoped_var); // ReferenceError: function_scoped_var is not defined

/**
 * Architectural Insight (var): `var`'s hoisting and function-scoping can lead to unexpected behaviors
 * and 'variable leaks' when used in loops or conditional blocks, making it harder to reason about code.
 * It's generally discouraged in modern JavaScript in favor of `let` and `const`.
 */

// 1.2 `let`: Block-scoped and Not Hoisted (Temporal Dead Zone)
// -----------------------------------------------------------
// `let` declarations are block-scoped. This means they are only accessible within the block
// (e.g., an `if` statement, `for` loop, or function) where they are defined.
// `let` variables are also hoisted, but they are in a 'Temporal Dead Zone' (TDZ) until their declaration
// is reached. Accessing them before declaration results in a `ReferenceError`.

console.log('\n// --- Understanding `let` ---');
// console.log('before declaration (let_example):', let_example); // ReferenceError: Cannot access 'let_example' before initialization
let let_example = 'I am a let variable';
console.log('after declaration (let_example):', let_example);

function showLetScope() {
  let function_scoped_let = 'I live within this function';
  if (true) {
    let block_scoped_let = 'I live only within this if block';
    console.log('inside if block (block_scoped_let):', block_scoped_let);
  }
  // console.log(block_scoped_let); // ReferenceError: block_scoped_let is not defined
}
showLetScope();

/**
 * Architectural Insight (let): `let` solves many of the scoping issues of `var`, promoting cleaner
 * and more predictable code by restricting variable access to their declared blocks.
 * This aligns with principles of encapsulation and reduces cognitive load when reading code.
 */

// 1.3 `const`: Block-scoped, Not Hoisted, and Immutable Binding
// -------------------------------------------------------------
// `const` declarations are also block-scoped and subject to the TDZ, similar to `let`.
// The key difference is that `const` variables must be initialized at declaration, and once assigned,
// their binding cannot be reassigned. This means the variable always points to the same value or object.
// For primitive values, `const` makes the value itself immutable. For objects/arrays, it makes the
// reference immutable, but the *contents* of the object/array can still be modified.

console.log('\n// --- Understanding `const` ---');
const const_example = 'I am a const variable';
console.log('after declaration (const_example):', const_example);
// const_example = 'Trying to reassign'; // TypeError: Assignment to constant variable.

const PI = 3.14159;
// PI = 3.0; // This would cause a TypeError

const user = { name: 'Alice', age: 30 };
user.age = 31; // This is allowed! The object's properties can be changed.
console.log('user object (modified age):', user);
// user = { name: 'Bob' }; // This would cause a TypeError: Assignment to constant variable.

/**
 * Architectural Insight (const): `const` enhances code reliability by enforcing immutability of bindings.
 * It signals to other developers that a variable's reference should not change, reducing side effects
 * and making code easier to debug and reason about. Use `const` by default, and `let` only when reassignment is necessary.
 */

/**
 * Section 2: Data Types
 * ---------------------
 * JavaScript is a dynamically typed language, meaning you don't declare the type of a variable
 * explicitly. The type is determined at runtime based on the value it holds. JavaScript has
 * several built-in data types, categorized into Primitives and Objects.
 * For Day 1, we focus on Primitives, which are immutable values.
 */

console.log('\n// --- Understanding Data Types ---');

// 2.1 Primitive Data Types
// ------------------------
// Primitives are simple, atomic data types. They are stored directly on the call stack.
// When you assign a primitive to a new variable, a copy of the value is made.

// Number: Represents both integer and floating-point numbers.
let num = 10;
let floatNum = 3.14;
let bigNum = 1e6; // 1,000,000
console.log('Type of num (10):', typeof num); // Output: number
console.log('Type of floatNum (3.14):', typeof floatNum); // Output: number

// String: Represents sequences of characters.
let str1 = 'Hello, World!';
let str2 = `The number is ${num}.`; // Template literals (backticks) allow embedding expressions.
console.log('Type of str1 ("Hello, World!"):', typeof str1); // Output: string

// Boolean: Represents a logical entity and can have two values: `true` or `false`.
let isActive = true;
let hasPermission = false;
console.log('Type of isActive (true):', typeof isActive); // Output: boolean

// Undefined: Represents a variable that has been declared but has not yet been assigned a value.
let unassignedVar;
console.log('Type of unassignedVar:', typeof unassignedVar); // Output: undefined

// Null: Represents the intentional absence of any object value. It's a primitive value.
let emptyValue = null;
console.log('Type of emptyValue (null):', typeof emptyValue); // Output: object (Historical JS bug, null is a primitive!)

// Symbol (ES6): Represents a unique identifier. Used for unique object property keys.
const id = Symbol('uniqueId');
const id2 = Symbol('uniqueId');
console.log('Type of id (Symbol):', typeof id); // Output: symbol
console.log('id === id2:', id === id2); // Output: false (Symbols are always unique)

// BigInt (ES2020): Represents integers with arbitrary precision. For numbers larger than 2^53 - 1.
const largeNumber = 9007199254740991n; // 'n' suffix denotes a BigInt
console.log('Type of largeNumber (BigInt):', typeof largeNumber); // Output: bigint

/**
 * Architectural Insight (Primitives): Primitives are fundamental because they are immutable and
 * passed by value. This simplifies reasoning about data flow and prevents unintended side effects
 * that can occur when objects (passed by reference) are modified.
 */

/**
 * Section 3: Basic Operators
 * --------------------------
 * Operators are special symbols used to perform operations on operands (values and variables).
 */

console.log('\n// --- Understanding Basic Operators ---');

// 3.1 Arithmetic Operators: Perform mathematical calculations.
let a = 10;
let b = 5;
console.log('a + b (addition):', a + b);     // 15
console.log('a - b (subtraction):', a - b);  // 5
console.log('a * b (multiplication):', a * b); // 50
console.log('a / b (division):', a / b);     // 2
console.log('a % b (modulo - remainder):', a % b); // 0
console.log('a ** b (exponentiation):', a ** b); // 100000 (10 to the power of 5)

// 3.2 Assignment Operators: Assign values to variables.
let x = 10;
x += 5; // x = x + 5; (x is now 15)
console.log('x after x += 5:', x);
x -= 3; // x = x - 3; (x is now 12)
console.log('x after x -= 3:', x);

// 3.3 Comparison Operators: Compare two values and return a boolean.
let num1 = 10;
let num2 = '10'; // Note: string '10'

console.log('num1 == num2 (loose equality):', num1 == num2);   // true (type coercion happens)
console.log('num1 === num2 (strict equality):', num1 === num2); // false (types are different)
console.log('num1 != num2 (loose inequality):', num1 != num2);   // false
console.log('num1 !== num2 (strict inequality):', num1 !== num2); // true
console.log('num1 > 5 (greater than):', num1 > 5);           // true
console.log('num1 <= 10 (less than or equal):', num1 <= 10); // true

/**
 * Architectural Insight (Comparison): Always prefer `===` and `!==` (strict equality/inequality)
 * over `==` and `!=` (loose equality/inequality). Strict comparison prevents unexpected type coercion,
 * making comparisons explicit and reducing potential bugs, a critical practice for robust applications.
 */

// 3.4 Logical Operators: Combine boolean values and return a boolean.
let isAdult = true;
let hasLicense = false;

console.log('isAdult && hasLicense (AND):', isAdult && hasLicense); // false (both must be true)
console.log('isAdult || hasLicense (OR):', isAdult || hasLicense); // true (at least one must be true)
console.log('!isAdult (NOT):', !isAdult); // false (inverts the boolean value)

// Short-circuiting with Logical Operators
let result = isAdult && 'You can drive'; // 'You can drive' (if isAdult is true, returns the second operand)
console.log('Short-circuit AND:', result);

let defaultName = hasLicense || 'Guest'; // 'Guest' (if hasLicense is false, returns the second operand)
console.log('Short-circuit OR:', defaultName);

/**
 * Execution Context & Variable Environment (Brief for Day 1):
 * When JavaScript code runs, it creates an 'Execution Context'. This context has two main phases:
 * 1. Creation Phase: JavaScript scans the code for variable and function declarations.
 *    - `var` declarations are initialized with `undefined` and hoisted to the top of their function/global scope.
 *    - `let` and `const` declarations are also hoisted but remain uninitialized in the 'Temporal Dead Zone' (TDZ).
 *    - Primitive values are allocated space on the call stack.
 * 2. Execution Phase: The code is run line by line.
 *    - Variables declared with `let` and `const` are initialized when their declaration line is reached.
 *    - Values are assigned to variables.
 *
 * This foundational understanding of how variables are processed is crucial for debugging and predicting code behavior,
 * especially regarding hoisting and scoping with `var`, `let`, and `const`.
 */

console.log('\nDay 1: Variables, Data Types, and Basic Operators - Core Concepts Covered.');
