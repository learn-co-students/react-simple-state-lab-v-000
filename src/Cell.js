import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  // FAILING ONCLICK TEST EVEN THOUGH CONSOLE.LOG SHOWS IT WORKS 

  clickEvent = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div
      className="cell" style={{backgroundColor: this.state.color}} onClick={this.clickEvent}>
    </div>
    )
  }


}
