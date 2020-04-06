import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import HeroSection from '../HeroSection/HeroSection'; 
import Services from '../Services/Services'; 
import OurFleet from '../OurFleet/OurFleet';
import IHail from '../iHail/iHail'; 
import AcceptedCards from '../AcceptedCards/AcceptedCards';
import Faq from '../Faq/Faq'; 
import Footer from '../Footer/Footer';
import About from '../About/About';

function App() {
  return (
    <div>
   		<Navbar/> 
      <HeroSection/> 
      <Services/>
      <OurFleet/>
      <IHail/>
      <AcceptedCards/>
      <About/>
      <Faq/>
      <Footer/>

    </div>
  );
}

export default App;
