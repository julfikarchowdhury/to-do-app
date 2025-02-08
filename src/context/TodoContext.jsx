import React, { createContext, useState, useEffect } from "react";
import { getTodos, saveTodos, clearTodos } from "../utils/storage";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState(getTodos());

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const markDoneTodo = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: true } : todo
      )
    );
  };

  const removeTodo = (todoId) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const deleteAllData = () => {
    clearTodos();
    setTodos([]);
  };

  return (
    <TodoContext.Provider
      value={{ todos, addTodo, markDoneTodo, removeTodo, deleteAllData }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
