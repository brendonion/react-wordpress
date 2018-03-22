// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { logout } from '../actions/authActions';
import * as Routes from '../constants/routes';
import Auth from '../handlers/auth';

import PublicRoute from './routes/PublicRoute';
import PrivateRoute from './routes/PrivateRoute';

import Home from './Home';
import Create from './Create';
import Signup from './Signup';
// import Login from './Login';

type Props = {
  user: Object,
  logout: Function,
}

class App extends React.Component<Props> {

  componentDidMount() {
    Auth.registerAxiosInterceptor(this.props.logout);
  }

  render() {
    const { user } = this.props;

    return (
      <div>
        <BrowserRouter>
          <Switch>
            <PrivateRoute exact path={Routes.HOME} component={Home} user={user} />
            <PrivateRoute path={Routes.CREATE} component={Create} user={user} />
            <PublicRoute path={Routes.SIGNUP} component={Signup} user={user} />
            {/* <Route path={Routes.LOGIN} component={Login} /> */}
            {/* <Route path='*' exact component={PageNotFound} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { user } = state.authReducer;
  
  return {
    user
  }
}

const mapDispatchToProps = {
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
