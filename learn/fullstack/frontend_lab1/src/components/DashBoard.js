import React, { Component } from "react";
import ProjectItem from "./Project/ProjectItem";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <h1>DashBoard</h1>
        <ProjectItem />
      </div>
    );
  }
}
export default DashBoard;
