import "./App.css";
import React from "react";
import Dashboard from "./components/Dashboard.js";
import Banner from "./components/Banner.js";
import Person from "./Person/Person";
import Pet from "./Pet/Pet";
class App extends React.Component {
  titleChangeListener = (event) => {
    this.setState({ title: event.target.value });
  };
  state = {
    persons: [
      { name: "Mark", age: 44 },
      { name: "James", age: 34 },
      { name: "Tim", age: 49 },
      { name: "Kevin", age: 54 },
    ],
    teamMax: 10,
  };
  changeNameHandler = (leaderName) => {
    console.log("button clicked!!!!!");
    //this.state.persons[0].name = "Captain America"
    this.setState({
      //2
      persons: [
        { name: leaderName, age: 38 },
        { name: "Thor", age: 37 },
        { name: "Iron Man", age: 35 },
        { name: "Hawk", age: 50 },
      ],
      title: "hello react",
    });
  };
  render() {
    const style = {
      backgroundColor: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: "pointer",
    };
    return (
      <div className="App">
        <h1>{this.state.title}</h1>
        <Banner
          clickCallback={this.titleChangeListener}
          name={this.state.title}
        ></Banner>
        <button
          style={style}
          onClick={() => this.changeNameHandler("Iron Man")}
        >
          Change
        </button>
        <Person
          clickCallback={this.changeNameHandler.bind(this, "Bat Man")}
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
