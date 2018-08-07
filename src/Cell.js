import React, { Component } from 'react'

export default class Cell extends Component { 
    constructor(props){
        super(props)
        const val=this.props.value
        this.state={
            color: val
        }
    }
    
    handleMouseClick=(event)=>{
        const newVal= "#333"
        this.setState({
          color: newVal 
        })
    }
    
    render(){
        return(
            <div 
                className="cell" 
                style={{backgroundColor: `${this.state.color}`}}
                onClick={this.handleMouseClick}
                >
            </div>
        )
    }
}