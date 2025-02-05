import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { TodoContext } from "../context/TodoContext";

const TodoForm = () => {
  const { todos, addTodo } = useContext(TodoContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm();

  const submit = (data) => {
    // localStorage.clear();
    const newTodo = { id: Date.now(), done: false, ...data };

    const isDuplicate =
      todos.length > 0
        ? todos.some((todo) => todo.title === newTodo.title)
        : false;

    if (isDuplicate) {
      setError("title", { type: "manual", message: "Title already exists!" });
      return;
    }
    addTodo(newTodo);
    reset();
  };

  return (
    <div className="to-do-form">
      <h2 className="text-center">Add To Do</h2>
      <hr />
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must be at least 5 characters long",
              },
            })}
            type="text"
            id="title"
          />
          {errors.title && <div>{errors.title.message}</div>}
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters long",
              },
            })}
            id="description"
            rows="4"
          ></textarea>
          {errors.description && <div>{errors.description.message}</div>}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
