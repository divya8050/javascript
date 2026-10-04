// 02-practical.js
// A simple task management utility using functions

const tasks = []; // Our simple in-memory task list

// Adds a new task to the list.
function addTask(description) {
  if (!description || description.trim() === '') {
    return "Task description cannot be empty.";
  }
  const newTask = {
    id: tasks.length + 1, // Simple ID generation
    description: description.trim(),
    completed: false
  };
  tasks.push(newTask);
  return `Task "${description}" added.`;
}

// Marks a task as completed by its ID.
const completeTask = function(taskId) {
  const taskIndex = tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    tasks[taskIndex].completed = true;
    return `Task ${taskId} marked as completed.`;
  }
  return `Task with ID ${taskId} not found.`;
};

// Lists all current tasks.
const listTasks = () => {
  if (tasks.length === 0) {
    return "No tasks in the list.";
  }
  return tasks.map(task =>
    `ID: ${task.id}, Desc: "${task.description}", Status: ${task.completed ? 'Completed' : 'Pending'}`
  ).join('\n');
};

// Clears all tasks from the list (useful for testing setup/teardown).
const clearTasks = () => {
  tasks.length = 0; // Clear array in-place
  return "All tasks cleared.";
};


// Exporting functions and a helper to get a copy of tasks for testing state
module.exports = {
  addTask,
  completeTask,
  listTasks,
  clearTasks,
  _getTasks: () => [...tasks] // Helper to get a copy of tasks for assertions without direct modification
};
