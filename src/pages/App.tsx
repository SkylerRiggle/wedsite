import React from 'react';
import '../styles/App.css';

// Page element imports
import Navbar from './Navbar';
import Header from './Header';
import RSVP from './RSVP';
import Schedule from './Schedule';
import Venue from './Venue';
import ExtLinks from './ExtLinks';
import FAQ from './FAQ';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>
      <RSVP></RSVP>
      <Schedule></Schedule>
      <Venue></Venue>
      <ExtLinks></ExtLinks>
      <FAQ></FAQ>
      <Footer></Footer>
    </div>
  );
}

export default App;
