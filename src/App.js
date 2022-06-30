import React from "react";
import "./App.css";
import Weather from "./Weather";
import Search from "./Search";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Search />
        <Weather city="Singapore"/>
        <Temperature />
        
      </header>
    </div>
  );
}

export default App;
