import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navbar';
import SearchResults from '../search-results';
import { inventoryGetRequest } from '../../action/inventory-actions';
import TextField from 'material-ui/TextField';
import {Card, CardHeader} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import {Col, Form, FormGroup} from 'react-bootstrap';

class Inventory extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      doNotSell: '',
      batchId: '',
      itemId: '',
      distributorId: '',
      growerId: '',
      retailerId: '',
    };
    this.state = {...this.defaultState};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: `${e.target.value}` });
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.inventorySearch(this.state);
    this.setState({...this.defaultState});
  }

  render() {
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

    return(
      <div>
        <NavBar token={this.props.token} currentPage='inventory' />
        <h1 
          style={{fontFamily: 'Pontano Sans, sans-serif', fontSize: '20px', textAlign: 'center'}}>
          Search Inventory</h1>
        <Card
          style={style.card}
        >
          <Form
            horizontal
            className='inventory-form'
            onSubmit={this.handleSubmit}>
            <Col sm={4}>
              <TextField
                style={style.textField}
                value={this.state.batchId}
                floatingLabelText='Batch ID'
                floatingLabelFixed={true}
                hintText='123..'
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
                value={this.state.itemId}
                floatingLabelText='Item ID'
                hintText='123..'
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
            
            <FormGroup>
              <RaisedButton 
                type='submit' 
                label='FIND' 
                labelColor='#f2f2f2'
                backgroundColor='#476c21'
                style={style.button}
              /> 
            </FormGroup>
          </Form>
        </Card>
        <SearchResults transactions={this.props.inventory} />
      </div>
    );
  }
//   render() {
//     return (
//       <div className='inventory-view-container'>
//         <NavBar token={this.props.token} currentPage='inventory' />
//         <h2>Inventory Search</h2>
//         <form className='inventory-form' onSubmit={this.handleSubmit}>
//           {/* <label>Do not sell</label> */}
//           {/* <input 
//             type='checkbox'
//             name='doNotSell'
//             value={this.state.doNotSell}
//             onChange={this.handleChange}
//           /> */}
//           <input 
//             type='text'
//             name='batchId'
//             value={this.state.batchId}
//             onChange={this.handleChange}
//             placeholder='batch id'
//           />
//           <input 
//             type='text'
//             name='itemId'
//             value={this.state.itemId}
//             onChange={this.handleChange}
//             placeholder='item id'
//           />
//           <input 
//             type='text'
//             name='distributorId'
//             value={this.state.distributorId}
//             onChange={this.handleChange}
//             placeholder='distributor'
//           />
//           <input 
//             type='text'
//             name='growerId'
//             value={this.state.growerId}
//             onChange={this.handleChange}
//             placeholder='grower'
//           />
//           <input 
//             type='text'
//             name='retailerId'
//             value={this.state.retailerId}
//             onChange={this.handleChange}
//             placeholder='retailer'
//           />
//           <button type='submit'>Search</button>
//         </form>
//         <div className='inventory-list-container'>
//             {this.props.inventory.map(v => {
//               console.log(v)
//               return(
                
//                 <ul>
//                 <li key={`${Math.random()}`}>{v.growerId}</li>
//                 <li key={`${Math.random()}`}>{v.currentLocation}</li>
//                 <li key={`${Math.random()}`}>{v.blockNumber}</li>
//             </ul> 
//               )
//             })}
//         </div>
//       </div>
//     );
//   }
}

let mapStateToProps = state => ({
  inventory: state.inventory,
  token: state.token,
});
let mapDispatchToProps = dispatch => ({
  inventorySearch: (search) => dispatch(inventoryGetRequest(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
