import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import characterDetails from './components/views/characterDetails';
import index from './components/views/index';


function Routes() {
  return (
    <div>      
      <Router>
        <div>
        <Switch>
          <Route exact path='/' component={index} />
          <Route exact path='/character/:id' component={characterDetails} />
        </Switch>
        </div>
      </Router>
    </div>
  );
}

export default Routes;
