import React from "react";
import ReactDOM from "react-dom";
import { Container, connect } from "@cerebral/react";
import controller from "./controller";
import { state, signal } from "cerebral/tags";

// connected component
const NameInput = connect(
  {
    value: state`name`,
    setName: signal`setName`
  },
  ({ value, setName }) => (
    <div>
      <input
        value={value}
        onChange={evt => setName({ name: evt.target.value })}
      />
      <div>{value}</div>
    </div>
  )
);

ReactDOM.render(
  <Container controller={controller}>
    <NameInput />
  </Container>,
  document.getElementById("root")
);
