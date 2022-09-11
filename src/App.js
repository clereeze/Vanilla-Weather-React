import React from "react";
import "./index.css";
import Weather from "./Weather";
import Search from "./Search";

function App() {
  return (
    <div className="App">
        <Search />
        <Weather city="Singapore"/>
    </div>
  );
}

export default App;
