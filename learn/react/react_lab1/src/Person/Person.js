import React, { useState } from "react";
// import "./Person.css";
import styled from "styled-components";
const Person = (props) => {
  const StyledDiv = styled.div`
    width: 60%;
    margin: auto;
    border: 3px solid #ffff00;
    box-shadow: 0 2px 3px #ffc066;
    padding: 16px;
    text-align: center;
    background-color: #c0ffee;
    @media (min-width: 200px) {
      width: 400px;
    }
  `;
  const [stateString, changeString] = useState({
    publisher: "Marvel Studio",
    studio: "Disney",
  });
  const showStatus = () => {
    console.log(stateString);
  };
  const switchVenderHandler = () => {
    changeString({
      publisher: "DC Comics",
      studio: stateString.studio,
    });
  };
  return (
    <StyledDiv className="Person">
      <h1>{stateString.publisher}</h1>
      <button onClick={switchVenderHandler}>Change!</button>
      <button onClick={showStatus}>show status</button>
      <p onClick={props.clickCallback}>
        <em style={{ color: "red" }}>{props.children}</em>::I am {props.name}, I
        am {props.age} years old, I am the {Math.floor(Math.random() * 10)}th
        generation
      </p>
    </StyledDiv>
  );
};

export default Person;
