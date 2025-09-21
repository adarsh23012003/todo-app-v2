import React, { useState, useEffect } from "react";

const TodoForm = ({ addTodo, editTodo, updateTodo, onCancelEdit }) => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");

  // If editing, populate form with current todo data
  useEffect(() => {
    if (editTodo) {
      setText(editTodo.text || "");
      setDescription(editTodo.description || "");
    }
  }, [editTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (editTodo) {
      // Update existing todo
      const updatedTodo = {
        ...editTodo,
        text: text.trim(),
        description: description.trim(),
        date: new Date().toISOString(),
      };
      updateTodo(updatedTodo);
    } else {
      // Add new todo
      const newTodo = {
        id: Date.now().toString(),
        text: text.trim(),
        description: description.trim(),
        completed: false,
        date: new Date().toISOString(),
      };
      addTodo(newTodo);
    }

    // Reset form
    setText("");
    setDescription("");
  };

  // const handleCancel = () => {
  //   setText('');
  //   setDescription('');
  //   if (editTodo) {
  //     onCancelEdit();
  //   }
  // };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <div className="form-group">
        <input
          type="text"
          placeholder="Task title"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="form-control"
          required
        />
      </div>

      <div className="form-group">
        <textarea
          placeholder="Task description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <button type="submit" className="btn btn-primary">
          {editTodo ? "Update Task" : "Add Task"}
        </button>
        {/* <button 
          type="button" 
          onClick={handleCancel} 
          className="btn btn-secondary"
        >
          Cancel
        </button> */}
      </div>
    </form>
  );
};

export default TodoForm;
