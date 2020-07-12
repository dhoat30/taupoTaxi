import React from 'react'; 
import './iHail.css'; 
import '../../fonts.css'; 
import iPhone from './iphone-app.png'; 
import ihail from './ihail_logo.png'; 
import appStore from './app-store-button.png'; 
import playStore from './google-play-button.png'; 


class IHail extends React.Component{ 
    render(){ 
        return(
            <div id="app"> 
                <div className="app-text">
                     <h3 className="section-heading-top font-color-blue"> Download</h3>
                     <h2 className="section-heading"> Our App</h2>
                    <div className="app-grid"> 
                        <div>
                            <img src={ihail} alt="iHail Logo" className="ihail-logo"/>  
                            <h3 className="grid-heading">Hail a cab anywhere, anytime</h3>
                            <p>ihail is a brand new smartphone app that will connect you to every Blue Bubble Taxi in most main centres. It offers standard fares so you will never be charged surge prices again.
                              <br></br> <br></br><span class="ihail-discount grid-heading">15% Discount on iHail bookings</span>
                                <br/><br/><br/>
                                Available now for Android & iOS
                            </p>
                            <div className="app-store"> 
                               <a href="https://apps.apple.com/au/app/ihail/id1022258209"><img src={appStore} alt="App Store"/></a> 
                               <a href="https://play.google.com/store/apps/details?id=com.ihail.ihail">  <img src={playStore} alt="play store"/></a>
                            </div>
                        </div>

                        <div> 
                        <img src={iPhone} alt="iHail Taxi App" className="iphone" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IHail; 