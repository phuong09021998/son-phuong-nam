import { combineReducers } from 'redux';
import UIReducer from './ui';

export default combineReducers({
  ui: UIReducer,
});
