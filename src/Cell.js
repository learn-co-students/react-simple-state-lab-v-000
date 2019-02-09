import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  grey = () => {
    this.setState({
      color: "#333"
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.grey} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}
