import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection'; 
import Services from '../Services/Services'; 

function App() {
  return (
    <div>
   		<Navbar/> 
      <HeroSection/> 
      <Services/>
    </div>
  );
}

export default App;
