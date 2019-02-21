import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.state = {
      color: this.props.value
    };
  }

  render() {
    return (
      <div
      className = "cell"
      style={{backgroundColor: this.state.color}}
      onClick={this.clickListener} //was calling with() and without this and error was reading undefined
      >
      </div>
    )
  }

  clickListener = () => {
    this.setState({
      color: '#333'
    })
  }

}
