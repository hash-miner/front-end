import React from 'react';
import AuthForm from '../authform';
import superagent from 'superagent';

export default class Landing extends React.Component {
  constructor (props) {
    super(props);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);

  }

  handleSignUp (user) {
    return superagent.post(`${process.env.MAIN_URL}/signup`)
      .send({
        username: user.username,
        password: user.password,
        email: user.email,
      })
      .then();
  }

  handleSignIn (user) {
    return superagent.get(`${process.env.MAIN_URL}/signin`)
      .auth(user.username, user.password)
      .then();
  }
  render() {
    let {params} = this.props.match;
    let onComplete = params.auth === 'signin'
      ? this.handleSignIn 
      : this.handleSignUp;
    return(
      <div className='landing-container'>
        <AuthForm
          auth={params.auth}
          onComplete={onComplete}/>
      </div>
    );
  }
}

