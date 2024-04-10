import React from 'react';
import './WelCome.css';
import {  useNavigate } from "react-router-dom";

const WelcomeCom = () => {
  const navigate = useNavigate();

  return (
    <div id='firstPage'>
      <section className='firstText'>
        <div>
          <img src='/images/mark.png' alt='Icon' />
        </div>
        <h1>Welcome</h1>
        <h3>To The To-Do App</h3>

        <div className='two-btns'>
          <button className='oneBtn' onClick={() => navigate("/log-in")}>Login</button>
          <button className='twoBtn' onClick={() => navigate("/sign-up")}>Sign up</button>
        </div>

      </section>
    </div>
  )
}

export default WelcomeCom;