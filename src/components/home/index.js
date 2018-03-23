import React from 'react';
import NavBar from '../navbar';
import Logo from '../../styles/assets/blockchainlogo.png';
//import Logo from '../../styles/assets/magicLogoMinerHash.gif';
import DataFlow from '../../styles/assets/data-flow.png';
import Dan from '../../styles/assets/dan.png';
import Ed from '../../styles/assets/ed.png';
import Hector from '../../styles/assets/hector.png';
import Jesus from '../../styles/assets/jesus.png';
import Info1 from '../../styles/assets/info1.png';
import Info2 from '../../styles/assets/info2.png';
import Info3 from '../../styles/assets/info3a.png';

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
        
        

        <p className='infoheading'>Safe -- Secure -- Open Source</p>

        <div className='box'>
          
          <div className='boximg'>
            <img className='infoimg' src={Info1}/>
          </div>
          <div className='boximg'>
            <img className='infoimg' src={Info2}/>
          </div>
          <div className='boximg'>
            <img className='infoimg' src={Info3}/>
          </div>
        </div>
          
          
        <div className='box'>
          <div className='boxtext'><p className='infotext1'>Traceability one step back, one step up what, where & when disparate methods</p></div>
          <div className='boxtext'><p className='infotext1'>Transparency entire, interconnected view what, where & when how it’s produced other attributes</p></div>
          <div className='boxtext'><p className='infotext1'>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner. Complex mathematical functions create secure and definitive records of who owns what, when.</p></div>
        </div>
          
       
        <div className='aboutus'>
          <p><img className='teamimg' src={Dan}/><img className='teamimg' src={Ed}/><img className='teamimg' src={Hector}/><img className='teamimg' src={Jesus}/></p>
        </div>
      </div>

      
    );
  }
}