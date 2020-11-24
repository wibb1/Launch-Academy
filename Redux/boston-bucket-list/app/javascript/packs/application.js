
import React from 'react'
import RedBox from 'redbox-react'
import { render } from 'react-dom'
import configureStore from '../react/store/configureStore';

import App from '../react/components/App'

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(<App store={store} />, reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(<App store={store} />, reactElement)
    }
  }
})
