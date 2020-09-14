import React, { Component } from 'react';

export default class Cell extends Component {
 
  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  updateHexValue = (value) => {
    const newColor = value
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className='cell' 
           style={{backgroundColor: this.state.color}} 
           onClick={() => {this.updateHexValue('#333')}}>
      </div>
    )
  }
}