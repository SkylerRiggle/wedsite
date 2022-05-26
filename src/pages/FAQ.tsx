import React from 'react';
import '../styles/App.css';

function FAQ() {
  return (
    <div className='solid-background' id='faq'>
      <div className='light'>
        <p className='title' style={{fontSize:'4vw', color:'white'}}>~ FAQ ~</p>
      </div>

      <div style={{color:'white'}}>
      <div className='dual-column' style={{paddingTop:'20px'}}>
        <div className='q-card'>
          <p>What foods will be served?</p>
          <p>-</p>
          <p>Since the event will be held at 2PM, this should give attendees a chance to eat lunch before the ceremony. Afterward, we will have drinks, a large charcuterie board (finger foods), and cakes.</p>
        </div>

        <div className='q-card'>
          <p>Should I match the wedding colors/What are the wedding colors?</p>
          <p>-</p>
          <p>You do not have to match our colors! If you'd like to wear matching colors, our colors are reds, yellows, pinks, and greens. </p>
        </div>
      </div>

      <div className='dual-column' style={{paddingTop:'20px'}}>
        <div className='q-card'>
          <p>Where do I park?</p>
          <p>-</p>
          <p>Parking can be around the park or in the water park parking lot across the street from the venue.</p>
        </div>

        <div className='q-card'>
          <p>Can I get a digital save-the-date?</p>
          <p>-</p>
          <p>Yes! If you go to our Engagement Photos link, you can access the save-the-date there!</p>
        </div>
      </div>

      <div className='dual-column' style={{paddingTop:'20px'}}>
        <div className='q-card'>
          <p>Can I spread the news of your wedding/May I bring a friend?</p>
          <p>-</p>
          <p>While we would love to have everyone we’ve known gather to celebrate this wonderful event, we do have limited seating and food. Please do not share the website with those not invited (it has sensitive information) or location and time with just anyone. If we’d want someone to view this page, we will share it with them! :)</p>
        </div>

        <div className='q-card'>
          <p>What should I wear?</p>
          <p>-</p>
          <p>We ask attendees to dress in church clothes for the ceremony and pictures, but once all the pictures (including a group picture with everyone) are taken we will want to play games for the reception! A men's and women's bathroom are at the venue if you'd like to change into more comfortable clothes.</p>
        </div>
      </div>

      <div className='dual-column' style={{paddingTop:'20px', paddingBottom:'20px'}}>
        <div className='q-card'>
          <p>What games will be held?</p>
          <p>-</p>
          <p>Games available to play will be cornhole, horseshoe, volleyball, oversized checkers, and spikeball! There will also be a basketball court, sidewalk track, and play areas for littles at the park! If you bring your own pole, you can fish in the lake. We will have two tables set up for checkers and chess as well.
          We would like to go outside and spend time together with our newly joined family, but if that doesn't permit we will stay inside and bring games in to play. No matter the weather, we will try having a cornhole tournament around 5 PM with a prize and trophy for the winning team!</p>
        </div>

        <div className='q-card'>
          <p>When do I arrive?</p>
          <p>-</p>
          <p>We ask that the Wedding Party arrive by 10:30 AM to rehearse once more. 
          Please may friends and family arrive by 1:30 PM (at the latest) to be seated before the ceremony. We would like you to sign in and grab bubbles on the way to your seat. There is only one available entryway so soon after the wedding party will begin lining up for the ceremony. Since we will have a packed day, we would like to begin on time.</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
