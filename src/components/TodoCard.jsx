import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const TodoCard = ({ todo }) => {
  const { markDoneTodo, removeTodo } = useContext(TodoContext);

  return (
    <div className="todo-card">
      <div className="todo-info">
        <h3>{todo.title}</h3>
        <p>{todo.description}</p>
      </div>
      <div className="todo-buttons">
        {todo.done ? (
          <button className="completed">Completed</button>
        ) : (
          <button className="done" onClick={() => markDoneTodo(todo.id)}>
            Mark Done
          </button>
        )}

        <button className="delete" onClick={() => removeTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
