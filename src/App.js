import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
// import { Button } from './components/Button/res_button';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </Router>
      // {/* <Button onClick={()=>{console.log("Cliked me!")}}
      // type="button"
      // buttonStyle="btn--primary--outline"
      // buttonSize="btn--small"
      // > Buy Now  </Button> */}
  );
}

export default App;
