import React from 'react';
import { Provider } from 'react-redux';

import DonutOrdersIndexContainer from '../containers/DonutOrdersIndexContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <DonutOrdersIndexContainer />
    </Provider>
  )
}

export default App;
