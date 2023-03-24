import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Link,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    flag: {
      width: '50px'
    },
    link: {
      textDecoration: 'none',
      color: 'inherit'
    }
  });


  function Countries() {
    const classes = useStyles();
    const [countries, setCountries] = useState([]);
  
    useEffect(() => {
      axios({
        method: 'get',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries',
        headers: {
          'X-RapidAPI-Key': '0519f6cf7fmsh374bb65cf00d8c7p11f827jsn041c70ec6088',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      })
      .then(response => {
        console.log(response.data.data); // Add this line
        setCountries(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
    }, []);
  
    return (
      <div>
        <Typography variant="h4" gutterBottom>
          Country List
        </Typography>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="country table">
            <TableHead>
              <TableRow>
                <TableCell>Flag</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {countries.map(country => (
                <TableRow key={country.code}>
                  <TableCell>
                    <img src={country.flag} alt={country.name} className={classes.flag} />
                  </TableCell>
                  <TableCell>
                    <Link href={`/countries/${country.code}`} className={classes.link}>
                      {country.name}
                    </Link>
                  </TableCell>
                  <TableCell>{country.code}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
  
  export default Countries;