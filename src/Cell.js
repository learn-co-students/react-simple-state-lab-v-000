import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {      
      color: props.value
    }
  }

  changeHex = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.changeHex} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
}
