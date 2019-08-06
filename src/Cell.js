import React, {Component} from 'react'; 

class Cell extends Component{
	constructor(props){
		super(props);
		this.state = {
		   color: props.value
		};
		console.log(this.state)
	}
	changeColor(e){
		this.setState({
			color: "#333" 
		});
	}
	render(){
		return (<div className='cell' value={this.state.color} onClick={this.changeColor.bind(this)} style={{backgroundColor: this.state.color}}></div>);
	}

};

export default Cell;
