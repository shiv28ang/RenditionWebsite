import logo from './logo.svg';
import './App.css';
import Home from './pages/Home/Home';
import Events from './pages/Events/Events';
import  Gallery  from './pages/Gallery/Gallery';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import OurTeam from './pages/OurTeam/OurTeam';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/events" element={<Events/>}></Route>
        <Route path="/gallary" element={<Gallery/>}></Route>
        <Route path="/ourteam" element={<OurTeam/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
