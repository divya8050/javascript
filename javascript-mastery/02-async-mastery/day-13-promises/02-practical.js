// Day 13: Promises - Practical Application

// Simulate fetching user data from a backend API
const userDatabase = {
  101: { id: 101, name: "Alice Smith", email: "alice@example.com" },
  102: { id: 102, name: "Bob Johnson", email: "bob@example.com" },
  103: { id: 103, name: "Charlie Brown", email: "charlie@example.com" }
};

// Simulates an API call to fetch user data.
// Returns a Promise that resolves with user data or rejects with an error.
function fetchUserData(userId) {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    setTimeout(() => {
      const user = userDatabase[userId];
      if (user) {
        resolve(user); // Data found
      } else {
        reject(new Error(`User with ID ${userId} not found.`)); // User not found
      }
    }, 200); // 200ms delay
  });
}

// Simulates fetching user posts based on userId.
function fetchUserPosts(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId === 101) {
        resolve(["Post 1 by Alice", "Post 2 by Alice"]);
      } else if (userId === 102) {
        resolve(["Bob's first post"]);
      } else {
        reject(new Error(`No posts found for user ${userId}.`));
      }
    }, 150);
  });
}


// --- Usage Examples ---

// Fetching a known user and chaining to get their posts
console.log("Attempting to fetch user 101...");
fetchUserData(101)
  .then((user) => {
    console.log(`Fetched user: ${user.name}, Email: ${user.email}`);
    return fetchUserPosts(user.id); // Chain to fetch posts
  })
  .then((posts) => {
    console.log("User 101 posts:", posts);
  })
  .catch((error) => {
    console.error("Error fetching user 101 or their posts:", error.message);
  })
  .finally(() => {
    console.log("Finished attempt for user 101.\n");
  });

// Fetching a non-existent user
console.log("Attempting to fetch user 999...");
fetchUserData(999)
  .then((user) => {
    console.log("Fetched (should not happen):", user.name);
  })
  .catch((error) => {
    console.error("Error fetching user 999:", error.message);
  })
  .finally(() => {
    console.log("Finished attempt for user 999.\n");
  });

// Using async/await for cleaner promise handling
async function displayUserAndPosts(userId) {
  try {
    console.log(`Attempting to display user ${userId} with async/await...`);
    const user = await fetchUserData(userId);
    console.log(`Async/Await: User ${user.id}: ${user.name}`);
    const posts = await fetchUserPosts(user.id);
    console.log(`Async/Await: Posts for ${user.name}: ${posts}`);
  } catch (error) {
    console.error(`Async/Await Error for user ${userId}:`, error.message);
  } finally {
    console.log(`Async/Await finished for user ${userId}.\n`);
  }
}

displayUserAndPosts(102);
displayUserAndPosts(104); // This one will fail to fetch user
