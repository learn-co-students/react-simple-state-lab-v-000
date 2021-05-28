import React, { Component } from "react";

class Cell extends Component {
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }

  render() {
    return(
      <div className="cell" style={{backgroundColor: this.state.color}} onClick={(event)=>{this.setState({color: '#333'})}}></div>
    )
  }
}

export default Cell