import React from 'react'; 
import './AcceptedCards.css'; 
import '../../fonts.css'; 
import paymark from './Eftpos-by-Paymark-Hor-CMYK.png'; 
import farmLand from './farm-land.png'; 
import goldCard from './Supergold-Card-500x321.png'; 
import taxiCharge from './taxi-charge-logo.png'; 
import applePay from './og_image.jpg'; 
import googlePay from './google-pay.jpg'; 
import weChat from './wechat-pay.jpg'; 

class AcceptedCards extends React.Component{ 
    render(){ 
        return(
            <div className="accepted-cards"> 
                <h2 className="section-heading">Payment Method </h2>
                <h3 className="grid-heading">All Credit Cards & DPA Vouchers are accepted plus these ones: </h3>
                <div> 
                    <img src={paymark} alt="Paymark"/>
                    <img src={farmLand} alt="FarmLand"/>
                    <img src={goldCard} alt=" Gold Card"/>
                    <img src={taxiCharge} alt="Taxi Charge"/>
                    <img src={applePay} alt="Apple Pay"/>
                    <img src={googlePay} alt="Google Pay"/>
                    <img src={weChat} alt="We Chat"/>

                </div>
                
            </div>
        ); 
    }
}

export default AcceptedCards; 