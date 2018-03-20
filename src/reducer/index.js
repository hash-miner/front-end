import { combineReducers } from 'redux';
import token from './auth';
import block from './block';
import inventory from './inventory';

export default combineReducers({
  token, block, inventory,
});
