import React from 'react';
import { Routes, Route } from "react-router-dom";
import NavBar from './Components/Navbar/NavBar';
import Homepage from './Components/Layout/Homepage/Homepage';
import About from './Components/Layout/About/About';
import Blog from './Components/Layout/Blog/Blog';
import Contact from './Components/Layout/Contact/Contact';
import Services from './Components/Layout/Services/Services';
import Products from './Components/Layout/Products/Products';

const App = () => {
  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/About" element={<About />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Services" element={<Services />} /> 
      </Routes> 
    </div>    
  );
}

export default App;
 













































