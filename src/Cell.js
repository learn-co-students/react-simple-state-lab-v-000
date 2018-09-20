import React, { Component } from "react";

class Cell extends Component {
  state = {
    color: this.props.value
  };

  handleClick = event => {
    this.setState({
      color: "#333"
    });
  };
  render() {
    return (
      <div
        className="cell"
        onClick={this.handleClick}
        style={{ backgroundColor: this.state.color }}
      />
    );
  }
}

export default Cell;
