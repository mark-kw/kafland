import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import { Element } from 'react-scroll';
import { rooms } from "../data";
import './RoomSection.css'

const RoomSection = () => {
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

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
                <Container>
                    <Row>
                        {rooms.map((room) => (
                            <Col key={room.id} xs={12} md={4}>
                                <motion.div
                                    className="room-card"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: room.id * 0.2 }}
                                >
                                    <h3>{room.title}</h3>
                                    <img src={room.image} alt={room.title} />
                                    <p>{room.description}</p>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Element>
        </section>
    );
};

export default RoomSection;
