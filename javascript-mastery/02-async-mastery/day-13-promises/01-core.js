// Day 13: Promises - Core Concepts

// A basic promise that resolves after a delay
const simpleResolvePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Data successfully fetched!");
  }, 100);
});

// A basic promise that rejects after a delay
const simpleRejectPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Failed to fetch data!"));
  }, 150);
});

// Using .then() for successful resolution
console.log("Starting simpleResolvePromise...");
simpleResolvePromise
  .then((message) => {
    console.log("Resolved:", message);
  })
  .catch((error) => {
    console.error("Caught error (should not happen):", error.message);
  })
  .finally(() => {
    console.log("simpleResolvePromise finished.\n");
  });

// Using .catch() for error handling
console.log("Starting simpleRejectPromise...");
simpleRejectPromise
  .then((message) => {
    console.log("Resolved (should not happen):", message);
  })
  .catch((error) => {
    console.error("Rejected:", error.message);
  })
  .finally(() => {
    console.log("simpleRejectPromise finished.\n");
  });

// Chaining promises
const chainablePromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve(10);
  }, 50);
});

chainablePromise
  .then((value) => {
    console.log("First step in chain:", value); // 10
    return value * 2; // Returns a new promise resolving to 20
  })
  .then((value) => {
    console.log("Second step in chain:", value); // 20
    return value + 5;
  })
  .then((value) => {
    console.log("Third step in chain:", value); // 25
  })
  .catch((error) => {
    console.error("Chain error:", error.message);
  })
  .finally(() => {
    console.log("Promise chain finished.\n");
  });

// Promise.resolve and Promise.reject static methods
const instantResolve = Promise.resolve("Immediately resolved!");
instantResolve.then(msg => console.log("Instant resolve:", msg));

const instantReject = Promise.reject(new Error("Immediately rejected!"));
instantReject.catch(err => console.error("Instant reject:", err.message));
