import React from 'react';
import './Header.css';
// import video from '../../assets/video_accueil5.mp4';
import image from '../../assets/accueil.jpeg';
import logo from '../../assets/logo.png'

const Header = () => {
    return (
        <header>

            <div className="top-bar">
                <div className="logo">
                    <img src={logo} alt="Hotel Logo" className="logo-img" />
                </div>
                <div className="phone-number">
                    <p>06 00 00 00 00</p>
                </div>
            </div>

            {/* <div className="video-container">
                <video autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                    Votre navigateur ne supporte pas la vidéo HTML5.
                </video>
            </div> */}

            <div className="image-container">
                <img src={image} alt="Vue de l'hôtel Belair au cœur des montagnes du Togo" className="header-image" />
                <div className="overlay"></div> {/* Filtre noir */}
            </div>

            <div className="header-text">
                <h1>Hotel Belair</h1>
                <p>Évadez-vous au cœur des montagnes du Togo, un havre de paix où la nature rencontre le confort pour un séjour inoubliable.</p>
            </div>
        </header>
    );
}

export default Header;
