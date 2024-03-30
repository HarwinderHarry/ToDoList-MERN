import React,{useState} from 'react';
import {Form , Button} from 'react-bootstrap';
import './LogIn.css';

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
    <div id='loginFrom'>
        <section id='loginStart'>
        <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail1">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter your name" value={name} onChange={(e)=>setName(e.target.value) } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail2">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value) } required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}  required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail3">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="number" placeholder="Enter your phone number" value={phone} onChange={(e)=>setPhone(e.target.value) } required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Gender</Form.Label>
        <Form.Check type='radio' id='radio1' label="Male" />
        <Form.Check type='radio' id='radio2' label="Female" />
        <Form.Check type='radio' id='radio3' label="Others" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </section>
    </div>
  )
}

export default SignUp;