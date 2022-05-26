import React from 'react';
import '../styles/App.css';

function Schedule() {
  return (
    <div className='solid-background' id='schedule'>
      <div className='light'>
        <p className='title' style={{fontSize:'4vw', color:'white'}}>~ Schedule ~</p>
      </div>

      <div className='dual-column'>
      <div className='time-column'>
        <p style={{height:'3vw'}}>10:30 AM</p>
        <p className='light' style={{height:'3vw'}}>1:30 PM</p>
        <p style={{height:'3vw'}}>2:00 PM</p>
        <p className='light' style={{height:'3vw'}}>2:30 PM</p>
        <p style={{height:'3vw'}}>3:30 PM</p>
        <p className='light' style={{height:'3vw'}}>4:00 PM</p>
        <p style={{height:'3vw'}}>4:25 PM</p>
        <p className='light' style={{height:'3vw'}}>4:45 PM</p>
        <p style={{height:'3vw'}}>5:00 PM</p>
      </div>

      <div className='event-column'>
        <p style={{height:'3vw'}}>Wedding Party Rehearsal</p>
        <p className='light' style={{height:'3vw'}}>Guest Arrival</p>
        <p style={{height:'3vw'}}>Wedding Ceremony</p>
        <p className='light' style={{height:'3vw'}}>Group Pictures</p>
        <p style={{height:'3vw'}}>Speeches & Slideshow</p>
        <p className='light' style={{height:'3vw'}}>First Dance</p>
        <p style={{height:'3vw'}}>Cake Cutting</p>
        <p className='light' style={{height:'3vw'}}>Bouquet Toss</p>
        <p style={{height:'3vw'}}>Cornhole Tournament</p>
      </div></div>
    </div>
  );
}

export default Schedule;
