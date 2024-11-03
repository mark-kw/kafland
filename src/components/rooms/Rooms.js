import React from 'react';
import './Room.css';

import rooms from '../../utils/dataRooms'
import RevealSide from '../../utils/animations/RevealSide';

const Rooms = () => {
	return (
		<section className="room-section ">
			{rooms.map((room, index) => (
				<div className="room-card" key={index}>
					<RevealSide width='100%'>
						<img src={room.image} alt={room.nom} />
						<div className='room-info'>
							<h3>{room.nom}</h3>
							<p className="price">{room.prix} €/nuit</p>
						</div>
						<p>Jusqu'à {room.personne} personnes</p>
					</RevealSide>
				</div>
			))}
		</section>
	);
};

export default Rooms;
