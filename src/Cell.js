import React, { Component } from "react";

class Cell extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: props.value
		};
	}

	handleClickUpdate = () => {
		this.setState({
			color: "#333"
		});
	};

	render() {
		return (
			<div
				className="cell"
				onClick={this.handleClickUpdate}
				style={{ backgroundColor: this.state.color }}
			></div>
		);
	}
}

export default Cell;
