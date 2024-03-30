import React,{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
import './SignUp.css';

const SignUp = () => {
    const [name, setName]= useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [gender, setGender] = useState("");

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log ("email:" , email , "password:", password)
    };
  return (
    <div id='signupFrom'>
        <div className='pageHeading'>
            <h1>To-Do App</h1>
            <h4>Start organizing your life day by day</h4>
        </div>
        <section id='signupStart'>
        <Form onSubmit={handleLogin}>
        <h2>SignUp</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value) } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Control type="email" placeholder="Enter your email address" value={email} onChange={(e)=>setEmail(e.target.value) } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Enter your Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail3">
        <Form.Control type="tel" pattern="[0-9]{10}" maxLength={12} placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value) } required/>
      </Form.Group>
      <Form.Group className="mb-3 radio-btns" controlId="formBasicEmail" value={gender} onChange={(e)=>setGender(e.target.value) } required>
        <Form.Label>Gender</Form.Label>
        <Form.Check type='radio' id='radio1' label="Male" />
        <Form.Check type='radio' id='radio2' label="Female" />
        <Form.Check type='radio' id='radio3' label="Others" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      <p className="last-line">
      Already have an account? <a href="/log-in">Sign in here.</a>
        </p>
    </Form>
        </section>
    </div>
  )
}

export default SignUp;