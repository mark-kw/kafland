import React from 'react';
import './HotelInfo.css';
import presentation from '../../assets/presentation.jpg'
import RevealSide from '../../utils/animations/RevealSide';

const HotelInfo = () => {
    return (
        <section className="hotel-info">

            <div className="hotel-info-image">
                <img src={presentation} alt="Hotel" />
            </div>
            <div className="hotel-info-text">
                <RevealSide width='100%'>
                    <h2>KAFLAND</h2>
                    <p>Découvrez l’hôtel Kafland, niché au cœur des montagnes du Togo, où sérénité et élégance se rencontrent pour offrir un cadre exceptionnel.</p>
                    <p>

                        Profitez de chambres spacieuses et confortables avec des vues imprenables sur la nature environnante, idéales pour un séjour de détente ou une retraite romantique. Laissez-vous inspirer par l’air pur de la montagne et créez des souvenirs inoubliables dans ce havre de paix.
                    </p>
                </RevealSide>
                <RevealSide width='100%'>
                    <p>
                        Que vous soyez en quête d’aventure ou de repos, notre équipe dévouée est prête à vous faire vivre des expériences uniques, entre découvertes culturelles et randonnées au sein d'une nature préservée.
                    </p>
                    <div className='hotel-info-num'>
                        <p>Pour reserver appelez le </p>
                        <h3>+228 91 06 13 27</h3>
                    </div>
                </RevealSide>
            </div>

        </section>

    );
}

export default HotelInfo;
