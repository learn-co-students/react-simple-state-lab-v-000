import React, { Component } from 'react';

export default class Cell extends Component {
    constructor(props) {
        //console.log('props value', props.value)
        // required in React components if we are to use this.state in the constructor
        super()
        // ...define initial state with a key of 'color' set to the 'value' prop
        this.state = {
            color: props.value
        }
    }

    //when activated, updates the state to the following hex value: '#333'
    updateState = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div 
                className="cell" 
                style={{backgroundColor: this.state.color}} 
                onClick={this.updateState}>

            </div>
        )
    }
}