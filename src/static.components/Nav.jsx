import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="cointainernav">
      <ul className="Nav">
      <li>
          <img src="estherp.png" alt="logo"/>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
     
        <li>
          <Link to="/AboutMe">Project</Link>
        </li>
        <button className="button">
          <Link to="/Conctact">Say Hello</Link>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
