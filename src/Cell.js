import React from 'react';

export default class Cell extends Component {
  constructor(props){
    super(props)
    this.state ={
      color: this.props.value
    }
  }

  listenForClicks =()=>{
    this.setState({
      color: '#333'
    })
  }

  render(){
    return (
    <div
      className="cell"
      style={{backgroundColor: '#FFF'}}
      onClick ={this.listenForClicks}>
    </div>
    )
  }


}
