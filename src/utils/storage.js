export const getTodos = () => JSON.parse(localStorage.getItem("todos")) || [];

export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const clearTodos = () => {
  localStorage.removeItem("todos");
};
