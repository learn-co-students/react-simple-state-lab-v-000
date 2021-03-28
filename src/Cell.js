import React, { Component } from "react";

export default class Cell extends Component {
  constructor(val) {
    super()
    this.state = {
      color: val
    }
  }

  colorChange = () => {
    this.setState({
      color: "#333"
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.colorChange}></div>
    )
  }
}