// Day 47: Practical Map and Set usage - Simple Analytics Tracker

class AnalyticsTracker {
  constructor() {
    this.eventCounts = new Map();   // Stores eventName -> count
    this.uniqueUsers = new Set();   // Stores unique user IDs
    this.userActions = new Map();   // Stores userId -> Set<actionName>
  }

  // Records an event and increments its count
  recordEvent(eventName) {
    const currentCount = this.eventCounts.get(eventName) || 0;
    this.eventCounts.set(eventName, currentCount + 1);
  }

  // Records a user visit and adds to unique users
  recordUserVisit(userId) {
    this.uniqueUsers.add(userId);
  }

  // Records an action performed by a user
  recordUserAction(userId, actionName) {
    if (!this.userActions.has(userId)) {
      this.userActions.set(userId, new Set());
    }
    this.userActions.get(userId).add(actionName);
  }

  // Gets the count for a specific event
  getEventCount(eventName) {
    return this.eventCounts.get(eventName) || 0;
  }

  // Gets the total number of unique users
  getUniqueUserCount() {
    return this.uniqueUsers.size;
  }

  // Gets all unique actions performed by a specific user
  getUserActions(userId) {
    // Convert Set to Array for easier consumption
    return Array.from(this.userActions.get(userId) || new Set());
  }

  // Clears all tracking data
  clearAll() {
    this.eventCounts.clear();
    this.uniqueUsers.clear();
    this.userActions.clear();
  }
}

// Example Usage:
const tracker = new AnalyticsTracker();

tracker.recordEvent('page_view');
tracker.recordEvent('page_view');
tracker.recordEvent('button_click');
tracker.recordEvent('page_view');

tracker.recordUserVisit('user-abc');
tracker.recordUserVisit('user-xyz');
tracker.recordUserVisit('user-abc'); // Duplicate, won't increase count

tracker.recordUserAction('user-abc', 'add_to_cart');
tracker.recordUserAction('user-xyz', 'view_product');
tracker.recordUserAction('user-abc', 'checkout');
tracker.recordUserAction('user-abc', 'add_to_cart'); // Duplicate action for user

console.log('Page views:', tracker.getEventCount('page_view'));      // 3
console.log('Button clicks:', tracker.getEventCount('button_click')); // 1
console.log('Unique users:', tracker.getUniqueUserCount());           // 2
console.log('User ABC actions:', tracker.getUserActions('user-abc')); // ['add_to_cart', 'checkout']
console.log('User XYZ actions:', tracker.getUserActions('user-xyz')); // ['view_product']
console.log('User DEF actions:', tracker.getUserActions('user-def')); // []

// Export for testing
module.exports = AnalyticsTracker;
