import { combineReducers } from 'redux';
import ui from './ui';
import users from './users';

export default combineReducers({
  users,
  ui,
});
