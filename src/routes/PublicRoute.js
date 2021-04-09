/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import LoadingErrorMessageComponent from '../common/LoadingErrorMessageComponent/LoadingErrorMessageComponent';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const PublicRoute = ({
  component: Component, restricted, authInfo, ...rest
}) => {
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
        signedIn && restricted ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      )}
    />
  );
};

export default PublicRoute;
