import React from "react";
import { Route, BrowserRouter, Switch, NavLink } from "react-router-dom";
import Home from "./Home";
import Table from "./Table";
import Charts from "./Charts";
import "./styles.scss";

const Router = () => (
  <BrowserRouter>
    <div>
      <nav>
        <ul className="nav_ul">
          <li className="nav_link">
            <NavLink to="/" activeClassName="active-tab">
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
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/table">
          <Table />
        </Route>
        <Route path="/charts">
          <Charts />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);
export default Router;
