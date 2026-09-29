// Day 2: Practical application of operators and control flow
// Date: 2026-09-29

/**
 * Determines a user's access level based on their age and subscription status.
 * @param {number} userAge - The age of the user.
 * @param {boolean} hasPremiumSubscription - True if the user has a premium subscription, false otherwise.
 * @returns {string} The access status (e.g., 'Full Access', 'Limited Access', 'Guest', 'Restricted').
 */
function getUserAccessStatus(userAge, hasPremiumSubscription) {
  const MIN_ADULT_AGE = 18;

  if (userAge >= MIN_ADULT_AGE && hasPremiumSubscription) {
    return 'Full Access'; // Adults with premium subscription
  } else if (userAge >= MIN_ADULT_AGE && !hasPremiumSubscription) {
    return 'Limited Access'; // Adults without premium subscription
  } else if (userAge < MIN_ADULT_AGE && hasPremiumSubscription) {
    return 'Parental Supervision Required'; // Minors with premium, still need oversight
  } else if (userAge < MIN_ADULT_AGE && userAge >= 13 && !hasPremiumSubscription) {
    return 'Guest Access'; // Older minors without premium
  } else {
    return 'Restricted'; // Very young or other restricted cases
  }
}

// Example usage:
console.log('User 1 (25, premium):', getUserAccessStatus(25, true));   // Expected: Full Access
console.log('User 2 (30, no premium):', getUserAccessStatus(30, false)); // Expected: Limited Access
console.log('User 3 (16, premium):', getUserAccessStatus(16, true));   // Expected: Parental Supervision Required
console.log('User 4 (15, no premium):', getUserAccessStatus(15, false)); // Expected: Guest Access
console.log('User 5 (8, no premium):', getUserAccessStatus(8, false));   // Expected: Restricted

module.exports = getUserAccessStatus;
