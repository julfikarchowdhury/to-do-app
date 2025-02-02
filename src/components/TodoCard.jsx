import React from "react";

const TodoCard = () => {
  return (
    <div className="todo-card">
      <div className="todo-info">
        <h4>Thats a to do heading</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          voluptatum maxime provident veritatis laboriosam atque laudantium
          suscipit consequuntur, possimus distinctio, illum ex veniam
          reiciendis, et perspiciatis quam alias eveniet doloribus dolore minus!
          Aliquid temporibus consectetur laboriosam ratione eius labore nisi
          facilis, doloribus excepturi ab repudiandae expedita nostrum
          repellendus quam tempora.
        </p>
      </div>
      <div className="todo-buttons">
        <button className="done">Done</button>
        <button className="delete">Delete</button>
      </div>
    </div>
  );
};

export default TodoCard;
