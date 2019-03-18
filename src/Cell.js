import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    // ...define initial state with a key of 'color' set to the 'value' prop
    this.state = {
      color: props.value
    }
  }

  updateColor = () => {
    const newColor = '#333'
    this.setState({
      color: newColor

    })
  }
  
  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.updateColor}>
        {this.state.color}
      </div>
    )
  }
  
}
