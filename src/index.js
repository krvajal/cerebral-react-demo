import React from "react";
import ReactDOM from "react-dom";
import { Container } from "@cerebral/react";
import controller from "./controller";

ReactDOM.render(
  <Container controller={controller}>
    <div>Hello</div>
  </Container>,
  document.getElementById("root")
);
