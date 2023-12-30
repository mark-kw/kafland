import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { rooms } from "../data";

const Reservation = () => {
    const [reservationData, setReservationData] = useState({
        arrivalDate: '',
        departureDate: '',
        guestCount: '',
        roomType: '',
        comment: '',
    });

    const handleChange = (e) => {
        setReservationData({ ...reservationData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Formulaire soumis :', reservationData);
    };

    return (
        <Container>
            <h2>Réservation</h2>
            <Form onSubmit={handleSubmit}>
                {/* Première ligne */}
                <Row>
                    <Col>
                        <Form.Label>Date d'arrivée</Form.Label>
                        <Form.Control
                            type="date"
                            name="arrivalDate"
                            value={reservationData.arrivalDate}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Label>Date de départ</Form.Label>
                        <Form.Control
                            type="date"
                            name="departureDate"
                            value={reservationData.departureDate}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                    <Col>
                        <Form.Label>Nombre de guests</Form.Label>
                        <Form.Control
                            type="number"
                            name="guestCount"
                            value={reservationData.guestCount}
                            onChange={handleChange}
                            required
                        />
                    </Col>
                </Row>

                {/* Deuxième ligne */}
                <Row>
                    <Col>
                        <Form.Label>Type de chambre</Form.Label>
                        <Form.Select
                            name="roomType"
                            value={reservationData.roomType}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Sélectionnez le type de chambre</option>
                            {rooms.map((room) => (
                                <option value={room.id}>{room.title} </option>
                            ))}

                        </Form.Select>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Label>Commentaire</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="comment"
                            value={reservationData.comment}
                            onChange={handleChange}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Envoyer
                        </Button>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default Reservation;
