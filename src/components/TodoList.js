import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, handleCheckboxChange, deleteTodo, updateTodo }) => {
  return (
    <ul className="list-group mt-4">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleCheckboxChange={handleCheckboxChange}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      ))}
      <style jsx>{`
        @media (max-width: 600px) {
          .list-group {
            padding-left: 10px;
            padding-right: 10px;
          }
        }
      `}</style>
    </ul>
  );
};

export default TodoList;
