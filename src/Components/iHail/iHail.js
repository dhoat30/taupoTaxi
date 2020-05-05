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
                <div classNameName="app-text">
                     <h3 classNameName="section-heading-top font-color-blue"> Download</h3>
                     <h2 classNameName="section-heading"> Our App</h2>
                    <div classNameName="app-grid"> 
                        <div>
                            <img src={ihail} alt="iHail Logo" classNameName="ihail-logo"/>  
                            <h3 classNameName="grid-heading">Hail a cab anywhere, anytime</h3>
                            <p>ihail is a brand new smartphone app that will connect you to every Blue Bubble Taxi in most main centres. It offers standard fares so you will never be charged surge prices again.
                                <br/><br/><br/>
                                Available now for Android & iOS
                            </p>
                            <div classNameName="app-store"> 
                               <a href="https://apps.apple.com/au/app/ihail/id1022258209"><img src={appStore} alt="App Store"/></a> 
                               <a href="https://play.google.com/store/apps/details?id=com.ihail.ihail">  <img src={playStore} alt="play store"/></a>
                            </div>
                        </div>

                        <div> 
                        <img src={iPhone} alt="iHail Taxi App" classNameName="iphone" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default IHail; 