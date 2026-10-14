// 02-practical.js
// Day 17: Closures and Scope - Practical Application
// Date: 2026-10-14

/**
 * Creates a simple todo manager using the module pattern
 * with closures to keep the 'todos' array private.
 */
function createTodoManager() {
  let todos = []; // This array is private to each manager instance

  return {
    addTodo: function(task) {
      const newTodo = { id: todos.length + 1, task: task, completed: false };
      todos.push(newTodo);
      return newTodo.id;
    },
    getTodos: function() {
      // Return a shallow copy to prevent external modification of the internal array
      return [...todos];
    },
    markComplete: function(id) {
      const todo = todos.find(t => t.id === id);
      if (todo) {
        todo.completed = true;
        return true;
      }
      return false;
    },
    getCompletedCount: function() {
      return todos.filter(t => t.completed).length;
    }
  };
}

// Example usage:
// const myTodoApp = createTodoManager();
// myTodoApp.addTodo('Learn closures');
// myTodoApp.addTodo('Practice JS daily');
// console.log(myTodoApp.getTodos());
// myTodoApp.markComplete(1);
// console.log(myTodoApp.getCompletedCount()); // 1

// const anotherTodoApp = createTodoManager(); // Independent instance
// anotherTodoApp.addTodo('Buy groceries');
// console.log(anotherTodoApp.getTodos());

// module.exports = { createTodoManager };