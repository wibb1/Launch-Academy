import React from 'react'
import { render } from 'react-dom'

import configureStore from '../src/store/configureStore';
import App from '../src/components/app'
import RedBox from 'redbox-react'

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render(
          <App store={store} />,
          reactElement
        )
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render(
        <App store={store} />,
        reactElement
      )
    }
  }
})
