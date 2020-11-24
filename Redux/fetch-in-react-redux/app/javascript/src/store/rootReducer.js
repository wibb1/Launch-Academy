import { combineReducers } from 'redux'

import { groceries } from '../modules/groceries'
import { alertMessage } from '../modules/alertMessage'

const rootReducer = combineReducers({
  groceries,
  alertMessage
})

export default rootReducer
