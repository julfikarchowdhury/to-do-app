import React from "react";
import Filters from "./Filters";

const Header = () => {
  return (
    <div className="header">
      <h3>TO DO App</h3>
      <Filters />
      <div className="themeChnager">dark/light</div>
    </div>
  );
};

export default Header;
