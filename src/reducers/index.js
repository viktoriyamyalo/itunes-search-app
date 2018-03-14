import { combineReducers } from 'redux';
import tracksReducer from './track-reducer';
import selectedTrackReducer from './selected-track-reducer';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  tracks: tracksReducer,
  selectedTrack: selectedTrackReducer,
  form: formReducer
});

export default rootReducer;