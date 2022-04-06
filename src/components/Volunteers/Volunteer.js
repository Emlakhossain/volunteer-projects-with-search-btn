import React from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Activityes from '../Activityes/Activityes';
import './Volunteer.css';

const Volunteer = () => {
    const [volunteers, setVolunteers] = useVolunteer();
    return (
        <div>
            <p>{volunteers.length}</p>
            <div className='volunteer-container'>
                {

                    volunteers.map(volunteer => <Activityes
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Activityes>)
                }
            </div>
        </div>
    );
};

export default Volunteer;