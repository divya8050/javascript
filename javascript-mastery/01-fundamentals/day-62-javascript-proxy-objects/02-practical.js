// Function to create an observable object
// It takes an object and a callback function for changes
function createObservable(obj, onChangeCallback) {
  const handler = {
    set(target, property, value, receiver) {
      const oldValue = target[property];
      // Only trigger callback if value actually changes
      if (oldValue !== value) {
        const result = Reflect.set(target, property, value, receiver);
        onChangeCallback(property, oldValue, value, target);
        return result;
      }
      return true; // Return true even if value didn't change
    },
    deleteProperty(target, property) {
      const oldValue = target[property];
      const result = Reflect.deleteProperty(target, property);
      if (result) {
        onChangeCallback(property, oldValue, undefined, target, 'delete');
      }
      return result;
    }
  };

  return new Proxy(obj, handler);
}

// Example usage:
let userProfile = {
  name: "Alice",
  age: 30,
  status: "active"
};

const observableProfile = createObservable(userProfile, (key, oldVal, newVal, obj, action = 'set') => {
  if (action === 'delete') {
    console.log(`Property '${String(key)}' (was: '${oldVal}') was deleted.`);
  } else {
    console.log(`Property '${String(key)}' changed from '${oldVal}' to '${newVal}'. Current object:`, obj);
  }
});

console.log("Initial profile:", observableProfile);

observableProfile.age = 31; // Triggers callback
observableProfile.status = "inactive"; // Triggers callback
observableProfile.status = "inactive"; // Does not trigger callback (value unchanged)
observableProfile.city = "New York"; // Triggers callback for new property

delete observableProfile.status; // Triggers callback for deletion

console.log("Final profile:", observableProfile);
