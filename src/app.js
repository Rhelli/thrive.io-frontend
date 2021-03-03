import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes';
import NavbarContainer from './common/Navbar/NavbarContainer';
import { autoLoginRequest } from './api/authApi';

const App = ({ autoLoginRequest }) => {
  useLayoutEffect(() => {
    autoLoginRequest();
  }, []);

  return (
    <>
      <NavbarContainer />
      <Routes />
    </>
  );
};

App.propTypes = {
  autoLoginRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  autoLoginRequest: () => dispatch(autoLoginRequest()),
});

export default connect(null, mapDispatchToProps)(App);
