import React, { Component } from 'react';
import { defaultPattern } from './data.js';

export default class Cell extends Component {

    constructor(props){
        super();
        this.state = {
            color: props.value
        }
    }

    changeColorViaState = () => {
        this.setState({
            color: '#333'
        })

    }

    render() {
        return (
        <div  onClick={this.changeColorViaState} className="cell" style={{backgroundColor: this.state.color}}></div>
        )
    }




}