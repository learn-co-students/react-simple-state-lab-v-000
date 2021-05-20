import React, { Component } from 'react';
import Cell from './Cell'
import dProps from './defaultProps'

export default class Matrix extends Component {
  
  genRow = (vals) => {
      return vals.map(val => <Cell value={val}/>) // replace me and render a cell component instead!
  }
  
  genMatrix = () => {
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }

    static defaultProps = { values: dProps }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
