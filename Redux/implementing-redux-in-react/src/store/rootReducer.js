import { combineReducers } from 'redux'

import { groceries } from '../modules/groceries'

const rootReducer = combineReducers({
  groceries
})

export default rootReducer
