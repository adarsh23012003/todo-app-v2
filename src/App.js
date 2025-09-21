import React, { useState, useEffect } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import SearchBar from "./components/SearchBar";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./contexts/ThemeContext";
import { getTodos, saveTodos } from "./utils/localStorage";

function App() {
  const [todos, setTodos] = useState([]);
  const [editTodo, setEditTodo] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTodos = getTodos();
    if (savedTodos) {
      setTodos(savedTodos);
    }
    console.log(savedTodos);
  }, []);

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const updateTodo = (updatedTodo) => {
    setTodos(
      todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
    );
    setEditTodo(null);
  };

  const handleEdit = (todo) => {
    setEditTodo(todo);
  };

  const handleCancelEdit = () => {
    setEditTodo(null);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "active") return !todo.completed;
      return true;
    })
    .filter(
      (todo) =>
        todo.text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (todo.description &&
          todo.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

  const activeTodos = todos.filter((todo) => !todo.completed);
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <ThemeProvider>
      <div className="app-container">
        <ThemeToggle />
        <div className="todo-container">
          <div className="todo-card">
            <h1 className="app-title">Todo App</h1>

            <TodoForm
              addTodo={addTodo}
              editTodo={editTodo}
              updateTodo={updateTodo}
              onCancelEdit={handleCancelEdit}
            />

            {todos.length > 0 && (
              <SearchBar
                searchTerm={searchTerm}
                onSearchChange={handleSearchChange}
                filter={filter}
                onFilterChange={handleFilterChange}
                onClearCompleted={() => setTodos(activeTodos)}
                completedCount={completedTodos.length}
              />
            )}
            <TodoList
              todos={filteredTodos}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
              editTodo={handleEdit}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
