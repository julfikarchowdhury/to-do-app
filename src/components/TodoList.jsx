import React, { useContext } from "react";
import Todocard from "./Todocard";
import { TodoContext } from "../context/TodoContext";

const TodoList = () => {
  const { todos } = useContext(TodoContext);
  console.log(todos);
  return (
    <div className="to-do-list">
      {todos.map((todo) => (
        <Todocard key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default TodoList;
