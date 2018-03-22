
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { LOGIN } from '../../constants/routes';

/**
 * If we have a logged-in user, display the component, otherwise redirect to login page.
 */
const PrivateRoute = ({ component: Component, user, ...rest }) => (
  <Route
    {...rest}
    render = {props => // props = { match:{...}, history:{...}, location:{...} }
      user
        ? <Component {...props} />
        : <Redirect to={LOGIN} /> 
    }
  />
);

export default PrivateRoute;
