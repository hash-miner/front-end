import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Col, Form, FormGroup} from 'react-bootstrap';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      username: '',
      password: '',
      user_type: '',
      user_type_id: '',
    };
    this.state = {...this.defaultState};
    Object.getOwnPropertyNames(AuthForm.prototype).filter(n => n.startsWith('handle')).map(m => this[m] = this[m].bind(this));

  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({...this.defaultState});
    this.props.history.push('/inventory');
  }

  handleSelect () {
    document.getElementById('custom-type-options').style.visibility = 'visible';

  }

  handleOption (e) {
    document.getElementById('custom-type-options').style.visibility = 'none';
    let temp = e.target.innerText.toLowerCase().split('');
    temp[0] = temp[0].toUpperCase();
    this.setState({user_type: temp.join('')});
  }

  render(){
    const style = {
      button: {
        marginLeft: '40%',
        marginTop: '20px',
      },
      textField: {
        marginTop: '10px',
        marginLeft: '30%',
        display: 'inline-block',
        underlineStyle: {
          borderColor: '#174266',
        },
        underlineFocusStyle: {
          borderColor: '#174266',
        },
        floatingLabelStyle: {
          color: '#174266',
        },
        floatingLabelFocusStyle: {
          color: '#174266',
        },
      },
      card: {
        margin: '0 auto',
        header: {
          marginLeft: '15px',
        },
        height: '440px',
        width: '60%',
      },
    };

    return(
      <Card
        style={style.card}
      >


      { this.props.auth === 'signup'? <div id='custom-type-select'>
      <ul id='custom-type-options' onClick={this.handleOption}>
        <li>
          <RaisedButton 
            label='Grower'
            labelColor='#f2f2f2'
            backgroundColor='rgb(75, 187, 206)'
            style={style.button}
          /> 
        </li>
        <li>
          <RaisedButton 
            label='Distributor'
            labelColor='#f2f2f2'
            backgroundColor='rgb(75, 187, 206)'
            style={style.button}
          /> 
        </li>
        <li><RaisedButton 
          label='Retailer'
          labelColor='#f2f2f2'
          backgroundColor='rgb(75, 187, 206)'
          style={style.button}
        /> </li>
        <li><RaisedButton 
          label='Regulator'
          labelColor='#f2f2f2'
          backgroundColor='rgb(75, 187, 206)'
          style={style.button}
        /> </li>
      </ul>
    </div> : undefined }
    { this.props.auth === 'signup'?
      (!this.state.user_type? undefined
        : this.state.user_type === 'Grower' ? 

          <Col sm={4}>
            <TextField
              value={this.state.user_type_id}
              floatingLabelText='Grower'
              hintText='enter Grower ID'
              style={style.textField}
              floatingLabelFixed={true}
              name='user_type_id'
              onChange={this.handleChange}
              inputStyle={{display: 'inline-block'}}
              underlineStyle={style.textField.underlineStyle}
              underlineFocusStyle={style.textField.underlineFocusStyle}
              floatingLabelStyle={style.textField.floatingLabelStyle}
              floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
            />
          </Col>

          : this.state.user_type === 'Distributor' ?

            <Col sm={4}>
              <TextField
                value={this.state.user_type_id}
                floatingLabelText='Distributor'
                hintText='enter Distributor ID'
                style={style.textField}
                floatingLabelFixed={true}
                name='user_type_id'
                onChange={this.handleChange}
                inputStyle={{display: 'inline-block'}}
                underlineStyle={style.textField.underlineStyle}
                underlineFocusStyle={style.textField.underlineFocusStyle}
                floatingLabelStyle={style.textField.floatingLabelStyle}
                floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
              />
            </Col>

            : this.state.user_type === 'Retailer' ? 

              <Col sm={4}>
                <TextField
                  value={this.state.user_type_id}
                  floatingLabelText='Retailer ID'
                  hintText='enter Retailer ID'
                  style={style.textField}
                  floatingLabelFixed={true}
                  name='user_type_id'
                  onChange={this.handleChange}
                  inputStyle={{display: 'inline-block'}}
                  underlineStyle={style.textField.underlineStyle}
                  underlineFocusStyle={style.textField.underlineFocusStyle}
                  floatingLabelStyle={style.textField.floatingLabelStyle}
                  floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                />
              </Col>

              : undefined) : undefined
    }

        <Form
          horizontal
          className='auth-form'
          onSubmit={this.handleSubmit}>
          <Col sm={4}>
            <TextField
              style={style.textField}
              value={this.state.username}
              floatingLabelText='User Name'
              floatingLabelFixed={true}
              hintText='enter User Name'
              name='username'
              onChange={this.handleChange}
              inputStyle={{display: 'inline-block'}}
              underlineStyle={style.textField.underlineStyle}
              floatingLabelStyle={style.textField.floatingLabelStyle}
              underlineFocusStyle={style.textField.underlineFocusStyle}
              floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}

            />
          </Col>

          <Col sm={4}>
            <TextField
              value={this.state.password}
              floatingLabelText='Password'
              hintText='enter Password'
              style={style.textField}
              floatingLabelFixed={true}
              type='password'
              name='password'
              onChange={this.handleChange}
              inputStyle={{display: 'inline-block'}}
              underlineStyle={style.textField.underlineStyle}
              underlineFocusStyle={style.textField.underlineFocusStyle}
              floatingLabelStyle={style.textField.floatingLabelStyle}
              floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
            />
          </Col>

          
          <FormGroup>
            <RaisedButton 
              type='submit' 
              label={this.props.auth}
              labelColor='#f2f2f2'
              backgroundColor='#476c21'
              style={style.button}
            /> 
          </FormGroup>
        </Form>
      </Card>
    );
  }
}