import { render } from "react-dom";

import App from "./App";
import Router from "./Router";

const rootElement = document.getElementById("root");
render(
  <Router>
    <App />
  </Router>,
  rootElement
);
