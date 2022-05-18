import React from 'react';
import '../styles/App.css';

import Signatures from '../images/dog.jpg'

function Header() {
  return (
    <div>
      <p>Welcome to our Wedsite!</p>
      <img src={Signatures} alt="Signatures" />
    </div>
  );
}

export default Header;
