import React, { Component } from 'react'

export default class Cell extends Component {
    state = {
        color: this.props.value
    }

    handleClick = (event) => {
        this.setState({ color: '#333' })
    }

    render() {
        return (
            <div className="cell" style={{backgroundColor: `${this.state.color}` }} onClick={this.handleClick}></div>
        )
    }
}