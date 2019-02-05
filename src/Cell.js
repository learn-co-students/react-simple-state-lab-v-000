import React, { Component } from 'react'

class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }

    // somefunc
  }

  render() {
    // onClick={somefunc}
    return <div className="cell"  ></div>
  }
}

export default Cell
