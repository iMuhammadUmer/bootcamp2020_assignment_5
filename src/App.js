import React, { useState } from "react";
import "./App.css";
import Parent from "./Parent";
import CounterContext from "./CounterContext";

function App() {
  let countState = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <CounterContext.Provider value={countState}>
          <div>
            <Parent />
          </div>
        </CounterContext.Provider>
      </header>
    </div>
  );
}

export default App;
