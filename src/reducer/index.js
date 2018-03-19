import { combineReducers } from 'redux';
import token from './auth';
import block from './block';

export default combineReducers({
  token, block,
});
