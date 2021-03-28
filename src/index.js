import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'

// Matrix.defaultProps = {
  // values: defaultPattern
// }

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
