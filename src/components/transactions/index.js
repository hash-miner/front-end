import React from 'react';
import {tokenDelete} from '../../action/auth-actions';
import {transactionSendRequest} from '../../action/block-actions';
import {connect} from 'react-redux';

class Transactions extends React.Component {
  render(){
    return(
      <div className='transactions-container'>
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