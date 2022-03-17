import React from 'react';
import './Country.css'

const Country = (props) => {
    const { area, population, region, name, flags } = props.country
    return (
        <div className='country'>
            <h2>Country Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <h5>Population: {population} </h5>
            <p>Area:{area}</p>
            <p>Region:{region}</p>

        </div>
    );
};

export default Country;