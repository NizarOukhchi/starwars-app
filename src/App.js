import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

import VehiclesView from './views/VehiclesView';
import StarshipsView from './views/StarshipsView';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/vehicles">
          <VehiclesView />
        </Route>
        <Route path="/starships">
          <StarshipsView />
        </Route>
        <Redirect from="/" to="/vehicles" />
      </Switch>
    </Router>
  );
}

export default App;
