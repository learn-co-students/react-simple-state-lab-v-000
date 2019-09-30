import React, { Component } from 'react';
import { all_red } from './all_red.js';// I added this
import Cell from './Cell.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell  />) // replace me and render a cell component instead!
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
  values: all_red
}
