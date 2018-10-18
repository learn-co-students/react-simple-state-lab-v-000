import React, {Component} from 'react';

export default class Cell extends Component{
  constructor(props){
    super(props)

    this.state = {
      color: this.props.value
    }
  }
  handleColorChange = () => {
    this.setState({
      color: "#33"
    })
  }

  render(){
    return <div style={{backgroundColor: this.state.color}} className="cell" onClick={this.handleColorChange}></div>
  }
}
