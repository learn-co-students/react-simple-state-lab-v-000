import React, { Component } from 'react';

class Cell extends Component {
    constructor(props) {
        super(props)
        this.state = {
            color: props.value
        }
        console.log(this.state.color)
    }

    addClick = (event) => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className="cell" onClick={this.addClick} style={{backgroundColor: this.state.color}}></div>
        )
    }
}


export default Cell