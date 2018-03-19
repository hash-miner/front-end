import React from 'react';
import Landing from './landing';
import Transactions from './transactions';
import {BrowserRouter, Route, Router} from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path='./registration/:auth' component={Landing}/>
          <Route exact path='./transactions' component={Transactions} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}
