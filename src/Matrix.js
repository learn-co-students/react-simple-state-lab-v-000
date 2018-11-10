import React, { Component } from 'react';

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )


  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}


const defaultVals = () => {
  const mx = []
  const color = "#F00 "
  for (var i = 0; i < 10; i++) {
    let colors = color.repeat(10).split(" ").slice(0, -1)
    mx.push(colors)
  }
  return mx
}

Matrix.defaultProps = {
  values: defaultVals()
}


