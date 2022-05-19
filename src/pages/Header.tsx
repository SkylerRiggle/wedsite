import React from 'react';
import '../styles/App.css';

import Signatures from '../images/signature.png'

function Header() {
  return (
    <div className='head-background'>
      <p className='title' style={{paddingTop:"50px", fontWeight:"bold"}}>Welcome to our Wedsite!</p>
      <p className='title'>⊰ Mal & Sky ⊱</p>
      <p style={{fontSize:"18pt"}}>October 15, 2022</p>
    </div>
  );
}

export default Header;
