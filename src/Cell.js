import React from 'react';

class Cell extends React.Component {

  // we use the constructor to set the INITIAL STATE
  constructor(props) {
    super(props)
    this.state = {
      color: props.value
    }
  }

  colorChanger = () => {
    this.setState({
      color: '#333'
    })
  }

  render() {
    return (
      <div className="cell" onClick={this.colorChanger} style={{backgroundColor: this.state.color}}>
        {this.state.color}
      </div>
    )
  }
}
export default Cell;
