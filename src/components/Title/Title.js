import React from 'react';
import "./Title.css"
import RevealSide from '../../utils/animations/RevealSide';

const Title = ({ subTitle, title }) => {
    return (
        <div className='title'>
            <RevealSide width='100%'>
                <p>{subTitle}</p>
                <h1>{title}</h1>
            </RevealSide>
        </div>
    );
}

export default Title;
