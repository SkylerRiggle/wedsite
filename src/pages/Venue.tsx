import React from 'react';
import '../styles/App.css';

function Venue() {
  return (
    <div className='red-background'>
      <p className='title' style={{fontSize:'6vw'}}>Venue</p>
      <div className='dual-column'>
        <div style={{width:'50%', textAlign:'left', margin:'5%', fontSize:'2.5vw'}}>
          <p>The Wedding will be held at</p>
          <p>Wintersmith Lodge in Ada OK:</p>
          <br />

          <p>Wintersmith Lodge,</p>
          <p>1621 Wintersmith Dr,</p>
          <p>Ada, OK 74820</p>
          <br />

          <p>Parking can be around the park</p>
          <p>or in the water park parking lot</p>
          <p>across the street from the venue.</p>
        </div>

        <div style={{width:'50%'}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3277.5840549402824!2d-96.65605428443897!3d34.76606928722143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87b369526f215d0b%3A0x9e2ae27c53079950!2sWintersmith%20Lodge!5e0!3m2!1sen!2sus!4v1652998666340!5m2!1sen!2sus" 
          width="85%" style={{border:'2px solid goldenrod', aspectRatio:'1/1'}} loading="lazy"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Venue;
