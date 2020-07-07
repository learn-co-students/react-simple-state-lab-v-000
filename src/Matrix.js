import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
  
  genRow = (vals) => {
    // console.log(vals);
    return vals.map(val => <Cell value={val} />)
  }
  
  genMatrix = () => {
    // console.log(this.props.values);
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
  values: tenByTenRed()
}
// console.log(Matrix.defaultProps);

function tenByTenRed() { // Return an array of 10 arrays, each containing 10 '#F00' strings
  let allRed = [];

  for(let i = 0; i < 10; i++) {
    let arr = [];
    
    for(let j = 0; j < 10; j++) {
      arr.push('#F00');
    }

    allRed.push(arr);
  }

  return allRed;
}

// Based on the solution, here's a shorter version of tenByTenRed:
/*
  Matrix.defaultProps = {
    values: (() => {
      return (new Array(10).fill(new Array(10).fill('#F00')))
    })()
  }
*/