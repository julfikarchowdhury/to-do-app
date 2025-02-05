import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

const Filters = () => {
  const { deleteAllData } = useContext(TodoContext);

  return (
    <div className="page-header">
      <div className="filters">
        <button>
          All <span>(2)</span>
        </button>
        <button>
          Pending <span>(3)</span>
        </button>
        <button>
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
