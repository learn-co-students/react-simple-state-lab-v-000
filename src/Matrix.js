import React, { Component } from 'react';
import {defaultPattern} from './data.js'
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map((val, i) => <Cell value={val} key={i}/>) // replace me and render a cell component instead!
  )

  genMatrix = () => (
    this.props.values.map((rowVals, i) => <div className="row" key={i}>{this.genRow(rowVals)}</div>)
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
  values: defaultPattern
}
