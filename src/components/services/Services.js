import React from 'react';
import './Services.css'

import services from '../../utils/dataServices';

const Services = () => {
    return (
        <section className="services-section">
            <h2>Nos Services</h2>

            <div className="services-grid">
                {services.map((service, index) => (
                    <div className="service-card" key={index}>
                        <img src={service.icon} alt={service.name} className="service-icon" />
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Services;
