import reducer from '../reducer';
import thunk from './thunk';
import { createStore, applyMiddleware } from 'redux';

let appStoreCreate = () =>
  createStore(reducer, applyMiddleware(thunk));

export default appStoreCreate;