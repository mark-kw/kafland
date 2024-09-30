import React from 'react';
import './Room.css';
import room1 from '../../assets/chambre_clim.jpg';
import room2 from '../../assets/chambre_confort.jpg';
import room3 from '../../assets/chambre_standar.jpg';

const Rooms = () => {
  return (
    <section className="room-section">
      <h2>Nos Chambres</h2>
      <div className="room-grid">
        <div className="room-card">
          <img src={room1} alt="Chambre 1" />
          <h3>Chambre Deluxe</h3>
          <p>Une chambre spacieuse avec vue sur la mer et des commodités modernes.</p>
          <p className="price">Prix: 150€ / Nuit</p>
        </div>

        <div className="room-card">
          <img src={room2} alt="Chambre 2" />
          <h3>Chambre Standard</h3>
          <p>Une chambre confortable, parfaite pour des séjours courts et relaxants.</p>
          <p className="price">Prix: 100€ / Nuit</p>
        </div>

        <div className="room-card">
          <img src={room3} alt="Chambre 3" />
          <h3>Suite Présidentielle</h3>
          <p>Un luxe ultime avec une vue imprenable et des installations de classe mondiale.</p>
          <p className="price">Prix: 300€ / Nuit</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
