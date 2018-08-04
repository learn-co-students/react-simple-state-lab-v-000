import React, { Component } from 'react';
import { pattern1 } from './data.js';
import Cell from './Cell.js';


export default class Matrix extends Component {
  debugger;
  
  genRow = (vals) => (
    vals.map(val => <div className="cell"><Cell /></div>) // replace me and render a cell component instead!
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

const defaultRow=pattern1[0].map((value) => "#F00");

const defaultPattern=pattern1.map((value) => defaultRow);

Matrix.defaultProps = {
  values: defaultPattern
}