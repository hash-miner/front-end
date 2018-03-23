import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <ul className='nav-list'>
          {this.props.currentPage !== 'home'? <li><Link to='/' refresh='true'>Home</Link></li> : undefined}
          {this.props.currentPage !== 'transactions'? <li><Link to='/transactions' refresh='true'>Create Transactions</Link></li> : undefined}
          {this.props.currentPage !== 'inventory' ? <li><Link to='/inventory' refresh='true'>Search Inventory</Link></li> : undefined}
          {this.props.currentPage !== 'signup' && !this.props.token ? <li className='float-right'><Link to='/registration/signup' refresh='true'>Signup</Link></li> : undefined}
          {this.props.currentPage !== 'signin' && !this.props.token ? <li className='float-right'><Link to='/registration/signin' refresh='true'>Login</Link></li> : undefined}
          {this.props.token ? <li><Link to='/registration/signin' onClick={() => {
            delete localStorage.token;
            delete localStorage.user_type;
            window.location.reload();
          }}>LogOut</Link></li> : undefined}
        </ul>
      </nav>
    );
  }
}