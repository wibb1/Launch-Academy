import { combineReducers } from 'redux';

import { donuts } from '../modules/donuts'

let rootReducer = combineReducers({
  donuts
});

export default rootReducer;
