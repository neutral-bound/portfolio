import { combineReducers } from 'redux';
import headUrlReducer from './headUrlReducer';
import topScrollReducer from './topScrollReducer';
import sendContactEmailReducer from './sendContactEmailReducer';

export default combineReducers({
  url: headUrlReducer,
  topButton: topScrollReducer,
  contact: sendContactEmailReducer,
});
