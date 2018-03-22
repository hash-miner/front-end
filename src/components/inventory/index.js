import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navbar';
import { inventoryGetRequest } from '../../action/inventory-actions';

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

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    this.props.inventorySearch(this.state);
    this.setState({...this.defaultState});
  }
  render() {
    return (
      <div className='inventory-view-container'>
        <NavBar token={this.props.token} currentPage='inventory' />
        <h2>Inventory Search</h2>
        <form className='inventory-form' onSubmit={this.handleSubmit}>
          {/* <label>Do not sell</label> */}
          {/* <input 
            type='checkbox'
            name='doNotSell'
            value={this.state.doNotSell}
            onChange={this.handleChange}
          /> */}
          <input 
            type='text'
            name='batchId'
            value={this.state.batchId}
            onChange={this.handleChange}
            placeholder='batch id'
          />
          <input 
            type='text'
            name='itemId'
            value={this.state.itemId}
            onChange={this.handleChange}
            placeholder='item id'
          />
          <input 
            type='text'
            name='distributorId'
            value={this.state.distributorId}
            onChange={this.handleChange}
            placeholder='distributor'
          />
          <input 
            type='text'
            name='growerId'
            value={this.state.growerId}
            onChange={this.handleChange}
            placeholder='grower'
          />
          <input 
            type='text'
            name='retailerId'
            value={this.state.retailerId}
            onChange={this.handleChange}
            placeholder='retailer'
          />
          <button type='submit'>Search</button>
        </form>
        <div className='inventory-list-container'>
            {this.props.inventory.map(v => {
              console.log(v)
              return(
                
                <ul>
                <li key={`${Math.random()}`}>{v.growerId}</li>
                <li key={`${Math.random()}`}>{v.currentLocation}</li>
                <li key={`${Math.random()}`}>{v.blockNumber}</li>
            </ul> 
              )
            })}
        </div>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  inventory: state.inventory,
  token: state.token,
});
let mapDispatchToProps = dispatch => ({
  inventorySearch: (search) => dispatch(inventoryGetRequest(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
