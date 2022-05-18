import React from 'react';
import '../styles/App.css';

// Page element imports
import Header from './Header'
import RSVP from './RSVP'
import Venue from './Venue'
import FAQ from './FAQ'
import Links from './Links'
import Schedule from './Schedule'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <RSVP></RSVP>
      <Schedule></Schedule>
      <Venue></Venue>
      <FAQ></FAQ>
      <Links></Links>
    </div>
  );
}

export default App;
