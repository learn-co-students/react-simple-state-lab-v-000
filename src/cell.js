// Create a new component in src/ called Cell. The Cell component will 
  // give us our first chance to use state. We want each Cell to keep track 
  // of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').

// Define a constructor method in Cell, which sets an initial state key of color 
  // to the value prop which is passed from its parent component. Remember to call 
  // super() on the first line of the constructor (this is required in React components 
  // if we are to use "this.state" in the constructor).
// Super() will call the constructor of its parent class. This is required when 
  // you need to access some variables from the parent class. In React, when you 
  // call super with props, React will make props available across the component through "this.props" 


import React, { Component } from 'react';

export default class Cell extends Component {
  
  constructor(props) {
    super()
    this.state = {
      color: props.value
    }
  }
  
  handleClick = () => {
    this.setState({
      color: '#333'
    })
  }
  
  render() {
    return (
      <div 
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.handleClick}>
      </div>
    )
  }
  
}