import React, { Component } from 'react';
import Cell from './Cell.js'
import {pattern1} from './data.js' 
import {pattern2} from './data.js' 

export default class Matrix extends Component {

  genRow = (vals) => (

    vals.map(val => <Cell color={val.color}/>) 
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
  values: pattern2
}

