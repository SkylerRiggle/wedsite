import React from 'react';
import '../styles/App.css';

import Gift from '../images/gift.jpg'
import Blanket from '../images/blanket.jpg'

const Registry = 'https://www.amazon.com/wedding/malorie-larman-skyler-riggle--october-2022/registry/3DTZ7NLBAOJF3' as string
const Photos = "https://drive.google.com/drive/folders/1zGVOfb_aMqBbfRFDyh2XfNqCvc7_rLrv" as string

function ExtLinks() {
  return (
    <div>
      <div className='dual-column'>
        <a href={Registry} className='link-box'>
          <img src={Gift} alt="registry" className='link-image'/>
          <p className='overlay-text' style={{transform:'translate(-50%, -75%)'}}>WEDDING</p>
          <p className='overlay-text' style={{transform:'translate(-50%, 75%)'}}>REGISTRY</p>
        </a>

        <a href={Photos} className='link-box'>
          <img src={Blanket} className='link-image'/>
          <p className='overlay-text' style={{transform:'translate(-50%, -75%)'}}>ENGAGEMENT</p>
          <p className='overlay-text' style={{transform:'translate(-50%, 75%)'}}>PHOTOS</p>
        </a>
      </div>
    </div>
  );
}

export default ExtLinks;
