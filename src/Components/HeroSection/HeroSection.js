import React from 'react'; 
import './HeroSection.css'; 
import '../../fonts.css'; 
import carImage from './hero-section-backgrounc1600.png';

class HeroSection extends React.Component{ 
    render(){ 
        return (
            <div> 
                <div classNameName="hero-section-background"> 
                   <div classNameName="hero-section-background-overlay"></div> 
                   <div classNameName="hero-section-text-container"> 
                          <h1 classNameName="font-color-blue">BOOK TAXI NOW</h1>
                          <h3 classNameName="hero-phone-number font-color-white">0800 228 294<br/>07 378 5100</h3> 
                          <a href="http://akltaxi.cooptaxi.co.nz/taupotaxis/" classNameName="link-text"> Book Online</a>   
                          <h4 classNameName="slogan-text font-color-white"> Fast. Efficent. Friendly</h4>
                    </div>
                </div>
                <div classNameName="hero-section-car-img"> 
                    <img src={carImage} alt="Taxis in Taupo"/> 
                </div>
            </div>
            
        )
    }

}

export default HeroSection; 