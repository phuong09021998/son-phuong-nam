import { combineReducers } from 'redux';
import ui from './ui';
import user from './users';

export default combineReducers({
  user,
  ui,
});
