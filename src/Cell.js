import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(value) {
    super(value)
    this.state = {
      color: this.props.value
    }
  }

  changeColor = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className='cell' onClick={this.changeColor} style={{backgroundColor: this.state.color}}>
        {this.state.color}
      </div>
    )
  }
}
