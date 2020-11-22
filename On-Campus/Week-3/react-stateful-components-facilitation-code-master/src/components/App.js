import React from 'react';
import GroceryList from './GroceryList'

const App = props => {
  return(
    <div>
      <h1>Grocery List</h1>
      <GroceryList
        groceries={props.groceries}
      />
    </div>
  );
};

export default App;
