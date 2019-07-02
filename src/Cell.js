import React, { Component } from 'react';
import Matrix from './Matrix.js'

export default class Cell extends Component {
  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super(props)
    this.state = {
       color: props.value
    }
  }

  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }



  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}}
      onClick={this.handleClick}  >
      </div>
    )
  }
}
