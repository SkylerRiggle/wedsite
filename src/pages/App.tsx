import React from 'react';
import '../styles/App.css';

// Image imports
import Signatures from '../images/signature.png'
import Sunflower from '../images/sunflower.png'

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
      <div style={{backgroundColor:'#5F8575', height:'2.5vw', backgroundImage:'url('+Sunflower+')', 
      backgroundSize:'auto 2vw', backgroundRepeat:'repeat-x', backgroundPosition:'center'}}>
        <img src={Signatures} alt="signatures" 
        style={{width:'10%', backgroundColor:'white', boxShadow:'0 0 5px 0 black',
        borderRadius:'50%', border:'5px solid goldenrod', position:'relative', bottom:'4vw'}}/>
      </div>
      <RSVP></RSVP>
      <Schedule></Schedule>
      <Venue></Venue>
      <FAQ></FAQ>
      <Links></Links>
    </div>
  );
}

export default App;
