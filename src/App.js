import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './home';
import About from './about';
import Signin from './signin';
import './web.css';
function App() {
  return (
    <div className='app'>
      <Router>
      
        <Link to="/Home" className='app1'>home | </Link>
        <Link to="/About" className='app1'>About |</Link>
        <Link to="/Signin" className='app1'>Signin</Link>
        


        <Routes>
          <Route path='/Home' element={<Home />}/>
          <Route path='/About' element={<About />}/>
          <Route path='/Signin' element={<Signin />}/>
        </Routes>


        
      </Router>
    </div>
  )


}


export default App;