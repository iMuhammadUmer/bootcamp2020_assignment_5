import React, { useContext } from "react";
import "./App.css";
import counterContext from "./CounterContext";

function Child() {
  let counterValue = useContext(counterContext);
  return (
    <div>
      <h2>Counter: {counterValue}</h2>
      <button>Add Count</button>
    </div>
  );
}

export default Child;
