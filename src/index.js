import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
//when to use brackets and when not? ME: When it's a variable or function
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
