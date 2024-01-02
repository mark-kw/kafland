import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4 mt-5">
            <Container>
                <Row>
                    <Col>
                        <h4>Adresse</h4>
                        <p>Danyi Dzobegan, sur la gauche juste avant le Monastère</p>
                        <p>Plateau de Danyi</p>
                    </Col>
                    <Col >
                        <h4>Contact</h4>
                        <p>Email : belairdanyi@gmail.com</p>
                        <p>Tél. + Whatsapp : +228 91 06 13 27</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
