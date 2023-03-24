import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <Router> 
      <div>
        <Switch>
          <Route exact path="/" component={Countries} />
          <Route path="/countries/:code" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
