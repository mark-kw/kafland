import React from 'react';
// import { Fade } from 'react-reveal';
import image from '../view/accueil.jpeg'
import { motion } from 'framer-motion';
import './Header.css'


const Hearder = () => {
    const fadeIn = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    return (
        <header>
            <motion.img
                src={image}
                alt="Header"
                className="header-image"
                initial="hidden"
                animate="visible"
                variants={fadeIn}
            />
            <div className="overlay"></div>
            <motion.div
                className="hotel-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <h1>HOTEL KAFLAND</h1>
            </motion.div>
        </header>
    );
}

export default Hearder;
