import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    // debugger;
    super()
    this.state = {
      color: props.value
    }
  }

  setColor = () => {
    this.setState({
      color: this.state.color = '#333'
    })
  }

  render() {
    return (
      <div className='cell'
      style={{backgroundColor: this.state.color}}
      onClick={this.setColor}>
      </div>
    )
  }
}
