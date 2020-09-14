import React, { Component } from 'react';
import Matrix from './Matrix'

class Cell extends React.Component {
 
  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  changeColor = () => {
    this.setState({color: '#333'})
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor} >
      </div>
    )
  }
}

export default Cell