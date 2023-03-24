import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import {
  Typography,
  makeStyles
} from '@material-ui/core';

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
      <Typography variant="h4" gutterBottom>
        {countryDetails.name}
      </Typography>
      <img src={countryDetails.flag} alt={countryDetails.name} className={classes.flag} />
      <Typography variant="body1" gutterBottom>
        Code: {countryDetails.code}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Capital: {countryDetails.capital ? countryDetails.capital : 'N/A'}
      </Typography>
      <Typography variant="body1" gutterBottom>
        Currency: {countryDetails.currencyCode ? countryDetails.currencyCode : 'N/A'}
      </Typography>
    </div>
  );
}

export default withRouter(CountryDetails);
