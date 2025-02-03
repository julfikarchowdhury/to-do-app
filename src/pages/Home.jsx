import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import "../assets/styles.css";
import Filters from "../components/Filters";
const Home = () => {
  return (
    <div>
      <Header />
      <div className="main-body">
        <Filters />
        <div className="to-do-container">
          <TodoList />
          <TodoForm />
        </div>
      </div>
    </div>
  );
};

export default Home;
