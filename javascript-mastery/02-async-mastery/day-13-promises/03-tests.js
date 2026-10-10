// Day 13: Promises - Self-contained Tests

const assert = require('assert');

// Mocking the functions for testing purposes
const mockUserDatabase = {
  1: { id: 1, name: "Test User 1", email: "test1@example.com" },
  2: { id: 2, name: "Test User 2", email: "test2@example.com" }
};

function mockFetchUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = mockUserDatabase[userId];
      if (user) {
        resolve(user);
      } else {
        reject(new Error(`User with ID ${userId} not found.`));
      }
    }, 10); // Shorter delay for tests
  });
}

function mockFetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 1) {
        resolve(["Post A", "Post B"]);
      } else if (userId === 2) {
        resolve(["Post C"]);
      } else {
        reject(new Error(`No posts for user ${userId}.`));
      }
    }, 5); // Shorter delay for tests
  });
}


async function runTests() {
  console.log("Running promise tests...\n");

  // Test Case 1: Successful user fetch
  try {
    const user = await mockFetchUserData(1);
    assert.strictEqual(user.id, 1, "Test 1 Failed: User ID should be 1");
    assert.strictEqual(user.name, "Test User 1", "Test 1 Failed: User name mismatch");
    console.log("Test 1 Passed: Successfully fetched user 1.");
  } catch (error) {
    console.error("Test 1 Failed:", error.message);
  }

  // Test Case 2: Failed user fetch (user not found)
  try {
    await mockFetchUserData(99);
    console.error("Test 2 Failed: Should have rejected for non-existent user.");
  } catch (error) {
    assert.strictEqual(error.message, "User with ID 99 not found.", "Test 2 Failed: Error message mismatch");
    console.log("Test 2 Passed: Correctly rejected for non-existent user.");
  }

  // Test Case 3: Chaining promises - fetch user then posts
  try {
    const user = await mockFetchUserData(2);
    const posts = await mockFetchUserPosts(user.id);
    assert.strictEqual(user.name, "Test User 2", "Test 3 Failed: User name mismatch in chain");
    assert.deepStrictEqual(posts, ["Post C"], "Test 3 Failed: Posts mismatch in chain");
    console.log("Test 3 Passed: Successfully fetched user 2 and their posts.");
  } catch (error) {
    console.error("Test 3 Failed:", error.message);
  }

  // Test Case 4: Chaining promises - user found, but no posts
  try {
    const user = await mockFetchUserData(1); // User 1 exists
    await mockFetchUserPosts(100); // No posts for user 100
    console.error("Test 4 Failed: Should have rejected for no posts.");
  } catch (error) {
    assert.strictEqual(error.message, "No posts for user 100.", "Test 4 Failed: Error message mismatch for no posts");
    console.log("Test 4 Passed: Correctly rejected when no posts found.");
  }

  // Test Case 5: Promise.all - multiple successful fetches
  try {
    const [user1, user2] = await Promise.all([
      mockFetchUserData(1),
      mockFetchUserData(2)
    ]);
    assert.strictEqual(user1.name, "Test User 1", "Test 5 Failed: Promise.all user1 name");
    assert.strictEqual(user2.name, "Test User 2", "Test 5 Failed: Promise.all user2 name");
    console.log("Test 5 Passed: Promise.all successfully fetched multiple users.");
  } catch (error) {
    console.error("Test 5 Failed:", error.message);
  }

  // Test Case 6: Promise.all - one rejection
  try {
    await Promise.all([
      mockFetchUserData(1),
      mockFetchUserData(99) // This will reject
    ]);
    console.error("Test 6 Failed: Promise.all should have rejected.");
  } catch (error) {
    assert.strictEqual(error.message, "User with ID 99 not found.", "Test 6 Failed: Promise.all error message");
    console.log("Test 6 Passed: Promise.all correctly rejected on first error.");
  }

  console.log("\nAll promise tests complete.");
}

runTests();
