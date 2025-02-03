import React from "react";

const Filters = () => {
  return (
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
  );
};

export default Filters;
