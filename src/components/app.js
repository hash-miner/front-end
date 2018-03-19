import React from 'react';
import View from './view';
import Landing from './landing';
import Transactions from './transactions';
import { Provider } from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const store = createStore();

export default class App extends React.Component {
  componentWillMount() {
    if (localStorage.token) store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token });

  }

  render() {
    let {token, user_type} = store.getState();
    return (
      <main className='application-main'>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/registration/:auth' component={Landing}/>
              <Route exact path='/view/:type' component={View}/>
              <Route exact path='/transactions' component={()=>
                token
                  ? <Transactions token={token} user_type={user_type}/>
                  : <Redirect to ='/registration/signup'/> 
              } />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
