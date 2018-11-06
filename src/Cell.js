import React from 'react'
import Matrix from './Matrix'

export default class Cell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            color: this.props.value
        }
    }
    changeColor = () =>{
        this.setState({
            color: "#333"
        })
    }

        render(){
            return(
            <div className="cell" style={{backgroundColor: this.state.color}} onClick={this.changeColor}>
                {this.state.color}
            </div>
        )
    }

}
