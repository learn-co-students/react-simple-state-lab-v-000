import React, { Component } from 'react';

export default class Cell extends Component {

    constructor() {
        super();
        console.log("Cell",this.props.value);
        this.state = {
          color: this.props.value
        };
    }  

    handleClick(event) {
        this.setState({
            color: '#333'
        })    
    }

    render() {
        return (
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}></div>
        )
    }
    
}