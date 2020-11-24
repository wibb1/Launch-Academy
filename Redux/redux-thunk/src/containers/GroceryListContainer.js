import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grocery from '../components/Grocery'

class GroceryListContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let groceries = this.props.groceryList.map((grocery) => {
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

const mapStateToProps = (state) => {
  return {
    groceryList: state.groceries.groceryList
  }
}

export default connect(
  mapStateToProps,
  null
)(GroceryListContainer)
