import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className='footer-map'>
                    <iframe
                        title="Location Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1979.0384250700952!2d0.6767417836863527!3d7.232075206231206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x102651dba384e08f%3A0xf15375684446e44c!2sBelair!5e0!3m2!1sfr!2ses!4v1730497649380!5m2!1sfr!2ses"
                        width="100%"
                        height="250"
                        style={{ border: 0 }}
                        allowfullscreen=""
                        loading="lazy"
                    >
                    </iframe>
                </div>

                <div className="footer-location">
                    <div className='loc'>
                        <h3>Localisation</h3>
                        <p>Rue du Barrage Damy Dzobégan<br />
                            Togo, Mitiméssin, Togo</p>

                    </div>
                    <div className='contact'>
                        <p>Contact : +228 91 06 13 27</p>
                        <p>Email : faustin.kissi@gmail.com</p>
                    </div>

                </div>
            </div>
            <div className="footer-links">
                <img src={logo} alt="" className='logo' />
                <ul>
                    <li><a href='wwww.google.com' >Politique de confidentialité</a></li>
                    <li><a href='wwww.google.com' >Politique de cookies</a></li>
                    <li><a href='wwww.google.com'>Mentions légales</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
