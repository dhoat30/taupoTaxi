import React from 'react'; 
import './HeroSection.css'; 
import '../../fonts.css'; 
import carImage from './hero-section-backgrounc1600.png';

class HeroSection extends React.Component{ 
    render(){ 
        return (
            <div> 
                <div className="hero-section-background"> 
                   <div className="hero-section-background-overlay"></div> 
                   <div className="hero-section-text-container"> 
                          <h1 className="font-color-blue">BOOK TAXI NOW</h1>
                          <h3 className="hero-phone-number font-color-white">0800 228 294<br/>07 378 5100</h3>    
                          <h4 className="slogan-text font-color-white"> Fast. Efficent. Friendly</h4>
                    </div>
                </div>
                <div className="hero-section-car-img"> 
                    <img src={carImage} alt="Taxis in Taupo"/> 
                </div>
            </div>
            
        )
    }

}

export default HeroSection; 