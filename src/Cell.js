import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = { color: props.value}
  }

  render() {
    return (
      // with event listeners like onClick you can pass in a function but you can't call one directly.
      <div className="cell" style= {{backgroundColor: this.state.color }} onClick={() => this.setState({color: '#333'})}></div>
    )
  }

}
