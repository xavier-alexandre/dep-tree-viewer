import React, { useState } from "react";
import Graph from "./components/Graph";
import "./App.css";

const App = () => {
  const [pkg, setPkg] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <input type="text" id="pkgInput" />
          <button
            onClick={() => setPkg(document.getElementById("pkgInput").value)}
          >
            View
          </button>
        </div>
        <Graph pkg={pkg} />
      </header>
    </div>
  );
};

export default App;
