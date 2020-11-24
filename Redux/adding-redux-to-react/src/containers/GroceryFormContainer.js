import React, { Component } from 'react'

import GroceryInputField from '../components/GroceryInputField'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.clearForm = this.clearForm.bind(this)
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
      name: this.state.name
    }

    this.props.addNewGrocery(newGrocery)

    this.clearForm()
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
          handleChange={this.handleNameChange}
          name={this.state.name}
        />
        <input type="submit" value="Add To List" />
      </form>
    )
  }
}

export default GroceryFormContainer
