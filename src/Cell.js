import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
      this.state = {
      color: this.props.value
    }
  }

  handleMouseClick = () => {
      //debugger
      this.setState({
        color: '#333'
      })
   }

  render() {
      return (
        <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleMouseClick}>
        </div>
      )
    }
    // ...define initial state with a key of 'color' set to the 'value' prop
  }
