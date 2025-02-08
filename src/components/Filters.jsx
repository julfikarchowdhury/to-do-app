import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Filters = () => {
  const { deleteAllData, setFilterValue, todoCounts } = useContext(TodoContext);

  return (
    <div className="page-header">
      <div className="filters">
        <button onClick={() => setFilterValue("all")}>
          All <span>({todoCounts.total})</span>
        </button>
        <button onClick={() => setFilterValue("pending")}>
          Pending <span>({todoCounts.pending})</span>
        </button>
        <button onClick={() => setFilterValue("completed")}>
          Completed <span>({todoCounts.completed})</span>
        </button>
      </div>
      <button className="delete" onClick={deleteAllData}>
        Delete All Data
      </button>
    </div>
  );
};

export default Filters;
