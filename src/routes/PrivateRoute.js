/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

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

const mapStateToProps = state => ({
  signedIn: state.authInfo.signedIn,
});

export default connect(mapStateToProps, null)(PrivateRoute);
