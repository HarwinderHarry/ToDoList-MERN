import React from 'react';
import './WelCome.css';
import {Routes, Route, useNavigate} from "react-router-dom";
import LogIn from '../../Forms/LogIn';
import SignUp from '../../Forms/SignUp';

const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div id='firstPage'>
      <section className='firstText'>
        <div>
          <img src='/images/mark.png' alt='Icon'/>
        </div>
        <h1>Welcome</h1>
        <h3>To The To-Do App</h3>

        <div className='two-btns'>
<button className='oneBtn' onClick={()=> navigate("/log-in")}>Login</button>
<button className='twoBtn' onClick={()=> navigate("/sign-up")}>Sign up</button>
        </div>
        <Routes>
            <Route exact path="/log-in" element={<LogIn /> } />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
      </section>
    </div>
  )
}

export default Welcome;