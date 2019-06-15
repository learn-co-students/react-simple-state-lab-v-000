import React, { Component } from 'react';


export default class Cell extends Component {
  handleOnClick = () => {
    this.setState({
      color: '#333'
    })
  }
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }
  render() {
    return(
      <div
        style={{backgroundColor: this.state.color}}
        className="cell"
        onClick={this.handleOnClick}
      >

      </div>
    )
  }
}
