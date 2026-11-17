// Day 51 of JavaScript mastery.
// Date: 2026-11-17.
// Topic: Object Iteration and Transformation

/**
 * Creates a new object by applying a transformation function to each value
 * of the original object. The keys remain the same.
 * @param {Object} obj The input object.
 * @param {Function} transformer A function that takes (value, key) and returns the new value.
 * @returns {Object} A new object with transformed values.
 */
function mapObjectValues(obj, transformer) {
  if (typeof obj !== 'object' || obj === null || Array.isArray(obj)) {
    throw new TypeError('Input must be a non-null, non-array object.');
  }
  if (typeof transformer !== 'function') {
    throw new TypeError('Transformer must be a function.');
  }

  const newObject = {};
  for (const [key, value] of Object.entries(obj)) {
    newObject[key] = transformer(value, key);
  }
  return newObject;
}

// Example usage:
const product = {
  name: 'Laptop Pro',
  price: 1200,
  stock: 50,
  category: 'Electronics'
};

const productWithTax = mapObjectValues(product, (value, key) => {
  if (key === 'price') {
    return value * 1.05; // Add 5% tax
  }
  return value;
});

console.log('Original Product:', product);
console.log('Product with Tax:', productWithTax);
// Expected: { name: 'Laptop Pro', price: 1260, stock: 50, category: 'Electronics' }

const stringifiedValues = mapObjectValues(product, (value) => String(value));
console.log('Stringified Values:', stringifiedValues);
// Expected: { name: 'Laptop Pro', price: '1200', stock: '50', category: 'Electronics' }

// Example with a user object to mask sensitive data
const user = {
  id: 1,
  username: 'dev_user',
  email: 'dev@example.com',
  passwordHash: 'some_super_secret_hash',
  lastLogin: new Date()
};

const userSafeView = mapObjectValues(user, (value, key) => {
  if (key === 'passwordHash') {
    return '[REDACTED]';
  }
  if (key === 'email') {
    return value.replace(/@.*/, '@***'); // Mask email domain
  }
  // For objects like Date, we might return a string representation or the original object
  if (value instanceof Date) {
    return value.toISOString();
  }
  return value;
});

console.log('Original User:', user);
console.log('User Safe View:', userSafeView);
/*
Expected (lastLogin will be an ISO string):
{
  id: 1,
  username: 'dev_user',
  email: 'dev@***',
  passwordHash: '[REDACTED]',
  lastLogin: 'YYYY-MM-DDTHH:mm:ss.sssZ'
}
*/

// Export for testing
module.exports = mapObjectValues;
