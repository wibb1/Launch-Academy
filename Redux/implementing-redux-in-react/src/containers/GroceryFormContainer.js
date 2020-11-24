import React, { Component } from 'react'
import { connect } from 'react-redux'

import { clearForm, handleNameChange } from '../modules/groceries'

import GroceryInputField from '../components/GroceryInputField'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  // Below function calculates id of next item in place of a database
  calculateNewId() {
    if (this.props.groceryList.length === 0) {
      return 1
    } else {
      const groceryIds = this.props.groceryList.map(grocery => grocery.id)
      return Math.max(...groceryIds) + 1
    }
  }

  handleFormSubmit(event) {
    event.preventDefault()
    const newId = this.calculateNewId()

    const newGrocery = {
      id: newId,
      name: this.props.name
    }

    this.props.addNewGrocery(newGrocery)

    this.props.clearForm()
  }

  handleNameChange(event) {
    const newName = event.target.value
    this.setState({ name: newName })
  }

  clearForm() {
    this.setState({ name: '' })
  }

  render() {
    return(
      <form onSubmit={this.handleFormSubmit}>
        <GroceryInputField
          handleChange={this.props.handleNameChange}
          name={this.props.name}
        />
        <input type="submit" value="Add To List" />
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    name: state.groceries.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    clearForm: () => dispatch(clearForm())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
) (GroceryFormContainer)
