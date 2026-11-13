// Day 47: Map and Set Objects

// --- Map Basics ---
const userRoles = new Map();

// Setting values
userRoles.set('alice', 'admin');
userRoles.set('bob', 'editor');
userRoles.set('charlie', 'viewer');

// Getting values
console.log('Alice role:', userRoles.get('alice')); // admin
console.log('Dave role:', userRoles.get('dave'));   // undefined

// Checking existence
console.log('Has Bob?', userRoles.has('bob'));     // true
console.log('Has Eve?', userRoles.has('eve'));     // false

// Size of the map
console.log('Map size:', userRoles.size); // 3

// Deleting entries
userRoles.delete('charlie');
console.log('Map size after delete:', userRoles.size); // 2
console.log('Has Charlie?', userRoles.has('charlie')); // false

// Iterating over Map
console.log('
--- Map Iteration ---');
for (const [user, role] of userRoles) {
  console.log(`${user} has role ${role}`);
}

// Map can use any type as key, even objects
const user1 = { id: 1, name: 'Alice' };
const user2 = { id: 2, name: 'Bob' };
const userSettings = new Map();
userSettings.set(user1, { theme: 'dark', notifications: true });
userSettings.set(user2, { theme: 'light', notifications: false });

console.log('User 1 settings:', userSettings.get(user1));


// --- Set Basics ---
const uniqueIDs = new Set();

// Adding values
uniqueIDs.add(101);
uniqueIDs.add(102);
uniqueIDs.add(103);
uniqueIDs.add(101); // Adding duplicate has no effect

// Checking existence
console.log('
--- Set Basics ---');
console.log('Has 102?', uniqueIDs.has(102)); // true
console.log('Has 104?', uniqueIDs.has(104)); // false

// Size of the set
console.log('Set size:', uniqueIDs.size); // 3

// Deleting values
uniqueIDs.delete(103);
console.log('Set size after delete:', uniqueIDs.size); // 2
console.log('Has 103?', uniqueIDs.has(103)); // false

// Iterating over Set
console.log('
--- Set Iteration ---');
for (const id of uniqueIDs) {
  console.log('Unique ID:', id);
}

// Clearing the Set
uniqueIDs.clear();
console.log('Set size after clear:', uniqueIDs.size); // 0