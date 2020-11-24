import React from 'react';
import { Provider } from 'react-redux';

import BucketListContainer from '../containers/BucketListContainer';

const App = (props) => {
  return (
    <Provider store={props.store}>
      <BucketListContainer />
    </Provider>
  )
};

export default App;
