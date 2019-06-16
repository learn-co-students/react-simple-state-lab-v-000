
import React, {Component} from 'react';

export default class Cell extends Component {

    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }

    changeColor = () => {
        let newColor = "#333"
        this.setState({
            color: newColor
        })
    }

    hasOwnProperty = (event) => {
    }

    render() {
        return (
            <div className = "cell"
            onClick = {this.changeColor}
            style={{backgroundColor: this.state.color}}>       
        </div> 
        )
    }

}