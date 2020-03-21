import React, { Component } from "react";

export default class Cell extends Component {
  constructor(props) {
    super();
    this.state = {
      color: props.value
    };
  }

  handleClick = _ => {
    this.setState({ color: "#333" });
  };

  render() {
    const { color } = this.state;

    return (
      <div
        className="cell"
        style={{ backgroundColor: color }}
        onClick={this.handleClick}
      />
    );
  }
}
Cell.defaultProps = {
  value: "#999"
};
