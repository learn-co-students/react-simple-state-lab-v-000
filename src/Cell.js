import React, { Component } from 'react';

export default class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.value
		};
	}
	genState = () => this.setState({ color: '#333' });

	render() {
		return (
			<div className={'cell'} id="cell" onClick={this.genState} style={{ backgroundColor: this.state.color }} />
		);
	}
}
