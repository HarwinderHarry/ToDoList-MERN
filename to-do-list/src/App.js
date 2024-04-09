import './App.css';
import {BrowserRouter} from 'react-router-dom'; 
import Welcome from './Components/WelComePage/Welcome';
// import Dashboard from './Components/DashboardPage/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Dashboard/> */}
      <Welcome />
      </BrowserRouter>
    </div>
  );
}

export default App;
