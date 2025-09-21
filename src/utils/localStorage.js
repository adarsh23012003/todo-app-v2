// localStorage utility functions

// Get todos from localStorage
export const getTodos = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

// Save todos to localStorage
export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Add a new todo
export const addTodo = (todo) => {
  const todos = getTodos();
  todos.push(todo);
  saveTodos(todos);
  return todos;
};

// Update an existing todo
export const updateTodo = (updatedTodo) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === updatedTodo.id ? updatedTodo : todo
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};

// Delete a todo
export const deleteTodo = (id) => {
  const todos = getTodos();
  const filteredTodos = todos.filter((todo) => todo.id !== id);
  saveTodos(filteredTodos);
  return filteredTodos;
};

// Delete all todos
export const deleteAllTodos = () => {
  localStorage.removeItem("todos");
  return [];
};

// Toggle todo completion status
export const toggleTodoStatus = (id) => {
  const todos = getTodos();
  const updatedTodos = todos.map((todo) =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
  saveTodos(updatedTodos);
  return updatedTodos;
};
