import React from 'react';
import './Hero.css';
import RevealSide from '../../utils/animations/RevealSide';

const Header = () => {
    return (
        <div className='header container'>
            <RevealSide>
                <div className="header-text">
                    <h1>Hotel Kafland</h1>
                    <p>Évadez-vous au cœur des montagnes du Togo, un havre de paix où la nature rencontre le confort pour un séjour inoubliable.</p>
                </div>
            </RevealSide>
        </div>
    );
}

export default Header;
