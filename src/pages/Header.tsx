import React from 'react';
import '../styles/App.css';

function Header() {
  return (
  <div className='header' id='header'>
    <p className='fancy-title' style={{paddingTop:"50px", fontWeight:"bold"}}>Welcome to our Wedsite!</p>
    <p className='fancy-title'>⊰ Mal & Sky ⊱</p>
    <p style={{fontSize:"18pt"}}>10 • 15 • 22</p>
  </div>
  );
}

export default Header;
