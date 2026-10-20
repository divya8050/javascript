// Day 23: Promises and Async/Await Basics

// A simple function that returns a Promise
function simulateAsyncTask(shouldSucceed) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldSucceed) {
        resolve("Data fetched successfully!");
      } else {
        reject(new Error("Failed to fetch data."));
      }
    }, 1000); // Simulate network delay
  });
}

// Using .then(), .catch(), .finally()
console.log("--- Promise Chain Example ---");
simulateAsyncTask(true)
  .then((data) => {
    console.log("Success (chain):", data);
    return "Processed: " + data; // Return value for next .then()
  })
  .then((processedData) => {
    console.log("Second step (chain):", processedData);
  })
  .catch((error) => {
    console.error("Error (chain):", error.message);
  })
  .finally(() => {
    console.log("Promise chain finished, regardless of outcome.");
  });

simulateAsyncTask(false)
  .then((data) => {
    console.log("Success (chain error test):", data);
  })
  .catch((error) => {
    console.error("Error (chain error test):", error.message);
  })
  .finally(() => {
    console.log("Promise chain error test finished.");
  });


// Using async/await
async function performAsyncOperation() {
  console.log("\n--- Async/Await Example ---");
  try {
    const result = await simulateAsyncTask(true);
    console.log("Success (async/await):", result);

    const anotherResult = await simulateAsyncTask(false); // This will throw
    console.log("This line won't be reached if previous await rejects:", anotherResult);
  } catch (error) {
    console.error("Error (async/await):", error.message);
  } finally {
    console.log("Async operation finished, regardless of outcome.");
  }
}

performAsyncOperation();

// Another async function to demonstrate chaining with await
async function processMultipleTasks() {
    console.log("\n--- Chaining with Async/Await ---");
    try {
        const task1Result = await simulateAsyncTask(true);
        console.log("Task 1 completed:", task1Result);
        const task2Result = await simulateAsyncTask(true); // Another task
        console.log("Task 2 completed:", task2Result);
    } catch (error) {
        console.error("Error during multiple tasks:", error.message);
    }
}

processMultipleTasks();