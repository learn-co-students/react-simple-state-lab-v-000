import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
		super(props)
		const value = this.props.value ? this.props.value : '#FFF'
		this.state = {
      color: value
		}
	}

	goGrey = () => {
    this.setState({
      color: '#333'
    })
  }
  
	render() {
    return (
      <div class="cell" onClick={this.goGrey} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }
  }
