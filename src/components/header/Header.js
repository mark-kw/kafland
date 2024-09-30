import React from 'react';
import './Header.css';
import video from '../../assets/video_accueil_2.mp4';

const Header = () => {
    return (
        <header>
            
            <div className="top-bar">
                <div className="logo">
                    <img src="path/to/your/logo.png" alt="Hotel Logo" />
                </div>
                <div className="phone-number">
                    <p>06 00 00 00 00</p>
                </div>
            </div>

            <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo HTML5.
                </video>
            </div>

            <div className="header-text">
                <h1>Hotel Belair</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </header>
    );
}

export default Header;
