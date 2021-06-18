import React, { useLayoutEffect, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Routes from './routes';
import MobileNavbarContainer from './common/MobileNavbar/MobileNavbarContainer';
import { autoLoginRequest } from './api/authApi';
import thriveLogo from './assets/img/thrive-full-transparent-alt.png';
import styles from './app.module.scss';

const App = ({ autoLoginRequest }) => {
  useLayoutEffect(() => {
    autoLoginRequest();
  }, []);

  const windowSizeAccess = () => {
    const [screenWidth, setScreenWidth] = useState(0);
    useEffect(() => {
      const updateWidth = () => {
        setScreenWidth(window.innerWidth);
      };
      window.addEventListener('resize', updateWidth);
      updateWidth();
      return () => window.removeEventListener('resize', updateWidth);
    }, []);
    return screenWidth;
  };

  return (
    <div className={styles.appContainer}>
      <Routes />
      <img className={styles.appLogo} src={thriveLogo} alt="Thrive" />
      {
        windowSizeAccess() < 768 && <MobileNavbarContainer />
      }
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
