import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes';
import NavbarComponent from './common/NavbarComponent';
import { autoLoginRequest } from './api/authApi';

const App = ({ autoLoginRequest }) => {
  useLayoutEffect(() => {
    autoLoginRequest();
  }, []);

  return (
    <>
      <NavbarComponent />
      <Routes />
    </>
  );
};

App.propTypes = {
  autoLoginRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  autoLoginRequest: () => dispatch(autoLoginRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
