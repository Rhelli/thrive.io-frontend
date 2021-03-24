/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, authInfo, ...rest }) => {
  const { signedIn, loading } = authInfo;

  return !loading ? (
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
  ) : (
    <h2>Pllllllleeeeeeeeeaaaaasssseeee Wwwwwaaaaaaaaiiiiiiiiitttttt</h2>
  );
};

export default PrivateRoute;
