import React from 'react';
import NavBar from '../navbar';
import Logo from '../../styles/assets/blockchainlogo.png';
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
          <p><img className='center dataflow' src={DataFlow}/></p>
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
          <div className='boxtext'><p>Traceability one step back, one step up what, where and when disparate methods</p></div>
          <div className='boxtext'><p>Transparency entire, interconnected view what, where and when how it’s produced other attributes</p></div>
          <div className='boxtext'><p>Blockchain is a technology where distributed servers compute the authenticity of transactions in a decentralized manner. Complex mathematical functions create secure and definitive records of who owns what, when.</p></div>
        </div>
          
        <p className='aboutheading'>About Us</p>
        <div className='boxabout'>
          <div className='boxaboutimg'>
            <img className='teamimg' src={Dan}/>
          </div>
          <div className='boxaboutimg'>
            <img className='teamimg' src={Ed}/>
          </div>
          <div className='boxaboutimg'>
            <img className='teamimg' src={Hector}/>
          </div>
          <div className='boxaboutimg'>
            <img className='teamimg' src={Jesus}/>
          </div>
        </div>

        <div className='boxabout'>
          <div className='boxabouttext1'><p>Full Stack Software Developer. Has a passion for building applications from the ground up both as a Backend and Frontend; and an overwhelming enjoyment for puzzles and troubleshooting.</p></div>
          <div className='boxabouttext'><p>JavaScript and iOS developer with a background in banking legacy systems. Creating simple user interfaces to accomplish technically complex tasks is my strength.</p></div>
          <div className='boxabouttext'><p>Full Stack JavaScript Developer. Passionate about all things Front End/UX-UI and being involved in the community.</p></div>
          <div className='boxabouttext'><p>I like moonlit walks on the beach and I believe in love at first sight. Perfect has 7 letters and so does meeeeee. Coincidence? I think not. I'm a cupcake looking for a stud muffin.</p></div>
        </div>
      </div>
    );
  }
}
