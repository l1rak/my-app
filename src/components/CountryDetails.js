import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

// Define styling using Material-UI's makestyles
const useStyles = makeStyles({
  flag: {
    width: '200px'
  }
});
function CountryDetails ({ match }) {
  const classes = useStyles();
  const [countryDetails, setCountryDetails] = useState(null);
  const [cities, setCities] = useState([]);
  const [neighboringCountries, setNeighboringCountries] = useState([]);

  // Fetch country and cities data on mount
  useEffect(() => {
    axios({
      method: 'get',
      url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${match.params.code}`,
      headers: {
        'X-RapidAPI-Key': '0519f6cf7fmsh374bb65cf00d8c7p11f827jsn041c70ec6088',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
      }
    })
    .then(response => {
      console.log(response.data.data);
      setCountryDetails(response.data.data);

      // fetch cities for the country 
      axios({
        method: 'get',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${match.params.code}/cities`,
        headers: {
          'X-RapidAPI-Key': '0519f6cf7fmsh374bb65cf00d8c7p11f827jsn041c70ec6088',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      })
      .then(response => {
        console.log(response.data.data);
        setCities(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });

      // fetch neighboring countries to the current country
      axios({
        method: 'get',
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${match.params.code}/neighbors`,
        headers: {
          'X-RapidAPI-Key': '0519f6cf7fmsh374bb65cf00d8c7p11f827jsn041c70ec6088',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      })
      .then(response => {
        console.log(response.data.data);
        setNeighboringCountries(response.data.data.slice(0,10));
      })
      .catch(error => {
        console.log(error);
      });
    })
    .catch(error => {
      console.log(error);
    });
  }, [match.params.code]);

  // Show loading message until the data is loaded
  if (!countryDetails) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <div>
      {/* Add back button to redirect to the previous page */}
      <RouterLink to="/">
        <Typography>Back</Typography>
      </RouterLink>

      <Typography variant="h4" gutterBottom>
        {countryDetails.name}
      </Typography>

      {/* Render country flag */}
      <img src={countryDetails.flagImageUri} alt={countryDetails.name} className={classes.flag} />

      {/* Render country's continent */}
      <Typography variant="body1" gutterBottom>
        Continent: {countryDetails.region ? countryDetails.region : 'N/A'}
      </Typography>

      {/* Render list of cities in the country */}
      <Typography variant="body1" gutterBottom>Cities:</Typography>
      <ul>{cities.map(city => (<li key={city.id}>{city.name}</li>))}</ul>

      {/* Render list of countries on the same continent */}
      <Typography variant="body1" gutterBottom>Related countries by continent:</Typography>
      <ul>
        {neighboringCountries.map(neighbor => (
          <li key={neighbor.code}>
            <Link component={RouterLink} to={`/countries/${neighbor.code}`}>
              {neighbor.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CountryDetails;