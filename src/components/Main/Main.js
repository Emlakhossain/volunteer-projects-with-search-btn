import React from 'react';
import './Main.css';

const Main = (props) => {
    const { img, title } = props.volunteer;
    return (
        <div className='main-container'>
            <img src={img} alt="" />
            <h4>{title}</h4>
        </div>
    );
};

export default Main;