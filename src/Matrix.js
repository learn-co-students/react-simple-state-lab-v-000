import React, { Component } from 'react';
import Cell from './Cell';

export default class Matrix extends Component {
	defaultProps = () => (
	{ values: [
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F'],
		['#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F', '#F00', '#00F']
	]
	})

  genRow = (vals) => (
    vals.map(val => < Cell value={val} />)
  )
  
  genMatrix = () => {
		const colors =  this.props.values ? this.props.values : this.defaultProps.values
    return colors.map(rowVals => <div className="row">{this.genRow(rowVals)}</div>)
  }
  
  render() {
    return (
      <div id="matrix">
        {this.genMatrix()}
      </div>
    )
  }
  
}
