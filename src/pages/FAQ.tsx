import React from 'react';
import '../styles/App.css';

function FAQ() {
  return (
    <div className='solid-background' id='faq'>
      <p>FAQ</p>

      <div className='dual-column'>
        <div>
          <p>QUESTION</p>
          <p>-</p>
          <p>ANSWER</p>
        </div>

        <div>
          <div>
            <p>QUESTION</p>
            <p>-</p>
            <p>ANSWER</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
