/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component, restricted, signedIn, ...rest
}) => (
  <Route
    {...rest}
    render={props => (
      signedIn && restricted ? (
        <Redirect to="/myaccount" />
      ) : (
        <Component {...props} />
      )
    )}
  />
);

export default PublicRoute;
