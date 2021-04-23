import React, { Component } from 'react';
// import Matrix from './Matrix.js';


export default class Cell extends Component{

  constructor(prop) {
    super()
    this.state = {
       color: prop.value
    } // ...define initial state with a key of 'color' set to the 'value' prop
  }

eventState = (event) => {
  this.setState({
        color: '#333'
  })
}



  render() {
    return (
      <div className='cell' onClick={this.eventState} style={{backgroundColor: this.state.color}}>

      </div>
    )
  }
}
