import React, { Component } from 'react';

export default class Cell extends Component {    
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    update_color = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div key={Math.random()} onClick={this.update_color} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    } 
  
}
