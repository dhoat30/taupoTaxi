import React from 'react'; 
import './Footer.css'; 
import '../../fonts.css'; 
import footerLogo from './footer-logo.png'; 


class Footer extends React.Component{
    render(){ 
        return (
            <div> 
            <div id="contact"> 

                <div className="footer-logo"> 
                        <img src={footerLogo} alt="Taupo Taxis"/>
                </div>

                <div className="contact-details"> 
                    <h5 className="grid-heading underline font-color-white2">Contact</h5>

                    <div className="contact-details-grid"> 
                        <div>
                        <svg  width="30" height="30" viewBox="0 0 20 20">
	
                            <defs>
                            <clipPath id="clip-path">
                                <rect id="Rectangle_1124" data-name="Rectangle 1124" width="20" height="20" transform="translate(491.212 9769)" fill="#01BF9A" stroke="#707070" stroke-width="1"/>
                            </clipPath>
                            </defs>
                            <g id="Mask_Group_14" data-name="Mask Group 14" transform="translate(-491.212 -9769)" clip-path="url(#clip-path)">
                            <path id="phone-solid" d="M19.477.971,15.372.024a.954.954,0,0,0-1.086.549L12.391,4.994A.945.945,0,0,0,12.664,6.1l2.392,1.958a14.63,14.63,0,0,1-7,7L6.1,12.66A.946.946,0,0,0,5,12.387L.576,14.282a.959.959,0,0,0-.553,1.09l.947,4.105a.947.947,0,0,0,.924.734A18.315,18.315,0,0,0,20.211,1.895.946.946,0,0,0,19.477.971Z" transform="translate(491.001 9769.001)" fill="#01bf9a"/>
                            </g>
                         </svg>

                        <a className="link-text" href="tel:07 378 5100">07 378 5100</a>
                        </div>
                        
                        <div>
                        <svg  width="27" height="20" viewBox="0 0 30 24">
                             <path id="Icon_material-email" data-name="Icon material-email" d="M30,6H6A3,3,0,0,0,3.015,9L3,27a3.009,3.009,0,0,0,3,3H30a3.009,3.009,0,0,0,3-3V9A3.009,3.009,0,0,0,30,6Zm0,6L18,19.5,6,12V9l12,7.5L30,9Z" transform="translate(-3 -6)" fill="#01BF9A"/>
                        </svg>

                        <a className="link-text"  href="mailto: info@taupotaxi.co.nz">info@taupotaxi.co.nz</a>
                        </div>

                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 31.5 31.5">
                            <path id="Icon_awesome-facebook-square" data-name="Icon awesome-facebook-square" d="M28.125,2.25H3.375A3.375,3.375,0,0,0,0,5.625v24.75A3.375,3.375,0,0,0,3.375,33.75h9.65V23.041H8.6V18h4.43V14.158c0-4.37,2.6-6.784,6.586-6.784a26.836,26.836,0,0,1,3.9.34V12h-2.2a2.521,2.521,0,0,0-2.842,2.723V18h4.836l-.773,5.041H18.475V33.75h9.65A3.375,3.375,0,0,0,31.5,30.375V5.625A3.375,3.375,0,0,0,28.125,2.25Z" transform="translate(0 -2.25)" fill="#01BF9A"/>
                        </svg>

                        <a className="link-text"  href="https://www.facebook.com/TAUPOTAXI.CO.NZ/">Facebook</a>
                        </div>

                        <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 19.28 30.849">
                        <path id="Icon_metro-location" data-name="Icon metro-location" d="M17.995,1.928a9.64,9.64,0,0,0-9.64,9.64c0,9.64,9.64,21.208,9.64,21.208s9.64-11.568,9.64-21.208a9.64,9.64,0,0,0-9.64-9.64Zm0,15.545a5.9,5.9,0,1,1,5.9-5.9A5.9,5.9,0,0,1,17.995,17.473Zm-3.736-5.9A3.736,3.736,0,1,1,17.995,15.3,3.736,3.736,0,0,1,14.259,11.568Z" transform="translate(-8.355 -1.928)" fill="#01BF9A"/>
                        </svg>

                        <a className="link-text"  href="https://g.page/Taupo-Taxis?share">11 Tuwharetoa Street, Taupo 3330</a>
                        </div>
                    </div>
                </div>

            <div className="book-taxi"> 
            <h5 className="grid-heading underline font-color-white2">How To Book</h5>
                <div> 
                    <svg  width="30" height="30" viewBox="0 0 20 20">
                        
                        <defs>
                        <clipPath id="clip-path">
                            <rect id="Rectangle_1124" data-name="Rectangle 1124" width="20" height="20" transform="translate(491.212 9769)" fill="#01BF9A" stroke="#707070" stroke-width="1"/>
                        </clipPath>
                        </defs>
                        <g id="Mask_Group_14" data-name="Mask Group 14" transform="translate(-491.212 -9769)" clip-path="url(#clip-path)">
                        <path id="phone-solid" d="M19.477.971,15.372.024a.954.954,0,0,0-1.086.549L12.391,4.994A.945.945,0,0,0,12.664,6.1l2.392,1.958a14.63,14.63,0,0,1-7,7L6.1,12.66A.946.946,0,0,0,5,12.387L.576,14.282a.959.959,0,0,0-.553,1.09l.947,4.105a.947.947,0,0,0,.924.734A18.315,18.315,0,0,0,20.211,1.895.946.946,0,0,0,19.477.971Z" transform="translate(491.001 9769.001)" fill="#01bf9a"/>
                        </g>
                    </svg>

                    <a className="link-text" href="tel:07 378 5100">Phone</a>                   
                </div>

                <div> 
                        <svg version="1.1" id="Layer_1"  x="0px" y="0px"
                            viewBox="0 0 503.604 503.604"  >
                        <g>
                            <g>
                                <path d="M337.324,0H167.192c-28.924,0-53.5,23.584-53.5,52.5v398.664c0,28.916,24.056,52.44,52.98,52.44l170.412-0.184
                                    c28.92,0,52.58-23.528,52.58-52.448l0.248-398.5C389.908,23.452,366.364,0,337.324,0z M227.68,31.476h49.36
                                    c4.336,0,7.868,3.52,7.868,7.868c0,4.348-3.532,7.868-7.868,7.868h-49.36c-4.348,0-7.868-3.52-7.868-7.868
                                    C219.812,34.996,223.332,31.476,227.68,31.476z M198.02,33.98c2.916-2.912,8.224-2.952,11.136,0c1.46,1.456,2.324,3.5,2.324,5.588
                                    c0,2.048-0.864,4.088-2.324,5.548c-1.452,1.46-3.504,2.32-5.548,2.32c-2.084,0-4.088-0.86-5.588-2.32
                                    c-1.452-1.456-2.28-3.5-2.28-5.548C195.736,37.48,196.568,35.436,198.02,33.98z M250.772,488.008
                                    c-12.984,0-23.544-10.568-23.544-23.548c0-12.984,10.56-23.548,23.544-23.548s23.544,10.564,23.544,23.548
                                    C274.316,477.44,263.752,488.008,250.772,488.008z M365.488,424.908H141.232V74.756h224.256V424.908z"/>
                            </g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        <g>
                        </g>
                        </svg>

                    <a className="link-text" href="http://ihail.nz/">App</a>                   
                </div>

                <div> 
                    <svg version="1.1" id="Capa_1"  x="0px" y="0px"
                        viewBox="0 0 13.683 13.683" >
                    <g>
                        <path   d="M12.054,0c-0.178,0-0.355,0-0.533,0c-0.5,0.073-1.227,0.302-1.836,0.592
                            c-0.506,0.241-1.082,0.761-1.482,0.83c-0.291,0.05-0.604-0.099-0.888-0.119c-3.636-0.26-5.938,2.295-6.279,5.894
                            c1.25-1.476,2.987-3.855,4.976-4.591c-2.868,2.126-5.469,5.647-5.627,8.708c0,0.178,0,0.355,0,0.533
                            c0.167,0.979,0.594,1.695,1.599,1.836c0.158,0,0.316,0,0.474,0c1.443-0.195,2.441-0.838,3.436-1.48
                            c3.687,0.529,6.054-1.188,6.931-3.852c-1.303,0-2.607,0-3.91,0c-0.41,2.002-4.099,1.49-3.613-0.77c2.527,0,5.054,0,7.582,0
                            c0.197-3.634-1.594-5.277-4.205-6.101c0.813-0.49,3.246-1.913,4.205-0.711c0.422,0.53,0.162,1.643,0.059,2.251
                            c0.182-0.372,0.238-0.869,0.355-1.303c0-0.178,0-0.355,0-0.533C13.175,0.496,12.738,0.125,12.054,0z M5.596,12.112
                            c-0.743,0.494-3.199,1.691-4.028,0.533c-0.585-0.816,0.115-2.072,0.415-2.783C2.845,10.954,3.97,11.784,5.596,12.112z M9.019,5.532
                            L5.347,5.534C5.205,3.266,9.261,3.101,9.019,5.532z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    </svg>

                    <a className="link-text" href="http://akltaxi.cooptaxi.co.nz/taupotaxis/">Online</a>                   
                </div>

                <div> 
                <svg height="30" viewBox="0 0 16 16" width="30" className="svg-logo"><path d="m14.794 7.1662-1.12213-3.74042c-.255859-.853027-1.02588-1.42578-1.91602-1.42578h-.755859v-1c0-.552307-.447693-1-1-1h-4c-.552307 0-1 .447693-1 1v1h-.755859c-.890137 0-1.66016.572754-1.91602 1.42578l-1.12213 3.74042c-.708557.307922-1.20599 1.01306-1.20599 1.8338v4c0 .552246.447754 1 1 1h.000061l-.000061.999939c0 .552307.447693 1.00006 1 1.00006h1.00006c.552246 0 1-.447754 1-1l-.0004272-1h8.00037l-.000061.999939c0 .552307.447693 1.00006 1 1.00006h1.00006c.552307 0 1-.447754 1-1v-.999939l-.0003662-.000061h.0003662c.552246 0 1-.447754 1-1v-4c0-.82074-.497436-1.52588-1.20599-1.8338zm-10.5499-3.1662h7.51172l.900024 3h-9.31177l.900024-3zm-.244141 7.5c-.552307 0-1-.447754-1-1 0-.552307.447693-1 1-1s1 .447693 1 1c0 .552246-.447693 1-1 1zm8 0c-.552307 0-1-.447754-1-1 0-.552307.447693-1 1-1s1 .447693 1 1c0 .552246-.447693 1-1 1z"/></svg>

                    <a className="link-text" href="http://akltaxi.cooptaxi.co.nz/taupotaxis/">Online</a>                   
                </div>

            </div>
            </div>


            
            <div className="copyright"> 
                <p className="font-color-white2">©2018 by Taupo Taxis. </p>
                <a href="https://webduel.co.nz" target="_blank" className="link-text">Website built by Webduel.</a>
            </div>
            </div>
        ); 
    }
}

export default Footer; 