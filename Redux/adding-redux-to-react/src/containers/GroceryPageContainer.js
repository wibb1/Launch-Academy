import React, { Component } from 'react'

import GroceryListContainer from './GroceryListContainer'
import GroceryFormContainer from './GroceryFormContainer'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      groceryList: []
    }

    this.addNewGrocery = this.addNewGrocery.bind(this)
  }

  addNewGrocery(grocery) {
    const newGroceries = this.state.groceryList.concat(grocery)

    this.setState({
      groceryList: newGroceries
    })
  }

  render () {
    return (
      <div>
        <h1>Grocery List React</h1>
        <GroceryFormContainer
          addNewGrocery={this.addNewGrocery}
          groceryList={this.state.groceryList}
        />
        <GroceryListContainer
          groceries={this.state.groceryList}
        />
      </div>
    )
  }
};

export default GroceryPageContainer
