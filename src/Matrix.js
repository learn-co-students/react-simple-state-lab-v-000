import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';

export default class Matrix extends Component {

	// When genRow is called, genMatrix will pass into genRow a prop called rowVals. Then when genRow calls Cell, it passes in the current value in this.props.values
	genRow = (aRowVal) => aRowVal.map((aCellVal,ind) => (
		<Cell value={aCellVal} index={ind} key={`cell-${ind}`} />
	));
	  
  	// index.js passes into its call to Matrix a prop called  "values" with a value of pattern1 (from data.js). We need the curly braces around this.genRow() b/c we're switching from JSX to plain JS
  	genMatrix = (vals) => vals.map((rowVals,ind) => (<div className="row" key={`row-${ind}`}>{this.genRow(rowVals)}</div>));
  
  	render() {
    	return (
      		<div id="matrix">
        		{this.genMatrix(this.props.values)}
      		</div>
    	)
	  }
	  
}

Matrix.defaultProps = {
	values:  [
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00'],
	],
}
	  
Matrix.propTypes = {
	values: PropTypes.arrayOf(
		PropTypes.arrayOf(
			PropTypes.string
		)
	).isRequired,
}