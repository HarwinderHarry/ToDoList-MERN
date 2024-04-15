import React, { useState } from "react";
// import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  // const [gender, setGender] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/register", { name, email, password, phone })
      .then((result) => {
        console.log(result)
        navigate('/log-in')
      })
      .catch(
        err => alert("User Already Exist")
      );
    // console.log ("email:" , email , "password:", password)

  };
  return (
    <div id="signupFrom">
      <div className="pageHeading">
        <h1>To-Do App</h1>
        <h4>Start organizing your life day by day</h4>
      </div>
      <section id="signupStart">
        <h2>SignUp</h2>
        <form onSubmit={handleLogin}>
          <input type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required />
          <input type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required />
          <input type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required />
          <input type="tel"
            pattern="[0-9]{10}"
            maxLength={12}
            placeholder="Enter your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required />

          <button type="submit" className="signupBtn">
            Sign Up
          </button>
          <p className="last-line">
            Already have an account? <a href="/log-in">Sign in here.</a>
          </p>
        </form>
      </section>
    </div>
  );
};

export default SignUp;
