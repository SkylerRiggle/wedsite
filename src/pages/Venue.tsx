import React from 'react';
import '../styles/App.css';
import Flower from '../images/bwflower.png'

function Venue() {
  return (
    <div className='venue-background' id='venue'>
      <div>
        <img src={Flower} alt="flower" 
        style={{width:'40%', top:'-30%', right:'-20%', position:'absolute', zIndex:'-1'}}/>
        <img src={Flower} alt="flower" 
        style={{width:'40%', top:'-30%', left:'-20%', transform:'rotate(-90deg)', position:'absolute', zIndex:'-1'}}/>
      </div>

      <div className='dual-column'>
        <div className='address-box'>
          <p className='fancy-title' style={{fontSize:'30pt'}}>The Wedding will be hosted at:</p>
          <br />
          <p>Wintersmith Lodge,</p>
          <p>1621 Wintersmith Dr,</p>
          <p>Ada, OK 74820</p>
          <br />
          <p>Parking will be available around the park</p>
          <p>or in the water park parking lot</p> 
          <p>across the street from the venue.</p>
        </div>

        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5840549402824!2d-96.65605428443897!3d34.76606928722143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b369526f215d0b%3A0x9e2ae27c53079950!2sWintersmith%20Lodge!5e0!3m2!1sen!2sus!4v1652998666340!5m2!1sen!2sus" loading="lazy" className='map'></iframe>
      </div>

      <div style={{display:'flex', justifyContent:'center', alignContent:'center'}}>
        <div className='line'></div>
      </div>
    </div>
  );
}

export default Venue;
