import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";

const Home = () => {
  return (
    <div>
      <Header />
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default Home;
