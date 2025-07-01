let todos = [];

function addTodo(task) {
  todos.push({ task: task, completed: false });
  console.log(`Added: "${task}"`);
}

function listTodos() {
  console.log("\nYour To-Do List:");
  todos.forEach((todo, index) => {
    const status = todo.completed ? "[✔]" : "[ ]";
    console.log(`${index + 1}. ${status} ${todo.task}`);
  });
}

function completeTodo(index) {
  if (index >= 1 && index <= todos.length) {
    todos[index - 1].completed = true;
    console.log(`Marked "${todos[index - 1].task}" as completed.`);
  } else {
    console.log("Invalid index");
  }
}

function deleteTodo(index) {
  if (index >= 1 && index <= todos.length) {
    const removed = todos.splice(index - 1, 1);
    console.log(`Deleted: "${removed[0].task}"`);
  } else {
    console.log("Invalid index");
  }
}

// Example usage:
addTodo("Complete JavaScript assignment");
addTodo("Push code to GitHub");
addTodo("Drink water");

listTodos();

completeTodo(2);

listTodos();

deleteTodo(1);

listTodos();
