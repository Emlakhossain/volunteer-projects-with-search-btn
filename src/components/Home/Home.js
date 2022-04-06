import React, { useEffect, useState } from 'react';
import useVolunteer from '../../hooks/useVolunteer';
import Main from '../Main/Main';
import './Home.css';

const Home = () => {
    const [volunteers, setVolunteers] = useVolunteer();
    const [searchText, setSearchText] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                const match = data.filter(d => d.title.includes(searchText));
                setSearchResult(match)
            })
    }, [searchText])

    const handleSearchText = event => {
        setSearchText(event.target.value);

    }
    return (
        <div>
            <input onChange={handleSearchText} type="text" name="" id="" placeholder='Search' />
            <h2>Total SearchResult:{searchResult.length}</h2>
            <div className='home-container'>
                {
                    searchResult.map(volunteer => <Main
                        key={volunteer._id}
                        volunteer={volunteer}
                    ></Main>)
                }
            </div>
        </div>
    );
};

export default Home;