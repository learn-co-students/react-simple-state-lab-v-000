import React, {Component} from 'react';

export default class Cell extends Component {
    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    switchColor = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return (
            <div className='cell'
                onClick={this.switchColor}
                style={{backgroundColor: this.state.color}}>
            </div>
        )
    }
}