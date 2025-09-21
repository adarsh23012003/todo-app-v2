import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo }) => {
  if (todos.length === 0) {
    return (
      <div className="empty-state">
        No tasks found. Add a new task to get started!
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
          setEditTodo={editTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;
