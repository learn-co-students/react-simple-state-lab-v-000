import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
   super(props)
   this.state = {
     color: this.props.value
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
