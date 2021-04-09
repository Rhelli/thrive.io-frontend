/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({
  component: Component, restricted, authInfo, ...rest
}) => {
  const { signedIn, loading } = authInfo;

  return !loading ? (
    <Route
      {...rest}
      render={props => (
        signedIn && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      )}
    />
  ) : (
    <h2>Please wait.</h2>
  );
};

export default PublicRoute;
