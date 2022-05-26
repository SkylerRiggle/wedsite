import React from 'react';
import '../styles/App.css';

function Schedule() {
  return (
    <div className='solid-background' id='schedule'>
      <p className='title' style={{fontSize:'32pt'}}>~ Schedule ~</p>
      <p className='title' style={{fontSize:'32pt'}}>‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾</p>

      <li>
        <ul>10:30 AM Wedding Party Rehearsal</ul>
        <ul>1:30 PM Guest Arrival</ul>
        <ul>2:00 PM Wedding Ceremony</ul>
        <ul>2:30 PM Group Pictures</ul>
        <ul>3:30 PM Speeches & Slideshow</ul>
        <ul>4:00 PM Cake Cutting</ul>
        <ul>4:20 PM First Dance</ul>
        <ul>4:30 PM Cornhole Tournament</ul>
      </li>
    </div>
  );
}

export default Schedule;
