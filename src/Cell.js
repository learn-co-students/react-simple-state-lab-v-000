import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(prop) {
    super(prop)
    this.state = {
      color: prop.value
    }
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    });
  }

  render() {
    return <div
      className="cell"
      onClick={this.handleClick}
      style={{backgroundColor: this.state.color}}>
    </div>
  }
}
