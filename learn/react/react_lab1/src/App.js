import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard.js";
import Person from "./Person/Person";
import Pet from "./Pet/Pet";
class App extends React.Component {
  state = {
    persons: [
      { name: "Mark", age: 44 },
      { name: "James", age: 34 },
      { name: "Tim", age: 49 },
      { name: "Kevin", age: 54 },
    ],
  };
  changeNameHandler() {
    console.log("button clicked!!");
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.changeNameHandler}>Change</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Pet name="king" specie="cat" />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
        <Pet name="oven" specie="dog" />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
      </div>
    );
  }
}

export default App;
