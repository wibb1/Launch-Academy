import React, { Component } from 'react'
import { connect } from 'react-redux'

import GroceryInputField from '../components/GroceryInputField'
import { clearForm, handleNameChange, postGrocery } from '../modules/groceries'

class GroceryFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleFormSubmit = this.handleFormSubmit.bind(this)
  }

  handleFormSubmit(event) {
    event.preventDefault()

    const newGroceryData = {
      grocery: {
        name: this.props.name
      }
    }

    this.props.postGrocery(newGroceryData)

    this.props.clearForm()
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

const mapStateToProps = (state) => {
  return {
    name: state.groceries.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleNameChange: (event) => dispatch(handleNameChange(event)),
    clearForm: () => dispatch(clearForm()),
    postGrocery: (groceryData) => dispatch(postGrocery(groceryData))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryFormContainer)
