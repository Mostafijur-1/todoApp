import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleCheckboxChange = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === updatedTodo.id) {
        return updatedTodo;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container bg-secondary mt-5">
      <h1 className="text-center mt-1 todo-title">Make Your Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList
        todos={todos}
        handleCheckboxChange={handleCheckboxChange}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          box-shadow: 10px 10px 10px black;
          border-radius: 5px;
          outline: groove 5px black;
        }

        @media (max-width: 600px) {
          .container {
            padding: 10px;
          }
        }

        .todo-title {
          color: yellow;
          font-size: 1.5rem;
        }

        @media (max-width: 600px) {
          .todo-title {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
