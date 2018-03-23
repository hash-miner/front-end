import React from 'react';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Col, Form, FormGroup} from 'react-bootstrap';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = this.props.user_type === 'Grower' ? 
      {
        batchWeight: '', // Numeric Input
        batchId:'', // String (Text) Input
        location: '',
        toAddress:'', // String (Text) Input
        user_type: this.props.user_type,
      }
      : this.props.user_type === 'Distributor' ? 
        {
          batchId: '', // Select Box
          itemWeight: '', // Numeric Input
          quantity: '', // Numeric Input
          packaging:'', // String (Text) Input
          toAddress:'', // String (Text) Input
          user_type: this.props.user_type,
        }
        :
        {
          itemId:'', // Select Box
          user_type: this.props.user_type,
        };
    this.state = {...this.defaultState};
    Object.getOwnPropertyNames(AuthForm.prototype)
      .filter(n => n.startsWith('handle'))
      .map(m => (this[m] = this[m].bind(this)));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
    this.setState({...this.defaultState});
  }

  handleSelect() {
    document.getElementById('custom-type-options').style.visibility = 'visible';
  }

  handleOption(e) {
    document.getElementById('custom-type-options').style.visibility =
      'invisible';
    this.setState({ user_type: e.target.innerText });
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
        height: '420px',
        width: '50%',
      },
    };

    let user_type = this.props.user_type;
    return(
      <Card
        style={style.card}
      >
        <Form
          horizontal
          id='auth-form'
          onSubmit={this.handleSubmit}>
          {
            user_type === 'Grower'? <React.Fragment>
              <Col sm={4}>
                <TextField
                  style={style.textField}
                  value={this.state.batchId}
                  floatingLabelText='Batch ID'
                  floatingLabelFixed={true}
                  hintText='insert Batch ID'
                  name='batchId'
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
                  style={style.textField}
                  value={this.state.location}
                  floatingLabelText='Location'
                  floatingLabelFixed={true}
                  hintText='insert Location'
                  name='location'
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
                  style={style.textField}
                  value={this.state.batchWeight}
                  floatingLabelText='Batch weight'
                  floatingLabelFixed={true}
                  hintText='insert Batch weight'
                  name='batchWeight'
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
                  style={style.textField}
                  value={this.state.toAddress}
                  floatingLabelText='To Address'
                  floatingLabelFixed={true}
                  hintText='insert To address'
                  name='toAddress'
                  onChange={this.handleChange}
                  inputStyle={{display: 'inline-block'}}
                  underlineStyle={style.textField.underlineStyle}
                  floatingLabelStyle={style.textField.floatingLabelStyle}
                  underlineFocusStyle={style.textField.underlineFocusStyle}
                  floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                />
              </Col>

            </React.Fragment> :
              user_type === 'Distributor'? <React.Fragment>
                <Col sm={4}>
                  <TextField
                    style={style.textField}
                    value={this.state.batchId}
                    floatingLabelText='Batch ID'
                    floatingLabelFixed={true}
                    hintText='insert Batch ID'
                    name='batchId'
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
                    style={style.textField}
                    value={this.state.itemWeight}
                    floatingLabelText='Item weight'
                    floatingLabelFixed={true}
                    hintText='insert Item weight'
                    name='itemWeight'
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
                    style={style.textField}
                    value={this.state.quantity}
                    floatingLabelText='Quantity'
                    floatingLabelFixed={true}
                    hintText='insert Quantity'
                    name='quantity'
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
                    style={style.textField}
                    value={this.state.packaging}
                    floatingLabelText='Packaging'
                    floatingLabelFixed={true}
                    hintText='insert Packaging type'
                    name='packaging'
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
                    style={style.textField}
                    value={this.state.toAddress}
                    floatingLabelText='To Address'
                    floatingLabelFixed={true}
                    hintText='insert To address'
                    name='toAddress'
                    onChange={this.handleChange}
                    inputStyle={{display: 'inline-block'}}
                    underlineStyle={style.textField.underlineStyle}
                    floatingLabelStyle={style.textField.floatingLabelStyle}
                    underlineFocusStyle={style.textField.underlineFocusStyle}
                    floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                  />
                </Col>

              </React.Fragment> 
                :
                <React.Fragment>
                  <Col sm={4}>
                    <TextField
                      value={this.state.itemId}
                      floatingLabelText='Item ID'
                      hintText='insert Item ID'
                      style={style.textField}
                      floatingLabelFixed={true}
                      name='itemId'
                      onChange={this.handleChange}
                      inputStyle={{display: 'inline-block'}}
                      underlineStyle={style.textField.underlineStyle}
                      underlineFocusStyle={style.textField.underlineFocusStyle}
                      floatingLabelStyle={style.textField.floatingLabelStyle}
                      floatingLabelFocusStyle={style.textField.floatingLabelFocusStyle}
                    />
                  </Col>
                </React.Fragment>
          }
          <FormGroup>
            <RaisedButton 
              type='submit' 
              label={ user_type === 'Grower'? 'Create Batch' : user_type === 'Distributor'? 'Process Items' : 'Receive Item'}
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