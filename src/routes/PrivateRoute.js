/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Route, Redirect } from 'react-router-dom';
import LoadingErrorMessageComponent from '../common/LoadingErrorMessageComponent/LoadingErrorMessageComponent';

const PrivateRoute = ({ component: Component, authInfo, ...rest }) => {
  const { signedIn, loading } = authInfo;

  return loading ? (
    <Loader
      type="ThreeDots"
      color="white"
      height={80}
      width={80}
    />
  ) : authInfo.error ? (
    <LoadingErrorMessageComponent message={authInfo.error.message} />
  ) : (
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
};

export default PrivateRoute;
