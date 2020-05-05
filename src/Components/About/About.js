import React from 'react'; 
import './About.css'; 
import '../../fonts.css'; 
import aboutUsSvg from './about-us.svg';

class About extends React.Component{ 
    render(){ 
        return (
            <div id="about"> 
                <h2 className="section-heading-top font-color-blue">About</h2>
                <h2 className="section-heading">Us</h2>
                <div className="about-grid"> 
                    <div> 
                        <img src={aboutUsSvg} alt="Taupo Taxis infortmation"/>
                    </div>

                    <div> 
                        <h3 className="grid-heading">Trusted Taxi Service In Taupo</h3>
                        <p>Taupo Taxi Society has been established in Taupo since 1979 to serve Tourists and Local Commuters. Taupo Taxi Society is the most Trusted, Fast and Affordable Taxi company in Taupo.
<br/><br/>


We are available 24/7, even on Christmas. With Us, you have complete peace of mind.<br/><br/>

Currently, we are serving with 11 late model Hybrid cars in Taupo, and we are increasing the numbers. All our vehicles are well equipped with GPS.<br/><br/>



It is an honour for Taupo Taxi to be a proud member of Blue Bubble Group which is the largest Taxi Group across New Zealand. Our fleet always focuses on saving customers' time as time is valuable than money so you can book us through our app, online, phone, or hail.</p>                   
                 </div>
                </div>
            </div>
        ); 
    }
}

export default About; 