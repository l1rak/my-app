import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles({
  flag: {
    width: '200px'
  }
});

function CountryDetails({ match }) {
  const classes = useStyles();
  const [countryDetails, setCountryDetails] = useState(null);

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
    })
    .catch(error => {
      console.log(error);
    });
  }, [match.params.code]);

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
      <img src={countryDetails.flag} alt={countryDetails.name} className={classes.flag} />
      <Typography variant="body1" gutterBottom>
        Continent: {countryDetails.continent ? countryDetails.continent : 'N/A'}
      </Typography>
      <Typography variant="body1" gutterBottom>Cities:</Typography>
      <ul>
        {/* consume API to display a list of cities in the country */}
      </ul>
      <Typography variant="body1" gutterBottom>Related countries by continent:</Typography>
      <ul>
        {/* create links to other countries on the same continent */} 
      </ul>
    </div>
  );
}

export default CountryDetails;
