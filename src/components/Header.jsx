import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const changeTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="header">
      <h2 className="logo">TO DO App</h2>
      <div className="theme-chnager" onClick={changeTheme}>
        {theme === "light" ? <FaMoon /> : <FaSun />}
      </div>
    </div>
  );
};

export default Header;
