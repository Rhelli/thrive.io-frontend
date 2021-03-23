/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
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

PrivateRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PrivateRoute;
