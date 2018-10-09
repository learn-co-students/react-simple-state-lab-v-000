import React, { Component } from 'react';

export default class Cell extends Component {

    constructor() {
        super();
        this.state = {
          color: null
        };
    }  

    handleClick = () => {
        this.setState({
            color: '#333'
        }) 
    }   

    render() {
        if (!this.state.color) {
            this.setState({color: this.props.value});
        }
        return (
            <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}></div>
        )
    }
    
}