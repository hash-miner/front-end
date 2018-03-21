import { combineReducers } from 'redux';
import token from './auth';
import block from './block';
import inventory from './inventory';
import user_type from './usertype';

export default combineReducers({
  token, block, inventory, user_type,
});
