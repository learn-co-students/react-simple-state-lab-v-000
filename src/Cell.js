import React from 'react';
export default class Cell extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

changeColor = () => {
  this.setState({
      color: '#333'
    })
}


  render () {
    return (
      <div onClick={this.changeColor}className="cell" style={{backgroundColor: this.state.color}}></div>
    )
  }

}
