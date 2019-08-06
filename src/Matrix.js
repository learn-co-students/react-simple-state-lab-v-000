import React, { Component } from 'react';
import {colors} from './data.js'
import Cell from './Cell.js';

let cell_tracker = 0;
export default class Matrix extends Component {
  
  genRow = (vals) => (
     vals.map( val => { <Cell key={cell_tracker} color={val} />; cell_tracker++; }) 
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
	values: colors
}

