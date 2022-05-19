import React from 'react';
import '../styles/App.css';
import Flower from '../images/bwflower.png'

function RSVP() {
  return (
    <div className='bw-background' style={{marginTop:'5vw', position:'relative', zIndex:'-1'}}>
      <div style={{width:'25%', height:'30vw'}}>
        <img src={Flower} alt="flower" style={{width:'40vw', transform:'rotate(-90deg) translate(20vw, -14vw)'}}/>
        <img src={Flower} alt="flower" style={{width:'35vw', transform:'rotate(160deg) translate(3vw, 28vw)'}}/>
      </div>

      <div style={{width:'75%', textAlign:'right', marginRight:'2%'}}>
        <p className='title' style={{fontSize:'4vw'}}>YOU'RE INVITED!</p>
        <br />
        <p className='title' style={{fontSize:'7vw'}}>Malorie & Skyler</p>

        <div style={{fontWeight:'bolder', fontSize:'3vw'}}>
          <p>REQUEST THE HONOR OF YOUR PRESENCE AT</p>
          <p>THEIR MATRIMONY ON OCTOBER 15, 2022 AT</p>
          <p>2 PM AT THE WINTERSMITH LODGE</p>
          <br />
        </div>

        <div style={{fontWeight:'regular', fontSize:'2.5vw'}}>
          <p>CONTACT MALORIE AT</p>
          <p><a href="tel: 405-287-7979">(405)287-7979</a> OR <a href="mailto: malorielarman@gmail.com">
            malorielarman@gmail.com</a> OR</p>
          <p>MAIL BACK YOUR INVITATION TO RSVP</p>
        </div>
      </div>
    </div>
  );
}

export default RSVP;
