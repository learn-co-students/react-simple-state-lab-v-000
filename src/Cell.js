import React, { Component } from 'react';

export default class Cell extends Component {
  //We want each Cell to keep track of a single state value: color, (which will be a 3 digit hex value i.e. '#FFF').

  constructor(props) {
   super(props)
   this.state = {
     color: this.props.value// '#333' set this to the value prop passed in
   }//end this
  }//end constructor

  handleClick = (event) => {
    this.setState({
     color: '#333'
   })

  }

   render() {
     return (
       <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.handleClick} >


      </div>
     )
 }// end render



}//end export

Cell.defaultProps = {value: '#f00'}
