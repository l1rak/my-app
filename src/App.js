import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Countries} />
        <Route path="/countries/:code" component={CountryDetails} />
      </Switch>
    </Router>
  );
}

export default App;
