import React, { Component } from 'react';

export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  cell = () => {
    const newColor = "#333"
    this.setState({
      color: newColor
    })
  }

  render () {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.cell}></div>
    )
  }
}
