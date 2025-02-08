import React, { createContext, useState, useEffect } from "react";
import { getTodos, saveTodos, clearTodos } from "../utils/storage";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  // State Management
  const [todos, setTodos] = useState(getTodos());
  const [filter, setFilter] = useState("all");
  const [todoCounts, setTodoCounts] = useState({
    total: 0,
    pending: 0,
    completed: 0,
  });

  useEffect(() => {
    saveTodos(todos);

    const total = todos.length;
    const pending = todos.filter((todo) => !todo.done).length;
    const completed = todos.filter((todo) => todo.done).length;

    setTodoCounts({ total, pending, completed });
  }, [todos]);

  // CRUD Operations
  const addTodo = (newTodo) => setTodos((prev) => [...prev, newTodo]);

  const markDoneTodo = (todoId) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === todoId ? { ...todo, done: true } : todo))
    );
  };

  const removeTodo = (todoId) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));
  };

  const deleteAllData = () => {
    clearTodos();
    setTodos([]);
  };

  // Filtering Logic
  const setFilterValue = (filterValue) => setFilter(filterValue);

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
        todoCounts,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider, TodoContext };
