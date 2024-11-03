import React from 'react';
import './Services.css'

import services from '../../utils/dataServices';
import RevealSide from '../../utils/animations/RevealSide';

const Services = () => {
    return (
        <section className="services-section">
            {services.map((service, index) => (
                <div className="service-card" key={index}>
                    <RevealSide width='100%'>
                        <img src={service.icon} alt={service.name} className="service-icon" />
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </RevealSide>
                </div>
            ))}
        </section>
    );
}

export default Services;
