import React from "react";
import { NavLink } from "react-router-dom";
import "./styles.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className="nav_ul">
        <li className="nav_link">
          <NavLink exact to="/" activeClassName="active-tab">
            Home
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/table" activeClassName="active-tab">
            Table
          </NavLink>
        </li>
        <li className="nav_link">
          <NavLink to="/charts" activeClassName="active-tab">
            Charts
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
