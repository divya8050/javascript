// 01-core.js

// Day 8: JavaScript Objects - Core Concepts

// 1. Object literal creation
const user = {
  firstName: 'Alice',
  lastName: 'Smith',
  age: 30,
  email: 'alice@example.com',
  isActive: true,
  hobbies: ['reading', 'hiking'],
  address: {
    street: '123 Main St',
    city: 'Anytown',
    zip: '12345'
  }
};

console.log('Initial user object:', user);

// 2. Accessing properties
console.log('\nAccessing properties:');
console.log('First Name:', user.firstName); // Dot notation
console.log('Email:', user['email']);     // Bracket notation (useful for dynamic keys)
const propName = 'age';
console.log('Age (dynamic):', user[propName]);
console.log('City:', user.address.city);

// 3. Adding new properties
user.phone = '555-1234';
console.log('\nUser with phone:', user);

// 4. Modifying existing properties
user.age = 31;
user.hobbies.push('coding');
console.log('\nUser after modification:', user);

// 5. Deleting properties
delete user.isActive;
console.log('\nUser after deleting isActive:', user);

// 6. Iterating over object properties
console.log('\nIterating properties with for...in:');
for (const key in user) {
  // Ensure it's an own property, not inherited from prototype chain
  if (Object.prototype.hasOwnProperty.call(user, key)) {
    console.log(`${key}: ${user[key]}`);
  }
}

// 7. Common Object methods
console.log('\nUsing Object.keys(), Object.values(), Object.entries():');
const userKeys = Object.keys(user);
console.log('Keys:', userKeys);

const userValues = Object.values(user);
console.log('Values:', userValues);

const userEntries = Object.entries(user);
console.log('Entries:', userEntries);

// 8. Merging objects (using Object.assign and spread syntax)
const defaultSettings = {
  theme: 'dark',
  notifications: true,
  language: 'en'
};

const userSettings = {
  theme: 'light',
  language: 'es'
};

// Object.assign()
const finalSettingsAssign = Object.assign({}, defaultSettings, userSettings);
console.log('\nMerged settings (assign):', finalSettingsAssign);

// Spread syntax (ES6+)
const finalSettingsSpread = { ...defaultSettings, ...userSettings, notifications: false }; // Can override directly
console.log('Merged settings (spread):', finalSettingsSpread);