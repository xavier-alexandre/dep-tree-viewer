import React, { useState } from "react";
import Graph from "./components/Graph";
import "./App.css";

const App = () => {
  const [pkg, setPkg] = useState("express");
  const [version, setVersion] = useState("4.17.1");

  return (
    <div className="App">
      <header className="App-header">
        <div style={{ display: "flex" }}>
          <input type="text" id="pkgInput" placeholder="Package" />
          <input type="text" id="pkgVersion" placeholder="Version (X.Y.Z)" />
          <button
            onClick={() => {
              setVersion(document.getElementById("pkgVersion").value);
              setPkg(document.getElementById("pkgInput").value);
            }}
          >
            View
          </button>
        </div>
        <Graph pkg={pkg} version={version} />
      </header>
    </div>
  );
};

export default App;
