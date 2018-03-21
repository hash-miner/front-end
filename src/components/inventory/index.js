import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navbar';
import { inventoryGetRequest } from '../../action/inventory-actions';

class BlockChainView extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = {
      search_string: '',
    };
    this.state = {...this.defaultState};
  }

  handleChange (e) {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit (e) {
    e.preventDefault();
    let search = this.state.search_string.replace(' ', '_');
    this.props.inventorySearch(search);
    this.setState({...this.defaultState});
  }
  render() {
    return (
      <div className='inventory-view-container'>
        <NavBar currentPage='inventory' />
        <h2>Inventory Search</h2>
        <form className='inventory-form' onSubmit={this.handleSubmit}>
          <input 
            type='text'
            name='search_string'
            value={this.state.search_string}
            onChange={this.handleChange}
            placeholder='Batch #1234 + Grower #1234'
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
});
let mapDispatchToProps = dispatch => ({
  inventorySearch: (search) => dispatch(inventoryGetRequest(search)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BlockChainView);
