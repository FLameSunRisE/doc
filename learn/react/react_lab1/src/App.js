import logo from "./logo.svg";
import "./App.css";
import React from "react";
function App() {
  return (
    // <div className="App">
    //   <h1>Hello World</h1>
    //   <h2>React Programming</h2>
    // </div>
    //React.createElement('div',null,"h1","Hi, this is react programming")
    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hi"),
      React.createElement("h1", null, "Hi I am Mark")
    )
  );
}

export default App;
