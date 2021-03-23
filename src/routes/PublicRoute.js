/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
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
          <Redirect to="/myaccount" />
        ) : (
          <Component {...props} />
        )
      )}
    />
  ) : (
    <h2>Please wait.</h2>
  );
};

PublicRoute.propTypes = {
  component: PropTypes.func.isRequired,
  restricted: PropTypes.bool.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    loading: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PublicRoute;
