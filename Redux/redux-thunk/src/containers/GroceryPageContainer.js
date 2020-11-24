import React, { Component } from 'react'

import GroceryListContainer from './GroceryListContainer'
import GroceryFormContainer from './GroceryFormContainer'
import GroceryReminderContainer from './GroceryReminderContainer';

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryReminderContainer />
        <GroceryListContainer />
      </div>
    )
  }
}

export default GroceryPageContainer
