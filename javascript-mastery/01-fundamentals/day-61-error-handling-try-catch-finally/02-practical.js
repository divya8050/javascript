// Day 61: Practical utility for safe data processing
// Date: 2026-11-27

// Custom error for network issues (simulated)
class NetworkError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = "NetworkError";
    this.statusCode = statusCode;
  }
}

// Custom error for data validation issues
class DataValidationError extends Error {
  constructor(message, field = 'general') {
    super(message);
    this.name = "DataValidationError";
    this.field = field;
  }
}

/**
 * Simulates fetching data from an API endpoint.
 * Can simulate network errors or invalid JSON responses.
 * @param {string} url - The URL to fetch.
 * @returns {Promise<string>} - A promise that resolves with JSON string or rejects with an error.
 */
async function simulateFetch(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.includes('error-network')) {
        reject(new NetworkError("Failed to connect to server.", 503));
      } else if (url.includes('invalid-json')) {
        resolve('{"id":1, "name":"Test", "data":}'); // Malformed JSON
      } else if (url.includes('valid-data')) {
        resolve('{"id":1, "name":"Sample Item", "price":99.99}');
      } else if (url.includes('missing-price')) {
        resolve('{"id":2, "name":"Another Item"}');
      } else {
        reject(new NetworkError("Unknown endpoint.", 404));
      }
    }, 100);
  });
}

/**
 * Processes fetched data, including parsing and validation.
 * @param {string} url - The URL to fetch data from.
 * @returns {Promise<Object|null>} - Processed data object or null if an error occurred.
 */
async function safeFetchAndProcessData(url) {
  let rawData;
  let parsedData;

  try {
    // Step 1: Simulate fetching data
    console.log(`Attempting to fetch data from: ${url}`);
    rawData = await simulateFetch(url);
    console.log("Raw data received.");

    // Step 2: Parse the JSON data
    parsedData = JSON.parse(rawData);
    console.log("Data successfully parsed.");

    // Step 3: Validate the parsed data
    if (!parsedData || typeof parsedData.id !== 'number') {
      throw new DataValidationError("Data is missing or has an invalid 'id'.", 'id');
    }
    if (typeof parsedData.name !== 'string' || parsedData.name.length < 3) {
      throw new DataValidationError("Data is missing or has an invalid 'name'.", 'name');
    }
    if (typeof parsedData.price !== 'number' || parsedData.price <= 0) {
      throw new DataValidationError("Data is missing or has an invalid 'price'.", 'price');
    }

    console.log("Data successfully validated.");
    return parsedData;

  } catch (error) {
    // Catch and handle various types of errors gracefully
    if (error instanceof NetworkError) {
      console.error(`Error: Network issue (${error.statusCode}) - ${error.message}`);
    } else if (error instanceof SyntaxError) {
      console.error(`Error: Invalid JSON format - ${error.message}`);
    } else if (error instanceof DataValidationError) {
      console.error(`Error: Data validation failed for field '${error.field}' - ${error.message}`);
    } else {
      console.error("An unexpected error occurred during processing:", error.message);
    }
    return null; // Indicate failure by returning null or throwing a higher-level error
  } finally {
    console.log(`Finished processing attempt for ${url}.`);
  }
}

// --- Demonstration --- 
(async () => {
  console.log("\n--- Scenario 1: Successful Data Processing ---");
  const item1 = await safeFetchAndProcessData('https://api.example.com/data/valid-data');
  if (item1) console.log("Processed item:", item1);

  console.log("\n--- Scenario 2: Network Error ---");
  const item2 = await safeFetchAndProcessData('https://api.example.com/data/error-network');
  if (item2) console.log("Processed item:", item2);

  console.log("\n--- Scenario 3: Invalid JSON from server ---");
  const item3 = await safeFetchAndProcessData('https://api.example.com/data/invalid-json');
  if (item3) console.log("Processed item:", item3);

  console.log("\n--- Scenario 4: Data Validation Error (missing price) ---");
  const item4 = await safeFetchAndProcessData('https://api.example.com/data/missing-price');
  if (item4) console.log("Processed item:", item4);

  console.log("\n--- Scenario 5: Unknown Endpoint ---");
  const item5 = await safeFetchAndProcessData('https://api.example.com/data/non-existent');
  if (item5) console.log("Processed item:", item5);
})();

// Export for testing
module.exports = {
  NetworkError,
  DataValidationError,
  simulateFetch,
  safeFetchAndProcessData
};
