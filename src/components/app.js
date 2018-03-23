import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import BlockChainView from './view';
import Inventory from './inventory';
import Landing from './landing';
import Transactions from './transactions';
import Home from './home';
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
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        fontFamily: 'Pontano Sans, sans-serif',
      },
      appBar: {
        height: '50px',
        backgroundColor: '#000',
      },
      title: {
        color: '#888',
        textAlign: 'center',
      },

    };
    const muiTheme = getMuiTheme({
      inputs: {
        padding: '1px',
        color: '#DDDDDD',
        margin: '0 auto',
        marginTop: '10px',
        marginRight: '30px',
        borderRadius: '8px',
        fontColor: '#E7E7E7',
        backgroundColor: 'white',
        fontFamily: 'Pontano Sans, sans-serif',
      },
    });
    let {token, user_type} = store.getState();
    // let token = localStorage.token;
    // let user_type = localStorage.user_type;
    console.log(store.getState());
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <main className='application-main'>
          {/* <AppBar
          style={{height: '130px', marginBottom: '0px', backgroundColor: '#174266'}} 
          showMenuIconButton={false}/>
            title='Hash Miner'
            titleStyle={styles.title}
            style={styles.appBar}/> */}
          <Provider store={store}>
            <BrowserRouter>
              <React.Fragment>
                <Route exact path='/' component={() => <Home token={token}/>}/>
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
        <footer>
      <p>ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffjsbdfkjsdfkjbsdJKFBSjkdfjksdbFJKsbdfjkbsdjkFBSDJKbfkj</p>
    </footer>
      </MuiThemeProvider>
      
    );
  }
}
