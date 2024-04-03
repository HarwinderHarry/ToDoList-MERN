import './App.css';
import {BrowserRouter} from 'react-router-dom'; 
import Dashboard from './Components/DashboardPage/Dashboard';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Dashboard/>
      </BrowserRouter>
    </div>
  );
}

export default App;
