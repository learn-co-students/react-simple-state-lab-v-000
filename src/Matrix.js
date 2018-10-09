import React, { Component } from 'react';
import Cell from './cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => (
    vals.map(val => < Cell value={val} />) 
  )
  
  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  )
  
  render() {
    console.log("matrix render",this.props.values);    
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}

Matrix.defaultProps = {
  values: Array(10).fill(null).map(_ => Array(10).fill('#F00'))
}