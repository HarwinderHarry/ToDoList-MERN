import React,{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
import './LogIn.css';

const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log ("email:" , email , "password:", password)
    };
  return (
    <div id='loginFrom'>
        <div className='pageHeading'>
            <h1>To-Do App</h1>
            <h4>Start organizing your life day by day</h4>
        </div>
        <section id='loginStart'>
            <h2>Log in</h2>
        <Form onSubmit={handleLogin} action='/login' method='post'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value) } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
      <p className="last-line">
      Don’t have an account? <a href="/sign-up">Create here.</a>
        </p>
    </Form>
        </section>
    </div>
  )
}

export default LogIn;