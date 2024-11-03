import React, { useEffect } from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'
import RevealSide from '../../utils/animations/RevealSide';


const Navbar = () => {
    return (
        <nav className="container">
            <img src={logo} alt="Hotel Logo" className="logo-img" />
            <div className="phone-number">
                <RevealSide>
                    <p>+228 91 06 13 27</p>
                </RevealSide>
            </div>
        </nav>

    );
}

export default Navbar;
