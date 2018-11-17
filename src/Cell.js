import React, { Component } from 'react';


export default class Cell extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: this.props.value
        }
    }

    stateChange = () => {
        this.setState({ color: '#333'})
    }

    render() {
        return (
            <div className='cell' onClick={this.stateChange} style={{backgroundColor: this.state.color}} ></div>
        )
    }

}
