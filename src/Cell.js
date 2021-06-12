import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
         } // ...define initial state with a key of 'color' set to the 'value' prop
    }

    handleClick = (event) =>{
        this.state.color = '#333'
    }

  render() {
    return (
      <div className="cell" style={{backgroundColor: '#fff'}}  onClick={this.handleClick}>
      </div>
    )
  }
}
