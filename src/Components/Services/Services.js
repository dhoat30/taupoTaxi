import React from 'react'; 
import './Services.css'; 
import '../../fonts.css'; 
import taxiCar from './taxicar.jpg'; 
import tmv from './WheelchairTaxi.jpg'; 
import van from './PartyVan.jpg'; 
import airportTransfer from './airporttransfers.jpg'; 


class Services extends React.Component{ 
    render(){ 
        return(
            <div classNameName="services" id="services"> 
                <h3 classNameName="section-heading-top font-color-blue"> Our</h3>
                <h2 classNameName="section-heading"> Services</h2>

                <div classNameName="services-list"> 
                    <div> 
                        <img src={taxiCar} alt="Taxis in Taupo"/>
                        <h3 classNameName="grid-heading">Taxi Service</h3>
                        <p>Getting you from A to B. Fast and efficient. In the Taupo area and surroundings.</p>
                    </div>

                    <div> 
                        <img src={van} alt="Taxi Vans in Taupo"/>
                        <h3 classNameName="grid-heading">Vans</h3>
                        <p>We have different sized vans available for transport to and from functions, sporting events, birthdays etc. Our vans range from 6 to 9 seaters.</p>
                    </div>

                    <div> 
                        <img src={tmv} alt="Wheelchair Taxis in Taupo"/>
                        <h3 classNameName="grid-heading">Total Mobility Van</h3>
                        <p>Taupo Taxis have mobility vans available, each capable of carrying one wheelchair and we accept all DPA vouchers including out of town vouchers.</p>
                    </div>

                    <div> 
                        <img src={airportTransfer} alt="Airport Transfers in Taupo"/>
                        <h3 classNameName="grid-heading">Airport Transfer</h3>
                        <p>PRE-BOOK a taxi to pick you up or drop you off at the Taupo airport.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default Services;