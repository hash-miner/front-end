import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      user_type: '',
      user_type_id: '',
    };
    Object.getOwnPropertyNames(AuthForm.prototype).filter(n => n.startsWith('handle')).map(m => this[m] = this[m].bind(this));

  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  handleSelect () {
    document.getElementById('custom-type-options').style.visibility = 'visible';

  }

  handleOption (e) {
    document.getElementById('custom-type-options').style.visibility = 'invisible';
    this.setState({user_type: e.target.innerText});
  }

  render(){
    return(
      <form id='auth-form' onSubmit={this.handleSubmit}>
        <input 
          type='text'
          name='username'
          value={this.state.username}
          onChange={this.handleChange}
          placeholder='Username'/>
        <input 
          type='text'
          name='password'
          value={this.state.password}
          onChange={this.handleChange}
          placeholder='Password'/>
        <div id='cutsom-type-select'>
          <p onClick={this.handleSelect}>{this.state.user_type}</p>
          <ul id='custom-type-options' onClick={this.handleOption}>
            <li>Grower</li>
            <li>Distributor</li>
            <li>Dispensery</li>
          </ul>
        </div>
        { 
          !this.state.user_type? undefined
            : this.state.user_type === 'Grower' ? 
              <input
                type='text'
                name='user_type_id'
                value={this.state.user_type_id}
                onChange={this.handleChange}
                placeholder={`Insert ${this.state.user_type} ID`}
              />
              : this.state.user_type === 'Distributor' ?
                <input
                  type='text'
                  name='user_type_id'
                  value={this.state.user_type_id}
                  onChange={this.handleChange}
                  placeholder={`Insert ${this.state.user_type} ID`}
                />
                : this.state.user_type === 'Dispensery' ? 
                  <input
                    type='text'
                    name='user_type_id'
                    value={this.state.user_type_id}
                    onChange={this.handleChange}
                    placeholder={`Insert ${this.state.user_type} ID`}
                  />
                  : undefined
        }
        <button type='submit'></button>
      </form>
    );
  }
}