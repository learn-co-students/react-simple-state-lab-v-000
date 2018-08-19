import React, { Component } from 'react';

export default class Cell extends Component {
  
  // Note : Need to pass in "props" to make it available
  constructor(props) {
    // Note : Need to include "super" to make "this" available
    super(props)
    
    // Note : Set the initial state
    this.state = {
      color: this.props.value 
    }
    // ...define initial state with a key of 'color' set to the 'value' prop
  }

  // Function to update the state color
   updateStateColor = () => {
     this.setState({
      color: '#333'
    })
   }   

  render() {
    return (
      <div className="cell" 
        style={{backgroundColor: this.state.color}}
        onClick={this.updateStateColor}
        >
      </div>
    )
  }
  
}