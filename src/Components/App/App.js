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
import Modal from '../UI/Modal/Modal';

function App() {

  return (
    <div>
      <Navbar />
      <HeroSection />
      <Services />
      <OurFleet />
      <IHail />
      <AcceptedCards />
      <About />
      <Faq />
      <Footer />
      <Modal></Modal>
    </div>
  );
}

export default App;
