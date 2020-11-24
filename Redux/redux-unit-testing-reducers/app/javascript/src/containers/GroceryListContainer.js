import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getGroceries } from '../modules/groceries'

import Grocery from '../components/Grocery'

class GroceryListContainer extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.getGroceries()
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

const mapDispatchToProps = (dispatch) => {
  return {
    getGroceries: () => dispatch(getGroceries())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryListContainer)
