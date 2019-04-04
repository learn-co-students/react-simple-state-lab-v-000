import React, { Component } from 'react';
import Cell from './Cell'

export default class Matrix extends Component {

  genRow = (vals) => (
    // vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
    vals.map(val => <Cell />) // replace me and render a cell component instead!
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

// Matrix.defaultProps = {
//
//   let matrix = () => {
//     let row = ['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'];
//     let matrix = [];
//
//     for (let i = 0; i < 10; i++ ) {
//       matrix.push(row)
//     }
//     return matrix;
//   }
//   values: matrix();
// }

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
