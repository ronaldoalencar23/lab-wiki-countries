import { Link } from 'react-router-dom';

export function CountriesList(props) {
  return (
    <div className="col-5" style={{ maxHeight: '90vh', overflow: 'scroll' }}>
      <div className="list-group">
        {props.countries.map((currentElement) => {
          return (
            <Link
              className="list-group-item list-group-item-action"
              to={`/${currentElement.alpha3Code}`}
            >
              <img
                src={`https://flagpedia.net/data/flags/icon/72x54/${currentElement.alpha2Code.toLowerCase()}.png`}
                alt={currentElement.name.common}
              />
              {currentElement.name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
