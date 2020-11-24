import React from 'react';
import { Provider } from 'react-redux';

import JukeboxPageContainer from './JukeboxPageContainer'

const App = (props) => {
  return (
    <Provider store={props.store}>
      <JukeboxPageContainer />
    </Provider>
  )
}

export default App;
