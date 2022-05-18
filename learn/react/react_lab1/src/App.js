import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard.js";
import Person from "./Person/Person";
function App() {
  return (
    <div className="App">
      <Dashboard />
      <Person />
      <Dashboard />
      <Person />
      <Dashboard />
      <Person />
    </div>
  );
}

export default App;
