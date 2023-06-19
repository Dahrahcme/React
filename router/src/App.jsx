import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import Homepage from './Components/Homepage/Homepage';
import About from './Components/About/About';
import Blog from './Components/Blog/Blog';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
      </Routes>
    </div>    
  );
}

export default App;
 