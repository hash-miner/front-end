import React from 'react';
import {Link} from 'react-router-dom';

export default class NavBar extends React.Component {
  render() {
    return(
      <nav>
        <ul className='nav-list'>
          {this.props.currentPage !== 'pretty-view'? <li><Link to='/view/pretty'>Formatted View</Link></li> : undefined}
          {this.props.currentPage !== 'raw-view'? <li><Link to='/view/raw'>Unformatted View</Link></li> : undefined}
          {this.props.currentPage !== 'transactions'? <li><Link to='/transactions'>Transactions</Link></li> : undefined}
          {this.props.currentPage === 'signin'? <li><Link to='/registration/signup'>Signup</Link></li> : undefined}
          {this.props.currentPage === 'signup'? <li><Link to='/registration/signin'>Login</Link></li> : undefined}
          {this.props.currentPage !== 'signup' && this.props.currentPage !== 'signin'? <li><Link to='/registration/signin'>LogOut</Link></li> : undefined}
        </ul>
      </nav>
    );
  }
}