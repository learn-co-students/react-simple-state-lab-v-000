import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1, defaultPattern} from './data.js'
import Matrix from './Matrix.js'

ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
