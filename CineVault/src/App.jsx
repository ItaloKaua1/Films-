import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

import './App.css';

function App() {
  return (
    <div className="AppContainer">
        <Navbar/>
        <Outlet/>
    </div>
  );
}

export default App
