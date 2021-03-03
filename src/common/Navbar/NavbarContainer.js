import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './NavbarContainer.module.scss';
import SignInOutComponent from './components/SignInOutComponent';
import NavbarLinksComponent from './components/NavbarLinksComponent';
import { signOut } from '../../state/auth/authActions';

const NavbarContainer = ({ authInfo, signOut }) => (
  <div className={styles.navbarContainer}>
    <NavbarLinksComponent />
    <SignInOutComponent
      authInfo={authInfo}
      signOut={signOut}
    />
  </div>
);

NavbarContainer.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
