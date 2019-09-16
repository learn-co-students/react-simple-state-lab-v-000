import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    //matrix is passing in props
    //constructor is first thing run in component
    super(props); //super is what is setting props through the default constructor
    this.state = {
      color: props.value //dont need this because accessing props arg
    };
    // ...define initial state with a key of 'color' set to the 'value' prop
  }

  handleClick = () => {
    this.setState({
      color: "#333"
    });
  };

  render() {
    return (
      <div
        className="cell"
        style={{ backgroundColor: this.state.color }}
        onClick={this.handleClick}
      ></div>
    );
  }
}
