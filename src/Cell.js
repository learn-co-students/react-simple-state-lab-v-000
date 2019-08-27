import React, { Component } from 'react';

export default class Cell extends Component {

  state = {color: this.props.value}

  setColor = () => {
    this.setState({color: '#333'})
  }


  render() {
    return (
      <div onClick={this.setColor} className="cell" style={{backgroundColor: this.state.color}} >
        
      </div>
    )
  }

}
