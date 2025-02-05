import React from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import TodoForm from "../components/TodoForm";
import "../assets/styles.css";
import Filters from "../components/Filters";
import { TodoProvider } from "../context/TodoContext";
const Home = () => {
  //localStorage.clear();
  return (
    <div>
      <TodoProvider>
        
        <Header />
        <div className="main-body">
          <Filters />
          <div className="to-do-container">
            <TodoList />
            <TodoForm />
          </div>
        </div>
      </TodoProvider>
    </div>
  );
};

export default Home;
