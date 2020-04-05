import React from 'react'; 
import './Navbar.css'; 
import '../../fonts.css'; 
import logo from './taupo-taxi.png';
import $ from 'jquery'; 

class Navbar extends React.Component{ 
	constructor(props){ 
		super(props); 
		this.mobileNavbar=this.mobileNavbar.bind(this); 
		this.mobileNavbarShow=this.mobileNavbarShow.bind(this); 
	}

	mobileNavbar(){ 
		var mobileNavbarItems= document.getElementById('mobile-navbar-items'); 
		if(mobileNavbarItems.style.display==='block'){ 
			mobileNavbarItems.style.display= "none"; 
			document.getElementById('close-svg').style.display= "none"; 
			document.getElementById('hamburger-menu').style.display= "block"; 

		}
		else{ 
			mobileNavbarItems.style.display= "block"; 
		}
		
	}

	mobileNavbarShow(){ 
		var mobileNavbarItems= document.getElementById('mobile-navbar-items'); 
		if(mobileNavbarItems.style.display==='none'){ 
			mobileNavbarItems.style.display= "block"; 
			document.getElementById('hamburger-menu').style.display= "none"; 
			document.getElementById('close-svg').style.display= "block"; 
		}
		else{ 
			mobileNavbarItems.style.display= "none"; 
		}
		
	}
	
	render (){ 
		return (
		<div> 
			<div className="navbar menu-fonts"> 
			<img src={logo} alt="taupo taxi"/> 
				<ul>
					<li><a href="home">Home</a></li>
					<li><a href="services">Services</a></li>
					<li><a href="fleet">Fleet</a></li>
					<li><a href="about-us">About</a></li>
					<li><a href="app">App</a></li>
					<li><a href="faq">FAQ's</a></li>
					<li><a href="contact">Contact</a></li>
				</ul> 
			</div> 

			<div className="mobile-navbar menu-fonts" > 
				<div id="hamburger-menu" onClick={this.mobileNavbarShow}>
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 23.136 15.424">
 						 <path id="Icon_metro-menu" data-name="Icon metro-menu" d="M6.427,25.707H29.563V23.136H6.427v2.571Zm0-6.427H29.563V16.71H6.427V19.28Zm0-9v2.571H29.563V10.283H6.427Z" transform="translate(-6.427 -10.283)" fill="#fd6a59"/>
					</svg>
				</div> 

				<div onClick={this.mobileNavbar} id="close-svg">
					<svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 20.953 20.953" id="hide-navbar"  >
 						 <path id="Icon_ionic-md-close" data-name="Icon ionic-md-close" d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z" transform="translate(-7.523 -7.523)" fill="#fd6a59"/>
					</svg>
				</div>

				<img src={logo} alt="taupo taxi"/> 

				<a  href="tel:073785100"> 
					<svg  className="phone-icon" width="35" height="35" viewBox="0 0 20 20" >
	
						<defs>
							<clipPath id="clip-path">
							<rect id="Rectangle_1124" data-name="Rectangle 1124" width="20" height="20" transform="translate(491.212 9769)" fill="#fd6a59" stroke="#fd6a59" stroke-width="1"/>
							</clipPath>
						</defs>
						<g id="Mask_Group_14" data-name="Mask Group 14" transform="translate(-491.212 -9769)" clip-path="url(#clip-path)">
							<path id="phone-solid" d="M19.477.971,15.372.024a.954.954,0,0,0-1.086.549L12.391,4.994A.945.945,0,0,0,12.664,6.1l2.392,1.958a14.63,14.63,0,0,1-7,7L6.1,12.66A.946.946,0,0,0,5,12.387L.576,14.282a.959.959,0,0,0-.553,1.09l.947,4.105a.947.947,0,0,0,.924.734A18.315,18.315,0,0,0,20.211,1.895.946.946,0,0,0,19.477.971Z" transform="translate(491.001 9769.001)" fill="#fd6a59"/>
						</g>
					</svg>
				</a> 

				<div id="mobile-navbar-items"> 	
					<ul>	
					<li><a href="home">Home</a></li>
					<li><a href="services">Services</a></li>
					<li><a href="fleet">Fleet</a></li>
					<li><a href="about-us">About</a></li>
					<li><a href="app">App</a></li>
					<li><a href="faq">FAQ's</a></li>
					<li><a href="contact">Contact</a></li>
					</ul> 
				</div> 
			</div>
			
		</div>
		); 
	}
}

export default Navbar; 