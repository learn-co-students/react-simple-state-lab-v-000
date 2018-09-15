import React, { Component } from 'react';
import Cell from './Cell.js'

export default class Matrix extends Component {

  genRow = (vals) => (
    vals.map(val => <Cell value={val} />)
    //Once you have made your <Cell /> component, replace the return value in genRow's map to: <Cell value={val} />
  )

  genMatrix = () => (
    this.props.values.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
    //iterate over values prop below. for each value, generate a div whose classname is 'row'
    //and value is an element in the values array
  )

  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
}

//Make a default values prop for Matrix, which is a 10x10 array filled with the values '#F00' (red)
  Matrix.defaultProps = {
    values: [
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
      ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    ]

    // from soln => they just set up a.... self-onvoking arrow fn? which just
    //creates a new array and fills it with the rows we want
    // values: (() => {
    //   const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    //   return (new Array(10).fill(defRow))
    // })()
  }
