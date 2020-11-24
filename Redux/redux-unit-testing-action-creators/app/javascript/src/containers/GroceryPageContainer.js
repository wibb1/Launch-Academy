import React, { Component } from 'react'
import { connect } from 'react-redux'

import { closeAlertMessage } from '../modules/alertMessage'

import GroceryFormContainer from './GroceryFormContainer'
import GroceryListContainer from './GroceryListContainer'
import AlertMessage from '../components/AlertMessage'

class GroceryPageContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let alertMessageDiv

    if (this.props.alertMessage){
      alertMessageDiv =
      <AlertMessage
        message={this.props.alertMessage}
        closeAlertMessage={this.props.closeAlertMessage}
      />
    }

    return(
      <div>
        {alertMessageDiv}
        <h1>Grocery List React</h1>
        <GroceryFormContainer />
        <GroceryListContainer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    alertMessage: state.alertMessage.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    closeAlertMessage: () => dispatch(closeAlertMessage())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryPageContainer)
