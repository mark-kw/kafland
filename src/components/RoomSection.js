import React from 'react';
import { motion } from 'framer-motion';
import './RoomSection.css'
import { Element } from 'react-scroll';

const RoomSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    const rooms = [
        {
            id: 1,
            title: 'Chambre ventilée',
            image: '../view/ventile1.jpeg',
            description: 'Une chambre confortable avec toutes les commodités.',
        },
        {
            id: 2,
            title: 'Chambre ventilée confort',
            image: '../view/ventile2.jpeg',
            description: 'Une suite spacieuse avec vue sur la mer.',
        },
        {
            id: 3,
            title: 'Chambre climatisée',
            image: '../view/accueil3.jpeg',
            description: 'Une chambre parfaite pour toute la famille.',
        },
    ];

    return (
        <section id="rooms">
            <Element name="rooms" className="element">
                <motion.h2
                    className="section-title"
                    initial="hidden"
                    animate="visible"
                    variants={fadeIn}
                >
                    Chambres
                </motion.h2>
                <div className="room-cards">
                    {rooms.map((room) => (
                        <motion.div
                            key={room.id}
                            className="room-card"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: room.id * 0.2 }}
                        >
                            <h3>{room.title}</h3>
                            {console.log(room.image)}
                            <img src={room.image} alt={room.title} />
                            <p>{room.description}</p>
                            {/* Ajoute un bouton ou un lien pour plus d'informations */}
                        </motion.div>
                    ))}
                </div>
                {/* <img src={require('../view/ventile1.jpeg')} alt='test' /> */}
            </Element>
        </section>
    );
};

export default RoomSection;
