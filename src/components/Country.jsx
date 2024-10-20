
const Country = ({ country }) => {

    const { name,flags } = country;

    return (
        <div className="card">
            <h3>Name:{name?.common}</h3>
            <img src={flags.png} alt="" />
        </div>
    );
};

export default Country;