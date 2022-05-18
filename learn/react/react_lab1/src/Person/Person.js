import React, { useState } from "react";

const Person = (props) => {
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
    <div>
      <h1>{stateString.publisher}</h1>
      <button onClick={switchVenderHandler}>Change!</button>
      <button onClick={showStatus}>show status</button>
      <p>
        <em style={{ color: "red" }}>{props.children}</em>::I am {props.name}, I
        am {props.age} years old, I am the {Math.floor(Math.random() * 10)}th
        generation
      </p>
    </div>
  );
};

export default Person;
