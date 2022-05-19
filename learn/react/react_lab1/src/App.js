//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dashboard from './components/Dashboard.js';
import Person from './Person/Person';
import Pet from './Pet/Pet';
import Banner from './components/Banner';
import styled from "styled-components"
const StyledButton = styled.button`
background-color: blue;
color: white;
font: inherit;
border: 2px solid red;
padding: 4px;
cursor: pointer;
&:hover {
  background-color: lightblue;
  color: black;
}
`
class App extends React.Component {
  titleChangeListener = event => {
    this.setState({ title: event.target.value })
  }
  state = { //2
    persons: [{ name: "Mark", age: 44 },
    { name: "James", age: 34 },
    { name: "Tim", age: 49 },
    { name: "Kevin", age: 54 }],
    teamMax: 10,
    title: "hello react",
    showPersons: false
  }
  toggleDisplayHandler = () => {
    console.log(`current state=${this.state.showPersons}, will change`)
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  deletePerson = index => {
    const p = [...this.state.persons];
    p.splice(index, 1);
    this.setState({ persons: p });
  }
  //changeNameHandler(){
  //changeNameHandler = function () {
  changeNameHandler = (leaderName) => {
    console.log("button clicked!!!!!")
    //this.state.persons[0].name = "Captain America"
    this.setState({
      persons: [{ name: leaderName, age: 38 },
      { name: "Thor", age: 37 },
      { name: "Spider Man", age: 35 },
      { name: "Hawk", age: 50 }],

    })
  }
  render() {
    // const style = {
    //   backgroundColor: "green",
    //   color: 'white',
    //   font: "inherit",
    //   border: "2px solid red",
    //   padding: "4px",
    //   cursor: 'pointer'
    // }
    // add this...
    let persons = null;
    if (this.state.showPersons === true) {
      persons = (<div>
        {this.state.persons.map((p, index) => <Person
          clickCallback={() => this.deletePerson(index)}
          key={p.name}
          name={p.name}
          age={p.age} />)}
      </div>)
      // style.backgroundColor = 'red'
      // style.color = 'black'
    }
    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('blue');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold')
    }
    //let classes = ['blue','bold'].join(' ')
    return (
      <div className="App">
        <p className={classes.join(' ')}>{this.state.title}</p>
        <StyledButton   onClick={() => this.toggleDisplayHandler()}>Show/Hide</StyledButton>
        <br />
        <Banner clickCallback={this.titleChangeListener} name={this.state.title}></Banner>
        
        <StyledButton 
          onClick={() => this.changeNameHandler("Iron Man")}>Change</StyledButton>
        {persons}
      </div>
    )
  };
}

export default App;
