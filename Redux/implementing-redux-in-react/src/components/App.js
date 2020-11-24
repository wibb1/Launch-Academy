import React from 'react'
import { Provider } from 'react-redux'

import GroceryPageContainer from '../containers/GroceryPageContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <GroceryPageContainer />
    </Provider>
  )
}

export default App
