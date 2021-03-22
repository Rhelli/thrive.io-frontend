import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './MobileNavbarContainer.module.scss';
import SignInOutComponent from './components/SignInOutComponent';
import MobileNavbarLinksComponent from './components/MobileNavbarLinksComponent';
import { signOut } from '../../state/auth/authActions';

const MobileNavbarContainer = ({ authInfo, signOut }) => (
  <div className={styles.mobileNavbarContainer}>
    <MobileNavbarLinksComponent />
    <SignInOutComponent
      authInfo={authInfo}
      signOut={signOut}
    />
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
  signOut: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbarContainer);
