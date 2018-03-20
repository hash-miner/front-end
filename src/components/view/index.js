import React from 'react';
import { connect } from 'react-redux';
import NavBar from '../navbar';
import FormattedChain from './pretty-block';
import UnformattedChain from './raw-block';
import { signupRequest, signinRequest } from '../../action/auth-actions';

class BlockChainView extends React.Component {
  render() {
    let { params } = this.props.match;
    return (
      <div className='blockchain-view-container'>
        <NavBar currentPage={params.type} />
        {params.type === 'formatted'? <FormattedChain/> : <UnformattedChain/>}
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BlockChainView);

