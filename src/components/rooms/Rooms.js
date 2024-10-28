import React from 'react';
import './Room.css';

import rooms from '../../utils/dataRooms'

const Rooms = () => {
	return (
		<section className="room-section">
			<div className="room-header">
				<h2>Nos chambres</h2>
			</div>
			<div className="room-grid">
				{rooms.map((room, index) => (
					<div className="room-card" key={index}>
						<img src={room.image} alt={room.nom} />
						<div className='room-info'>
							<h3>{room.nom}</h3>
							<p className="price">{room.prix} RP/nuit</p>
						</div>
						<p>Jusqu'à {room.personne} personnes</p>
					</div>
				))}
			</div>

		</section>
	);
};

export default Rooms;
