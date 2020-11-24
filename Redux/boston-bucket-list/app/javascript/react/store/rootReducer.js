import { combineReducers } from 'redux';

import { activities } from '../modules/activities';

const rootReducer = combineReducers({
  activities
});

export default rootReducer;
