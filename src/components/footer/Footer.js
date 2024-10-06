import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-location">
                    <h3>Localisation</h3>
                    <p>Rue du Barrage Damy Dzobégan<br />
                        Togo, Mitiméssin, Togo</p>
                    <p>Contact : 06 00 00 00 00</p>
                    <p>Email : jesuisunnemail@gmail.com</p>
                </div>

                <div className="footer-links">
                    <h3>Liens utiles</h3>
                    <ul>
                        <li><a href="#">Politique de confidentialité</a></li>
                        <li><a href="#">Politique de cookies</a></li>
                        <li><a href="#">Mentions légales</a></li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2024 Hotel Belair. Tous droits réservés.</p>
            </div>
        </footer>
    );
}

export default Footer;
