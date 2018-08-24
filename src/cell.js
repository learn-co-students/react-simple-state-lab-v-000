import React, { Component } from 'react';

class Cell extends Component {
  constructor(props) {
    super(props)

    this.state = {
      color: this.props.value
    }
  }

  handleOnClick = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={ this.handleOnClick } style={{backgroundColor: `${this.state.color}`}}>

      </div>
    )
  }
}

export default Cell;
