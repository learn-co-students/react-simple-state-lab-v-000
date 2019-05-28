import React, { Component } from 'react'; 

export default class Cell extends Component {

    constructor(props){
        super(props)
            this.state = {
            color: '#FFF'
            }
    }

    render() {
        return (
          <div className="cell" style={{backgroundColor: '#FFF'}}>
            {this.state.color}
          </div>
        )
      }
} 