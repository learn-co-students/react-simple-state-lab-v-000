import React, { Component } from 'react';
import Cell from './Cell.js'
import {pattern1} from './data.js'

export default class Matrix extends Component {

  // genRow = (vals) => (
  //   vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  // )

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
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

  const defaultRow = pattern1[0].map(val => "#F00")
  const defaultMatrix = pattern1.map(val => defaultRow)

  Matrix.defaultProps = {
    values: defaultMatrix
  }
