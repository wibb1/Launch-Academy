import { combineReducers } from 'redux';

import { playlists } from '../modules/playlists'
import { songs } from "../modules/songs"

let rootReducer = combineReducers({
  playlists,
  songs
});

export default rootReducer;
