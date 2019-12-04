import React, { Component } from 'react';


export default class Cell extends Component {

  constructor(props) {
    super()
    this.state = {
      color: props.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

  changeColor = () => {
    this.setState ({
      color: '#333'
    })
  }



  render() {
    return (
      <div style={{backgroundColor: this.state.color}} onClick={this.changeColor} class='cell'>
      </div>
    )
  }

}
