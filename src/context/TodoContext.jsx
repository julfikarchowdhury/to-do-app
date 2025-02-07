import React, { createContext, useState, useEffect } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [filter, setFilter] = useState("all");

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem("todos")) || []
  );

  const addTodo = (newTodo) => {
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const markDoneTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id == todoId ? { ...todo, done: true } : todo
    );
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const deleteAllData = () => {
    localStorage.clear();
    setTodos([]);
  };

  const setFilterValue = (filterValue) => {
    setFilter(filterValue);
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "completed") return todo.done;
    if (filter === "pending") return !todo.done;
    return true;
  });
  return (
    <TodoContext.Provider
      value={{
        todos: filteredTodos,
        addTodo,
        markDoneTodo,
        removeTodo,
        deleteAllData,
        setFilterValue,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
