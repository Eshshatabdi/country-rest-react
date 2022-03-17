import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = () => {
    const [countries, setcountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setcountries(data))



    }, [])
    return (
        <div>
            <h2>Hello from countries: {countries.length}</h2>
            <div className='country-container'>
                {
                    countries.map(country => <Country country={country}
                        key={country.cca3}
                    ></Country>)
                }
            </div>

        </div>
    );
};

export default Countries;