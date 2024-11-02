import React from 'react';
import logo from '../../assets/logo.png'
import './Navbar.css'


const Navbar = () => {
    return (
        <nav className="container">
            <img src={logo} alt="Hotel Logo" className="logo-img" />
            <div className="phone-number">
                <p>+228 91 06 13 27</p>
            </div>
        </nav>

    );
}

export default Navbar;
