import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Table from "./Table";
import Charts from "./Charts";
import "./styles.scss";

const Router = () => (
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
);
export default Router;
