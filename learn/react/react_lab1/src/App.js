import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard.js";
import Person from "./Person/Person";
import Pet from "./Pet/Pet";
function App() {
  return (
    <div className="App">
      <Person name="Mark" age="44" />
      <Pet name="king" specie="cat" />
      <Person name="James" age="37" />
      <Pet name="oven" specie="dog" />
      <Person name="Tim">Team Leader</Person>
      <Person name="Kevin" age="50" />
      <Person name="Abby" age="35" />
      <Person name="Rolin" age="60" />
    </div>
  );
}

export default App;
