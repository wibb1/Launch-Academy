import React, { Component } from 'react'

import Grocery from '../components/Grocery'

class GroceryListContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let groceries = this.props.groceries.map((grocery) => {
      let id = grocery.id
      let name = grocery.name

      return (
        <Grocery
          key={id}
          name={name}
        />
      )
    })

    return (
      <ul>
        {groceries}
      </ul>
    )
  }
}

export default GroceryListContainer
