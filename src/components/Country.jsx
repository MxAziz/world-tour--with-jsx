import { useState } from "react";

const Country = ({ country,handleVisitedCountry }) => {

    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className={`card ${visited && "visited"}`}>
            <h2>Name: {name?.common}</h2>
            <img className="img" src={flags.png} alt="flags" />
            <p >Population: {population}</p>
            <p >Area: {area}</p>
            <p>Code: {cca3}</p>
            <button>Mark visited</button>
            <br />
            <button onClick={handleVisited}>{visited? "Visited": "Going" }</button>
            {visited? "I have visited this country": "I want to visit this country"};
        </div>
    );
};

export default Country;