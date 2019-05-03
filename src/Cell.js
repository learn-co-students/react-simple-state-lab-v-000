import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props);

    this.state = {
      'color': this.props.value
    }
  }

  changeBackgroundOnClickHandler = () => {
    const newBackground= '#333'
    this.setState({
      color: newBackground
    })
  }



  render() {
    return(
      <div className='cell' style={{backgroundColor: this.state.color }} onClick={this.changeBackgroundOnClickHandler}>
        {this.props.value}
      </div>
    )
  }
}
