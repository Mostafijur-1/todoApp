import React, { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { IoCheckmarkCircle } from "react-icons/io5";

const TodoItem = ({ todo, handleCheckboxChange, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedText, setUpdatedText] = useState(todo.text);

  const handleCheckbox = () => {
    handleCheckboxChange(todo.id);
  };

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleUpdate = () => {
    updateTodo({ ...todo, text: updatedText });
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    setUpdatedText(e.target.value);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <li className="list-group-item list-group-item-danger d-flex align-items-center">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleCheckbox}
        className="form-check-input mx-3"
      />
      {isEditing ? (
        <input
          type="text"
          value={updatedText}
          onChange={handleInputChange}
          className="form-control"
        />
      ) : (
        <span
          className={`todo-text ${todo.completed ? "completed" : ""}`}
          onClick={() => setIsEditing(true)}
        >
          <h5>{todo.text}</h5>
        </span>
      )}
      <div className="ml-auto">
        {isEditing ? (
          <IoCheckmarkCircle className="save" onClick={handleUpdate} />
        ) : (
          <>
            <AiFillEdit className="edit" onClick={handleEditClick} />
            <AiFillDelete className="delete" onClick={handleDelete} />
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
