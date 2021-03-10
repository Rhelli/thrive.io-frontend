/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, signedIn, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect to="/signin" />
      )
    )}
  />
);

export default PrivateRoute;
