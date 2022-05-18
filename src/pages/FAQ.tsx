import React from 'react';
import '../styles/App.css';

function FAQ() {
  return (
    <div className='gray-background'>
      <p className='title'>FAQ</p>
      <p>Frequently Asked Questions</p>

      <div className='dual-column'>
        <div>
          <p>QUESTION</p>
          <p>ANSWER</p>
        </div>

        <div>
          <p>QUESTION</p>
          <p>ANSWER</p>
        </div>
      </div>

    </div>
  );
}

export default FAQ;
