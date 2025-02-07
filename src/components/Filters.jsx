import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Filters = () => {
  const { deleteAllData, setFilterValue } = useContext(TodoContext);

  return (
    <div className="page-header">
      <div className="filters">
        <button onClick={() => setFilterValue("all")}>
          All <span>(2)</span>
        </button>
        <button onClick={() => setFilterValue("pending")}>
          Pending <span>(3)</span>
        </button>
        <button onClick={() => setFilterValue("completed")}>
          Completed <span>(2)</span>
        </button>
      </div>
      <button className="delete" onClick={deleteAllData}>
        Delete All Data
      </button>
    </div>
  );
};

export default Filters;
