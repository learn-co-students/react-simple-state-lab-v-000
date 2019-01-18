import React, { Component } from 'react';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
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

let matrix = [];
for(let i=0; i<10; i++) {
    matrix[i] = [];
    for(let j=0; j<10; j++) {
        matrix[i][j] = "#F00";
    }
};

Matrix.defaultProps = {
  values: matrix
}
