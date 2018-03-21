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
      distributor: '',
      grower: '',
      retailer: '',
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
            name='distributor'
            value={this.state.distributor}
            onChange={this.handleChange}
            placeholder='distributor'
          />
          <input 
            type='text'
            name='grower'
            value={this.state.grower}
            onChange={this.handleChange}
            placeholder='grower'
          />
          <input 
            type='text'
            name='retailer'
            value={this.state.retailer}
            onChange={this.handleChange}
            placeholder='retailer'
          />
          <button type='submit'>Search</button>
        </form>
        <div className='inventory-list-container'>
          <ul>
            {this.props.inventory.map(v => {
              console.log(v);
            // <li key={v._id}>{}</li>;
            })}
          </ul> 
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
