import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    vals.map(val => <Cell value={val}/>)
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

Matrix.defaultProps = {

  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
// can also use a simple array of 10 columns and 10 rows of values: [ ]
