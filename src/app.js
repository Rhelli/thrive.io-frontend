/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes';
import NavbarContainer from './common/Navbar/NavbarContainer';
import { autoLoginRequest } from './api/authApi';

const App = ({ autoLoginRequest }) => (
  <>
    <NavbarContainer />
    <Routes />
  </>
);

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
