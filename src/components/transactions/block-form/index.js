import React from 'react';

export default class AuthForm extends React.Component {
  constructor(props) {
    super(props);
    this.defaultState = this.props.user_type === 'Grower' ? 
      {
        batchWeight: 0, // Numeric Input
        batchId:'', // String (Text) Input
        location: '',
        distributorId:'', // String (Text) Input
        user_type: this.props.user_type,
      }
      : this.props.user_type === 'Distributor' ? 
        {
          batchId: '', // Select Box
          itemWeight: 0, // Numeric Input
          quantity: 0, // Numeric Input
          packaging:'', // String (Text) Input
          retailerId:'', // String (Text) Input
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
    let user_type = this.props.user_type;
    return(
      <form id='auth-form' onSubmit={this.handleSubmit}>
        {
          user_type === 'Grower'? <React.Fragment>
            <input
              type='text'
              name='batchId'
              value={this.state.batchId}
              onChange={this.handleChange}
              placeholder={'ins batch id'}
            />
            <input
              type='text'
              name='location'
              value={this.state.location}
              onChange={this.handleChange}
              placeholder={'ins location'}
            />
            <input
              type='number'
              name='batchWeight'
              value={this.state.batchWeight}
              onChange={this.handleChange}
            />
            <label htmlFor='weight'>kg</label>
            <input
              type='text'
              name='distributorId'
              value={this.state.distributorId}
              onChange={this.handleChange}
              placeholder={'Insert Distributor ID'}
            />
          </React.Fragment> :
            user_type === 'Distributor'? <React.Fragment>
              <input
                type='text'
                name='batchId'
                value={this.state.batchId}
                onChange={this.handleChange}
                placeholder={'Insert Batch ID'}
              />
              <input
                type='text'
                name='itemWeight'
                value={this.state.itemWeight}
                onChange={this.handleChange}
                placeholder={'Insert Item Weight'}
              />
              <input
                type='text'
                name='quantity'
                value={this.state.quantity}
                onChange={this.handleChange}
                placeholder={'Insert Quantity'}
              />
              <input
                type='text'
                name='packaging'
                value={this.state.packaging}
                onChange={this.handleChange}
                placeholder={'Insert Packaging'}
              />
              <input
                type='text'
                name='retailerId'
                value={this.state.retailerId}
                onChange={this.handleChange}
                placeholder={'Insert Retailer ID'}
              />
            </React.Fragment> 
              :
              <React.Fragment>
                <input
                  type='text'
                  name='itemId'
                  value={this.state.itemId}
                  onChange={this.handleChange}
                  placeholder={'Insert Item ID'}
                />
              </React.Fragment>

        }
        <button type='submit'>{ user_type === 'Grower'? 'Create Batch' : user_type === 'Distributor'? 'Process Items' : 'Receive Item'}</button>
      </form>
    );
  }
}