import React, { useState } from 'react';
import './Modal.css';
import ihail from '../../iHail/ihail_logo.png';
import appStore from '../../iHail/app-store-button.png';
import googleStore from '../../iHail/google-play-button.png';
import cancelButton from './cancel.png';
const Modal = () => {
    const [modal, setModal] = useState(true);

    const hideModal = (e) => {
        setModal(false);
    }
    let modalContainer;
    if (modal === true) {

        modalContainer = <div className="modalContainer">
            <div className="container-background">
                <img class="close-button" src={cancelButton} alt="cancel-Button" onClick={hideModal}></img>

                <div class="title">
                    Download the New Blue Bubble Taxi App
                                </div>
                <div className="ihail-logo">
                    <img src={ihail} alt="ihail logo" />
                </div>
                <div className="app-store-logo-container">
                    <a href="https://apps.apple.com/au/app/ihail/id1022258209" target="_blank"><img src={appStore} alt="download iphone app" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.ihail.ihail" target="_blank"><img src={googleStore} alt="download android app" /></a>

                </div>
                <div className="discount-text">
                    15% discount on ihail bookings
                                </div>
            </div>
        </div>

    }
    else {
        modalContainer = null;
    }
    return (
        <div> { modalContainer}</div>

    );
}

export default Modal;