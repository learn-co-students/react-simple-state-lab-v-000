import React, { Component } from 'react';
import baseGrid from 'data.js';
import Cell from 'Cell.js'

export default class Matrix extends Component {

  
  // genRow = (vals) => (
  //   vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  // )

    render () {
      return (
        genRow = (vals) => (
          vals.map(val => <Cell value={val} />
        )
      )
    )}
//
  // replace me and render a cell component instead!<div className="cell"></div>
  
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
  values: baseGrid 
  //AAA need to use pattern-1 in data.js as data genMatrix uses to render the cells
}

