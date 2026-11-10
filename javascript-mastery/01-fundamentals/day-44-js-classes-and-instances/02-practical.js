class TaskManager {
  constructor() {
    this.tasks = [];
    this.nextTaskId = 1;
  }

  // Add a new task to the manager
  addTask(description, dueDate = null) {
    const newTask = {
      id: this.nextTaskId++,
      description: description,
      dueDate: dueDate,
      completed: false,
      createdAt: new Date()
    };
    this.tasks.push(newTask);
    return newTask;
  }

  // Mark a task as completed by its ID
  markTaskComplete(id) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.completed = true;
      return true; // Task found and updated
    }
    return false; // Task not found
  }

  // Get all tasks that are not yet completed
  getPendingTasks() {
    return this.tasks.filter(t => !t.completed);
  }

  // Get all completed tasks
  getCompletedTasks() {
    return this.tasks.filter(t => t.completed);
  }

  // Get a task by its ID
  getTaskById(id) {
    return this.tasks.find(t => t.id === id);
  }
}

// Example usage:
// const myTasks = new TaskManager();
// myTasks.addTask('Review JS classes', '2026-11-12');
// myTasks.addTask('Plan next project');
// myTasks.markTaskComplete(1);
// console.log(myTasks.getPendingTasks());