import React from 'react';
import './Restaurant.css';
import restaurant from '../../assets/restaurant.jpg'


const Restaurant = () => {
    return (
        <section className="restaurant-info">
            <div className="restaurant-info-content">
                <div className="restaurant-info-text">
                    <h2>Notre restaurant</h2>
                    <p>Au restaurant de l’Hôtel Belair, vivez une expérience culinaire unique, où chaque plat est une invitation au voyage. Niché au cœur des montagnes du Togo, notre restaurant allie saveurs locales et inspirations internationales pour ravir tous les palais. Nos chefs passionnés sélectionnent des ingrédients frais et de saison, privilégiant les produits locaux pour offrir des plats authentiques et raffinés. Que ce soit pour un dîner romantique ou un repas convivial, laissez-vous emporter par l’ambiance chaleureuse et les panoramas enchanteurs. Découvrez des saveurs exquises dans un cadre exceptionnel, où chaque repas devient un moment inoubliable.</p>

                    <div className='restaurant-info-num'>
                        <p>Pour reserver appelez le </p>
                        <p>06 00 00 00 00</p>
                    </div>
                </div>
                <div className="restaurant-info-image">
                    <img src={restaurant} alt="restaurant" />
                </div>

            </div>
        </section>
    );
}

export default Restaurant;
