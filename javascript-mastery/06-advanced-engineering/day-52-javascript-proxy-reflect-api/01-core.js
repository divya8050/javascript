// Day 52: Exploring JavaScript Proxy and Reflect API
// Date: 2026-11-18

// Basic Proxy for logging property access
const user = {
  name: 'Alice',
  age: 30
};

const userHandler = {
  get(target, prop, receiver) {
    console.log(`Accessing property: ${String(prop)}`);
    // Use Reflect to get the property value from the target
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Setting property: ${String(prop)} to: ${value}`);
    // Use Reflect to set the property value on the target
    return Reflect.set(target, prop, value, receiver);
  },
  has(target, prop) {
    console.log(`Checking if property '${String(prop)}' exists`);
    return Reflect.has(target, prop);
  }
};

const userProxy = new Proxy(user, userHandler);

// Demonstrate usage
userProxy.name; // Should log "Accessing property: name"
userProxy.age = 31; // Should log "Setting property: age to: 31"
console.log(userProxy.age); // Should log "Accessing property: age", then 31

'city' in userProxy; // Should log "Checking if property 'city' exists"

// Reflect API can be used independently too
const obj = { a: 1 };
Reflect.defineProperty(obj, 'b', { value: 2, configurable: true });
console.log(obj.b); // 2

Reflect.deleteProperty(obj, 'b');
console.log(obj.b); // undefined