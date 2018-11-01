import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
      this.state = {
      color: props.value
      }
  }

    stateColor = () => (
      this.setState({color: '#333'})
    )

    backgroundColor = () => (
      this.state.color
    )


  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.backgroundColor()}}
        onClick={this.stateColor}>
      </div>
    )
  }

}
