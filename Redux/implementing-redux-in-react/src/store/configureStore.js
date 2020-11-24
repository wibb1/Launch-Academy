import { createStore } from 'redux'
import rootReducer from './rootReducer'

let configureStore = () => {
  let store = createStore(rootReducer)
  return store
}

export default configureStore
