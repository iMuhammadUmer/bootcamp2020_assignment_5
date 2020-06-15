import React, { useContext } from "react";
import "./App.css";
import counterContext from "./CounterContext";

function Child() {
  let counterValue = useContext(counterContext);
  return (
    <div>
      <h2>Context Count: {counterValue[0]}</h2>
      <button
        onClick={() => {
          counterValue[1](++counterValue[0]);
        }}
      >
        Add Context
      </button>
    </div>
  );
}

export default Child;
