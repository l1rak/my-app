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
      {/* The Router component allows client-side routing to be handled on the app */}
      <div>
        <Switch>
          {/* The Switch component renders only the first matching route */}
          <Route exact path="/" component={Countries} />
          {/* When the URL matches "/countries/:code", show the CountryDetails component */}
          <Route path="/countries/:code" component={CountryDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
