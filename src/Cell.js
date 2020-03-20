import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color : props.value
        }
    }

    change = (event) => {
        this.setState({
            color:  '#333'
        })
    }

    render() {
        return (
        <div onClick={this.change} style={{backgroundColor: this.state.color}} className="cell">{this.props.value}</div>
        )
    }
}



