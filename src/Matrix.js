import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />) // replace me and render a cell component instead!
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
  values: ( () => {
    let innerTable = [];
    let outerTable = [];
    let i = 0;
    for (i = 0; i < 10; i++) {
      innerTable.push("#F00")
    }
    let e = 0;
    for (e = 0; e < 10; e++) {
       outerTable.push(innerTable)
    }
  return outerTable
  })()
}
