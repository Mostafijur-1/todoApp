import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() !== "") {
      addTodo({
        id: Date.now(),
        text: text,
        completed: false,
      });
      setText("");
    }
  };

  return (
    <form className="text-center p-3" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new todo"
        required
        className="input-todo"
      />
      <button type="submit" className="add-todo">
        +
      </button>
    </form>
  );
};

export default TodoForm;
