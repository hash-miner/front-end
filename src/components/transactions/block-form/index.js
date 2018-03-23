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
        batchWeight: 0, // Numeric Input
        batchId:'', // String (Text) Input
        location: '',
        toAddress:'', // String (Text) Input
        user_type: this.props.user_type,
      }
      : this.props.user_type === 'Distributor' ? 
        {
          batchId: '', // Select Box
          itemWeight: 0, // Numeric Input
          quantity: 0, // Numeric Input
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
        height: '390px',
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
                  hintText='To address'
                  name='batchWeight'
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
                    value={this.state.itemId}
                    floatingLabelText='Item ID'
                    hintText='insert Batch ID'
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
                :
                <React.Fragment>

                  <Col sm={4}>
                    <TextField
                      value={this.state.growerId}
                      floatingLabelText='Grower ID'
                      hintText='123..'
                      style={style.textField}
                      floatingLabelFixed={true}
                      name='growerId'
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
              label='CREATE' 
              labelColor='#f2f2f2'
              backgroundColor='#476c21'
              style={style.button}
            /> 
          </FormGroup>
        </Form>
      </Card>
      
      // <form id='auth-form' onSubmit={this.handleSubmit}>
      //   {
      //     user_type === 'Grower'? <React.Fragment>
      //       <input
      //         type='text'
      //         name='batchId'
      //         value={this.state.batchId}
      //         onChange={this.handleChange}
      //         placeholder={'ins batch id'}
      //       />
      //       <input
      //         type='text'
      //         name='location'
      //         value={this.state.location}
      //         onChange={this.handleChange}
      //         placeholder={'ins location'}
      //       />
      //       <input
      //         type='number'
      //         name='batchWeight'
      //         value={this.state.batchWeight}
      //         onChange={this.handleChange}
      //       />
      //       <label htmlFor='weight'>kg</label>
      //       <input
      //         type='text'
      //         name='toAddress'
      //         value={this.state.toAddress}
      //         onChange={this.handleChange}
      //         placeholder={'Insert Distributor ID'}
      //       />
      //     </React.Fragment> :
      //       user_type === 'Distributor'? <React.Fragment>
      //         <input
      //           type='text'
      //           name='batchId'
      //           value={this.state.batchId}
      //           onChange={this.handleChange}
      //           placeholder={'Insert Batch ID'}
      //         />
      //         <input
      //           type='text'
      //           name='itemWeight'
      //           value={this.state.itemWeight}
      //           onChange={this.handleChange}
      //           placeholder={'Insert Item Weight'}
      //         />
      //         <input
      //           type='text'
      //           name='quantity'
      //           value={this.state.quantity}
      //           onChange={this.handleChange}
      //           placeholder={'Insert Quantity'}
      //         />
      //         <input
      //           type='text'
      //           name='packaging'
      //           value={this.state.packaging}
      //           onChange={this.handleChange}
      //           placeholder={'Insert Packaging'}
      //         />
      //         <input
      //           type='text'
      //           name='toAddress'
      //           value={this.state.toAddress}
      //           onChange={this.handleChange}
      //           placeholder={'Insert Retailer ID'}
      //         />
      //       </React.Fragment> 
      //         :
      //         <React.Fragment>
      //           <input
      //             type='text'
      //             name='itemId'
      //             value={this.state.itemId}
      //             onChange={this.handleChange}
      //             placeholder={'Insert Item ID'}
      //           />
      //         </React.Fragment>

      //   }
      //   <button type='submit'>{ user_type === 'Grower'? 'Create Batch' : user_type === 'Distributor'? 'Process Items' : 'Receive Item'}</button>
      // </form>
    );
  }
}