import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startTimerWithTimeout } from '../modules/timer'

class GroceryReminderContainer extends Component {
  constructor(props) {
    super(props)

    this.reminderClick = this.reminderClick.bind(this)
  }

  reminderClick() {
    this.props.startTimerWithTimeout()
  }

  render() {
    let reminderStatus

    if (this.props.isRunning) {
      reminderStatus = <img src="https://s3.amazonaws.com/horizon-production/images/redux/loading-icon.gif" alt="loading-icon" height="42" width="42"></img>
    }

    if (this.props.sendAlert) {
      alert("Don't forget to get some kale!")
    }

    return(
      <div id="reminder-group">
        <div>
          {reminderStatus}
        </div>

        <button onClick={this.reminderClick}>
          Set Reminder for Kale
        </button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    isRunning: state.timer.isRunning,
    sendAlert: state.timer.sendAlert
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    startTimerWithTimeout: () => dispatch(startTimerWithTimeout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GroceryReminderContainer)
