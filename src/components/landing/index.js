import React from 'react';
import {connect} from 'react-redux';
import NavBar from '../navbar';
import AuthForm from './auth-form';
import {signupRequest, signinRequest} from '../../action/auth-actions';
import Logo from '../../styles/assets/logo3.gif';

class Landing extends React.Component {
  render() {
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.props.signin 
      : this.props.signup;
    return(
      <div className='landing-container'>
        <NavBar token={this.props.token} currentPage={params.auth}/>
        <p><img className='center logosize' src={Logo}/></p>
        <AuthForm
          history={this.props.history}
          auth={params.auth}
          onComplete={onComplete}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  token: state.token,
});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  signin: user => dispatch(signinRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

