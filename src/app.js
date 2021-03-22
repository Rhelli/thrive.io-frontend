import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes';
import NavbarContainer from './common/MobileNavbar/MobileNavbarContainer';
import { autoLoginRequest } from './api/authApi';
import styles from './app.module.scss';

const App = ({ autoLoginRequest }) => {
  useLayoutEffect(() => {
    autoLoginRequest();
  }, []);

  return (
    <div className={styles.appContainer}>
      <Routes />
      <NavbarContainer />
    </div>
  );
};

App.propTypes = {
  autoLoginRequest: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  autoLoginRequest: () => dispatch(autoLoginRequest()),
});

export default connect(null, mapDispatchToProps)(App);
