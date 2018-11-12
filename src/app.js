import React from 'react';
import ReactDOM from 'react-dom';

import TasksifyApp from './components/TasksifyApp';

import 'normalize.css/normalize.css';
import './styles/style.scss';

// Run app
ReactDOM.render(<TasksifyApp />, document.getElementById('app'));