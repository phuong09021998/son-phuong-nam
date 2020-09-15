import { combineReducers } from 'redux';
import ui from './ui';
import users from './users';
import admins from './admins';
import posts from './posts';

export default combineReducers({
  users,
  ui,
  admins,
  posts,
});
