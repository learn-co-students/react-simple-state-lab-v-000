import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    vals.map(val => <Cell value={val} />); // replace me and render a cell component instead!
  }
  
  genMatrix = () => (
    this.props.values.map(rowVals => { 
      return (
        <div className="row">
          {this.genRow(rowVals)}
        </div> 
      )}
    )
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


// Line 11:  Expected to return a value in arrow function                           array-callback-return
// Line 12:  Expected an assignment or function call and instead saw an expression  no-unused-expressions