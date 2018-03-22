import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import BlockChainView from './view';
import Inventory from './inventory';
import Landing from './landing';
import Transactions from './transactions';
import { Provider } from 'react-redux';
import createStore from '../lib/app-create-store';
import {BrowserRouter, Route, Redirect} from 'react-router-dom';

const store = createStore();

export default class App extends React.Component {
  componentWillMount() {
    if (localStorage.token) store.dispatch({ type: 'TOKEN_SET', payload: localStorage.token });
    if (localStorage.user_type) store.dispatch({ type: 'USER_TYPE_SET', payload: localStorage.user_type });

  }

  render() {
    let {token, user_type} = store.getState();
    console.log(store.getState());
    return (
      <main className='application-main'>
        <Provider store={store}>
          <BrowserRouter>
            <React.Fragment>
              <Route exact path='/' component={() => 
                token
                  ? <Redirect to='/transactions'/>
                  : <Redirect to='/registration/signup'/>
              }/>
              <Route exact path='/registration/:auth' component={Landing}/>
              <Route exact path='/view/:type' component={BlockChainView}/>
              <Route exact path='/transactions' component={()=>
                token
                  ? <Transactions token={token} user_type={user_type}/>
                  : <Redirect to='/registration/signup'/> 
              } />
              <Route exact path='/inventory' component={Inventory} />
            </React.Fragment>
          </BrowserRouter>
        </Provider>
      </main>
    );
  }
}
