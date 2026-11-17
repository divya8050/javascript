// Day 51 of JavaScript mastery.
// Date: 2026-11-17.
// Topic: Object Iteration and Transformation

const userProfile = {
  id: 'usr_001',
  name: 'Alice Johnson',
  email: 'alice.j@example.com',
  age: 30,
  isActive: true,
  roles: ['admin', 'editor']
};

console.log('--- Object.keys() ---');
const keys = Object.keys(userProfile);
console.log(keys); // ['id', 'name', 'email', 'age', 'isActive', 'roles']

// Iterating over keys
for (const key of keys) {
  console.log(`Key: ${key}`);
}

console.log('
--- Object.values() ---');
const values = Object.values(userProfile);
console.log(values); // ['usr_001', 'Alice Johnson', 'alice.j@example.com', 30, true, ['admin', 'editor']]

// Iterating over values
for (const value of values) {
  console.log(`Value: ${value}`);
}

console.log('
--- Object.entries() ---');
const entries = Object.entries(userProfile);
console.log(entries);
/*
[
  ['id', 'usr_001'],
  ['name', 'Alice Johnson'],
  ['email', 'alice.j@example.com'],
  ['age', 30],
  ['isActive', true],
  ['roles', [ 'admin', 'editor' ]]
]
*/

// Iterating over entries
for (const [key, value] of entries) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// Example: filter out non-string values using entries and rebuild object
const stringProperties = Object.entries(userProfile)
  .filter(([, value]) => typeof value === 'string')
  .reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});

console.log('
--- String properties only ---');
console.log(stringProperties); // { id: 'usr_001', name: 'Alice Johnson', email: 'alice.j@example.com' }
