// Prototype method sharing

function Task(title, priority) {
  this.title = title;
  this.priority = priority;
  this.completed = false;
}

// Shared method on prototype
Task.prototype.complete = function () {
  this.completed = true;
  return this.title + ' completed';
};

const task1 = new Task('Fix bug', 'high');
console.log(task1.complete());

module.exports = { Task };
