//  The render() method shows us what our Matrix component looks like: a <div> tag with id=matrix. 
// But inside that div, we invoke this.genMatrix(). 
// We see that genMatrix in an instance method which maps 
// this.props.values to an array of JSX. Basically, every 'row' in this.props.values 
// will create a <div className="row">. Furthermore, if we look at genRow, 
// we'll see that every row will map through 
// it's vals to create an array of <div className="cell"> JSX.


import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {
  
  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    console.log
    return this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
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