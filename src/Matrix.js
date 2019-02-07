import React, { Component } from 'react';
import Var from './data.js';

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell />) // replace me and render a cell component instead!
  )
//<div className="cell"><Cell /></div>
  genMatrix = () => (
    this.props.values.map(rowVals => <Cell value={val} />)
  )
//<div className="row">{this.genRow(rowVals)}</div>

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: "pattern1"
}
