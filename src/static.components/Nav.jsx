import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="cointainernav">
      <ul className="Nav">
      <li>
          <h2>Esther Vázquez</h2>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
     
        <li>
          <Link to="/AboutMe">Projects</Link>
        </li>
        <button className="button">
          <Link to="/Conctact">AboutMe</Link>
        </button>
      </ul>
    </nav>
  );
};

export default Nav;
