// @flow
import React, { Component } from 'react';
import { Route, Switch, Redirect, BrowserRouter } from 'react-router-dom';
import * as Routes from '../constants/routes';

import Home from './Home';
import Create from './Create';

class App extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path={Routes.HOME} component={Home} />
            <Route path={Routes.CREATE} component={Create} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
