import React from 'react';
import NavBar from '../navbar';
import Logo from '../../styles/assets/blockchainlogo.png';
//import Logo from '../../styles/assets/magicLogoMinerHash.gif';
import DataFlow from '../../styles/assets/data-flow.png';
import Dan from '../../styles/assets/dan.png';
import Ed from '../../styles/assets/ed.png';
import Hector from '../../styles/assets/hector.png';
import Jesus from '../../styles/assets/jesus.png';

export default class Home extends React.Component {
  render() {
    return(
      <div>
        
        <div className='h1'>
          <p className='h1headinga'>Meet Hash Miner</p>
          <p className='headinghome h1headingb'>A decentralized distribution tracking chain</p>
          <p><img className='center logosize' src={Logo}/></p>
          <p className='headinghome'>Blockchain technology can quickly track a product's progress from farm to retail store</p>
          <p className='headinghome'>Blockchain technology enables a new era of end-to-end transparency in the global retail system</p>
          <p className='headinghome'>It allows all participants to share information rapidly and with confidence across a strong trusted network</p>
        </div>
        <div className='h2'>
          {/* <p><img className='center dataflow' src={DataFlow}/></p> */}
        </div>
        <div className='aboutus'>
          <p><img className='teamimg' src={Dan}/><img className='teamimg' src={Ed}/><img className='teamimg' src={Hector}/><img className='teamimg' src={Jesus}/></p>
        </div>
      </div>

      
    );
  }
}