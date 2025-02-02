import React from "react";
import { useForm } from "react-hook-form";

const TodoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();
  const submit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <label htmlFor="title">Title</label>
        <input
          {...register("email", {
            required: "Email is required",
            minLength: {
              value: 5,
              message: "Email must be at least 5 characters long",
            },
          })}
          type="text"
          id="email"
        />
        {errors.email && <div>{errors.email.message}</div>}

        <label htmlFor="description">Description</label>
        <textarea
          {...register("description", {
            required: "Email is required",
            minLength: {
              value: 10,
              message: "Description must be at least 10 characters long",
            },
          })}
          id="description"
        ></textarea>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Loading" : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
