import React, { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <div>
        I am a {this.props.specie}, name {this.props.name}
      </div>
    );
  }
}
export default Pet;
