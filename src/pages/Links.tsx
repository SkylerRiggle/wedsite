import React from 'react';
import '../styles/App.css';

// Image imports
import Gift from '../images/gift.png'
import Camera from '../images/camera.png'
import Sunflower from '../images/sunflower.png'

function Links() {
  return (
    <div className='red-background'>
      <p className='title' style={{backgroundColor:'rgb(100, 0, 0)', marginBottom:'2vw', borderBottom:'5px solid goldenrod'}}>Links</p>

      <div className='dual-column'>
        <div style={{width:'50%'}}>
          <a href="https://www.amazon.com/wedding/malorie-larman-skyler-riggle--october-2022/registry/3DTZ7NLBAOJF3">
            <img src={Gift} alt="gift" className='imageLinks'/>
            <p className='labelLink'>Wedding Registry</p>
          </a>
        </div>

        <div style={{width:'50%'}}>
          <a href="https://drive.google.com/drive/folders/1zGVOfb_aMqBbfRFDyh2XfNqCvc7_rLrv">
            <img src={Camera} alt="camera" className='imageLinks'/>
            <p className='labelLink'>Engagement Photos</p>
          </a>
        </div>

      </div>

      <div style={{backgroundColor:'#5F8575', height:'2.5vw', backgroundImage:'url('+Sunflower+')', 
      backgroundSize:'auto 2vw', backgroundRepeat:'repeat-x', backgroundPosition:'center',
      borderTop:'2px solid goldenrod', borderBottom:'2px solid goldenrod', marginTop:'2vw'}}></div>
    </div>
  );
}

export default Links;
