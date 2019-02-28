import React, { Component } from 'react'

export default class Cell extends Component  {

  constructor (props) {
    console.log(props)
    super(props)
    this.state = {
      color: props.value
    }
  }

  colorChange = (event) => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className='cell' style={{backgroundColor: this.state.color}} onClick={this.colorChange} ></div>
    )
  }

}
