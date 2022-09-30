import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Practice from './components/pages/Practice';
import Tutorial from './components/pages/Tutorial'
import Profile from './components/pages/Profile'

function App() {
  return (
    <div className='menu'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/practice' element={<Practice/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/tutorial' element={<Tutorial/>} />
          <Route path='/profile' element={<Profile/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
