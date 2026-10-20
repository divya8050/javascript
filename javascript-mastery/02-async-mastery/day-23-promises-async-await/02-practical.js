// Day 23: Practical Async Data Fetching

// Simulate a database or API endpoint for users
const mockUsersDb = {
  101: { id: 101, name: "Alice Smith", email: "alice@example.com", status: "active" },
  102: { id: 102, name: "Bob Johnson", email: "bob@example.com", status: "inactive" },
  103: { id: 103, name: "Charlie Brown", email: "charlie@example.com", status: "active" }
};

/**
 * Simulates fetching a user by ID from an API.
 * @param {number} userId - The ID of the user to fetch.
 * @returns {Promise<object>} A promise that resolves with user data or rejects with an error.
 */
async function fetchUserById(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUsersDb[userId];
      if (user) {
        resolve({
          success: true,
          data: user,
          message: `User ${userId} fetched successfully.`
        });
      } else {
        reject({
          success: false,
          error: new Error(`User with ID ${userId} not found.`),
          message: `Failed to fetch user ${userId}.`
        });
      }
    }, Math.random() * 500 + 200); // Simulate variable network delay
  });
}

/**
 * Fetches multiple users concurrently and returns their data.
 * Handles individual user fetch failures.
 * @param {number[]} userIds - An array of user IDs to fetch.
 * @returns {Promise<Array<object>>} A promise that resolves with an array of user data or error objects.
 */
async function fetchMultipleUsers(userIds) {
  const promises = userIds.map(async (id) => {
    try {
      const result = await fetchUserById(id);
      return result.data; // Return just the user data for success
    } catch (errorObj) {
      console.warn(`Warning: ${errorObj.message}`);
      return { id: id, error: errorObj.error.message }; // Return error info for failed users
    }
  });
  return Promise.all(promises);
}

// Export functions for testing
module.exports = {
  fetchUserById,
  fetchMultipleUsers
};

// Example Usage (only if run directly, not imported)
async function runExamples() {
  console.log("--- Fetching Single User ---");
  try {
    const user101 = await fetchUserById(101);
    console.log("Fetched user 101:", user101.data.name);
  } catch (errorObj) {
    console.error("Error fetching user 101:", errorObj.error.message);
  }

  try {
    const user999 = await fetchUserById(999);
    console.log("Fetched user 999:", user999.data.name); // This won't run
  } catch (errorObj) {
    console.error("Error fetching user 999:", errorObj.error.message);
  }

  console.log("\n--- Fetching Multiple Users ---");
  const userIdsToFetch = [101, 102, 999, 103];
  const fetchedUserData = await fetchMultipleUsers(userIdsToFetch);
  console.log("All fetched user data (including errors):", fetchedUserData);
}

if (require.main === module) {
  runExamples();
}