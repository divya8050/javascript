const target = {
  message1: "hello",
  message2: "world"
};

const handler = {
  get(target, property, receiver) {
    // Log property access
    console.log(`Getting property: '${String(property)}'`);
    return Reflect.get(target, property, receiver);
  },
  set(target, property, value, receiver) {
    // Log property modification
    console.log(`Setting property: '${String(property)}' to '${value}'`);
    return Reflect.set(target, property, value, receiver);
  }
};

const proxy = new Proxy(target, handler);

// Accessing properties via proxy
console.log(proxy.message1);
console.log(proxy.message2);

// Modifying properties via proxy
proxy.message1 = "hi";
proxy.message2 = "everyone";

console.log(target.message1); // original target is also updated
console.log(proxy.message1);

// A property that doesn't exist
console.log(proxy.nonExistent);
proxy.newProperty = 123;
console.log(proxy.newProperty);
