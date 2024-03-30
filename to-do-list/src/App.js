import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'; 
import LogIn from './Forms/LogIn';
import SignUp from './Forms/SignUp';


function App() {
  return (
    // <div className="App">
    //   <LogIn />
    //   <SignUp />
    // </div>
    <Router>
    <div className="App">
      {/* <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={'/'}>
            TODO List
          </Link>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={'/log-in'}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={'/sign-up'}>
                  Sign up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Routes>
            <Route exact path="/" element={<LogIn />} />
            <Route path="/log-in" element={<LogIn />} />
            <Route path="/sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
