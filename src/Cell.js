import React, { Component } from 'react';

export default class Cell extends Component {

    state = {
        color: this.props.value
    }

    genCell = (v) => v;

    handleClick = () => this.setState({
        color: '#333'
    });
    
    render() {
        const colorString = this.props.value;
        return (
            <div 
                className="cell" 
                key={`cell-${this.props.index}`}
                onClick={this.handleClick}
                style={{backgroundColor: this.state.color}}
            >
                {this.genCell(colorString)}
            </div>
        )
    }
}
