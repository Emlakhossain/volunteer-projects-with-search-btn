import React from 'react';
import './Activityes.css';

const Activityes = (props) => {
    const { img, title } = props.volunteer;
    return (
        <div className='activityes-container'>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </div>
    );
};

export default Activityes;