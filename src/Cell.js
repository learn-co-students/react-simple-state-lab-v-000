import React, { Component } from 'react';

export default class Class extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  makeGrey = () => {
    const newColor = "#333"
    this.setState({
      color: newColor
    })
  }

  render() {
    return (
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.makeGrey}>

      </div>
    )
  }

}
