import React from "react";
import "./index.css";
import Weather from "./Weather";
import Search from "./Search";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
        <Search />
        <Weather city="Singapore"/>
        <Temperature />
    </div>
  );
}

export default App;
