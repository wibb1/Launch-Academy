import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';
import App from './components/App';

let groceries = [
  { id: 1, name: "Oranges" },
  { id: 2, name: "Bananas" },
  { id: 3, name: "Bread" }
]

ReactDOM.render(
  <App groceries={groceries} />,
  document.getElementById('app')
);
