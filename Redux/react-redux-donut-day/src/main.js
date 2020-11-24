import './main.scss'
import React from 'react'
import ReactDOM from 'react-dom'

import configureStore from './store/configureStore';
import App from './components/App';

const store = configureStore();

ReactDOM.render(
  <App store={store} />,
  document.getElementById('app')
)
