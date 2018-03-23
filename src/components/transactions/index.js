import React from 'react';
import NavBar from '../navbar';
import {tokenDelete} from '../../action/auth-actions';
import {transactionSendRequest} from '../../action/block-actions';
import {connect} from 'react-redux';
import BlockForm from './block-form';
import Logo from '../../styles/assets/logo3.gif';

class Transactions extends React.Component {
  render(){
    return(
      <div className='transactions-container'>
        <NavBar token={this.props.token} currentPage='transactions'/>
        <p><img className='center logosize' src={Logo}/></p>
        <h2>Create Transaction</h2>
        <BlockForm user_type={this.props.user_type} token={this.props.token} onComplete={this.props.sendTransaction}/>
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDelete()),
  sendTransaction: (transaction, token) => dispatch(transactionSendRequest(transaction, token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);