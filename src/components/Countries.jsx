import { useEffect } from "react";
import { useState } from "react";
import Country from "./country";

export default function Countries(){

    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.error(error))
    }, []);

    const handleVisitedCountry = country => {
        console.log(country);
        console.log('abc')
    }


    return (
        <div className="">
            <h2>Countries: {countries.length}</h2>
            <div className="country-container">
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};
