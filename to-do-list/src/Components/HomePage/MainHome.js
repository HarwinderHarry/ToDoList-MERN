import React from 'react';
import './MainHome.css';

const MainHome = () => {
  return (
    <div id='MainHome'>
      <div className='mainBox'>
        <div className='textArea'>
          <h1>Hello, Friedns!</h1>
          <h5>What do you want to do today?</h5>
        </div>
        <div className='vectorArea'>
          <img src='/images/laptopVector.png' alt='' />
        </div>
      </div>
    </div>
  )
}

export default MainHome
