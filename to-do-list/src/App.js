import './App.css';
import {BrowserRouter} from 'react-router-dom'; 
// import Welcome from './Components/WelComePage/Welcome';
import RouterCom from './Components/Router';
// import Dashboard from './Components/DashboardPage/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
      {/* <Dashboard/> */}
      {/* <Welcome /> */}
      <RouterCom />
      </BrowserRouter>
    </div>
  );
}

export default App;
