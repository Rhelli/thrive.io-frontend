import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './MobileNavbarContainer.module.scss';
import SignInOutComponent from './components/SignInOutComponent/SignInOutComponent';
import MobileNavbarLinksComponent from './components/MobileNavbarLinksComponent/MobileNavbarLinksComponent';

const MobileNavbarContainer = ({ authInfo }) => (
  <div className={styles.mobileNavbarContainer}>
    <MobileNavbarLinksComponent />
    <SignInOutComponent authInfo={authInfo} />
  </div>
);

MobileNavbarContainer.propTypes = {
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      email: PropTypes.string,
      name: PropTypes.string,
      user_type: PropTypes.string,
    }),
    error: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

export default connect(mapStateToProps, null)(MobileNavbarContainer);
