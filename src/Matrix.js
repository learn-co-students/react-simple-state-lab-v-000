import React, { Component } from "react";
import Cell from "./Cell";

export default class Matrix extends Component {
  // Maps array => ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
  genRow = vals => vals.map(data => <Cell value={data} />);
  genMatrix = () =>
    this.props.values.map(
      rowVals => <div className="row">{this.genRow(rowVals)}</div>
      //returns 10x of
      //= > ["#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F", "#F00", "#00F"]
    );

  render() {
    return <div id="matrix">{this.genMatrix()}</div>;
  }
}

Matrix.defaultProps = {
  values: (() => {
    const defRow = ['#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00', '#F00']
    return (new Array(10).fill(defRow))
  })()
}
