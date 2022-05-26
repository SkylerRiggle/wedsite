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
        <p>10:30 AM</p>
        <p className='light'>1:30 PM</p>
        <p>2:00 PM</p>
        <p className='light'>2:30 PM</p>
        <p>3:30 PM</p>
        <p className='light'>4:00 PM</p>
        <p>4:20 PM</p>
        <p className='light'>4:30 PM</p>
      </div>

      <div className='event-column'>
        <p>Wedding Party Rehearsal</p>
        <p className='light'>Guest Arrival</p>
        <p>Wedding Ceremony</p>
        <p className='light'>Group Pictures</p>
        <p>Speeches & Slideshow</p>
        <p className='light'>Cake Cutting</p>
        <p>First Dance</p>
        <p className='light'>Cornhole Tournament</p>
      </div></div>
    </div>
  );
}

export default Schedule;
