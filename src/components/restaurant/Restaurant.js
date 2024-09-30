import React from 'react';
import './Restaurant.css';
import restaurant from '../../assets/restaurant.jpg'


const Restaurant = () => {
    return (
        <section className="restaurant-info">
            <div className="restaurant-info-content">

                <div className="restaurant-info-text">
                    <h2>Notre Hôtel</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a leo nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Suspendisse sagittis mi laoreet sem eleifend rhoncus. Aliquam vel urna sagittis, eleifend nisl ac, mollis orci. Mauris sed lectus magna. In varius vestibulum dapibus. Integer at tellus ac magna aliquam placerat eu nec justo. Phasellus sed aliquam libero. Nam quis massa elit. Nulla et nisi fringilla, eleifend risus et, sodales neque. Vivamus facilisis libero et lectus aliquam laoreet. Phasellus quis neque id nunc iaculis consectetur. Suspendisse mollis imperdiet consequat</p>

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
