import React, { Component } from 'react';
import { defaultPattern } from './data.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
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
  values: defaultPattern
}
