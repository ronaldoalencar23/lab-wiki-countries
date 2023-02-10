import { Link, useParams } from 'react-router-dom';
export function CountriesDetails(props) {
  const { alpha3Code } = useParams();
  const countryClicked = props.countries.filter((currentElement) => {
    return currentElement.alpha3Code === alpha3Code;
  })[0];
  console.log(countryClicked);
  return (
    <div className="col-7">
      <h1>{countryClicked.name.common}</h1>
      <table className="table">
        <thead></thead>
        <tbody>
          <tr>
            <td style={{ width: '30%' }}>Capital</td>
            <td>{countryClicked.capital}</td>
          </tr>
          <tr>
            <td>Area</td>
            <td>
              {countryClicked.area} km
              <sup>2</sup>
            </td>
          </tr>
          <tr>
            <td>Borders</td>
            <td>
              <ul>
                {countryClicked.borders.map((currentElement) => {
                  return (
                    <Link to={`/${currentElement}`}>
                      <li>{currentElement}</li>
                    </Link>
                  );
                })}
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
