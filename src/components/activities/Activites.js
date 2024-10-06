import React from 'react';
import activites from '../../utils/dataActivites';
import './Activites.css'

const ActivityCard = ({ title, imageUrl }) => {
    return (
        <div className="activity-card">
            <img src={imageUrl} alt={title} className="activity-image" />
            <h3>{title}</h3>
        </div>
    );
};

const Activites = () => {

    return (
        <section className="activities-section">
            <h2>Les activités</h2>
            <div className="activities-grid">
                {activites.map((activity, index) => (
                    <ActivityCard key={index} title={activity.titre} imageUrl={activity.image} />
                ))}
            </div>
        </section>
    );
};

export default Activites;
