import { combineReducers } from 'redux';
import ui from './ui';
import users from './users';
import admins from './admins';

export default combineReducers({
  users,
  ui,
  admins,
});
