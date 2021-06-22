import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {

  genRow = (vals) => {
    return vals.map(val => <Cell value={val} />)
    // return vals.map(val => <div className="cell"></div>) // replace me and render a cell component instead!
  }

  genMatrix = () => {
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
  values: Array(10).fill(Array(10).fill("#F00"))

  
  // values: [
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  //   ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00',],
  // ]
}
