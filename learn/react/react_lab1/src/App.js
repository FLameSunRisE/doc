import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h2>React Programming</h2>
      <Dashboard></Dashboard>
      <Dashboard></Dashboard>
      <Dashboard></Dashboard>
    </div>
    //React.createElement('div',null,"h1","Hi, this is react programming")
    // React.createElement(
    //   "div",
    //   { className: "App" },
    //   React.createElement("h1", null, "Hi"),
    //   React.createElement("h1", null, "Hi I am Mark")
    // )
  );
}

export default App;
