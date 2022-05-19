import React from 'react';
import '../styles/App.css';
import Flower from '../images/bwflower.png'
import { transform } from 'typescript';

function Schedule() {
  return (
    <div className='bw-background' style={{marginTop:'5vw', marginBottom:'4vw', position:'relative', zIndex:'-2'}}>
      <div style={{width:'75%', textAlign:'left', margin:'2%', marginTop:'5vw'}}>
        <p className='title' style={{fontSize:'7vw'}}>Schedule</p>

        <div style={{fontWeight:'bold', fontSize:'3vw'}}>
          <p>&nbsp;&nbsp;
            ⊰ 10:30 AM . . . . . . . . . . . . . . Rehearsal</p>
          <p style={{backgroundColor:'#CFCFCF'}}>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 1:30 PM . . . . . . . . . . . . . . Arrival</p>
          <p>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 2:00 PM . . . . . . . . . . . . . . Ceremony</p>
          <p style={{backgroundColor:'#CFCFCF'}}>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 2:30 PM . . . . . . . . . . . . . . Group Pictures</p>
          <p>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 3:30 PM . . . . . . . . . . . . . . Speeches & Slideshow</p>
          <p style={{backgroundColor:'#CFCFCF'}}>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 4:00 PM . . . . . . . . . . . . . . Cake Cutting</p>
          <p>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 4:20 PM . . . . . . . . . . . . . . First Dance</p>
          <p style={{backgroundColor:'#CFCFCF'}}>&nbsp;&nbsp;
            ⊰&nbsp;&nbsp; 4:30 PM . . . . . . . . . . . . . . Cornhole Tournament</p>
        </div>
      </div>

      <div style={{width:'25%', height:'0vw'}}>
        <img src={Flower} alt="flower" style={{width:'40vw', transform:'rotate(-10deg) translate(0, -5vw)'}}/>
        <img src={Flower} alt="flower" style={{width:'35vw', transform:'rotate(100deg) translate(-11vw, 0)'}}/>
      </div>
    </div>
  );
}

export default Schedule;
