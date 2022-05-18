import React from "react";

const Person = (props) => {
  return (
    <div>
      <p>
        <em style={{ color: "red" }}>{props.children}</em>::I am {props.name}, I
        am {props.age} years old, I am the {Math.floor(Math.random() * 10)}th
        generation
      </p>
    </div>
  );
};

export default Person;
