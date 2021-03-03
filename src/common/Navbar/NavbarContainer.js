import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from './NavbarContainer.module.scss';
import SignInOutComponent from './components/SignInOutComponent';
import NavbarLinksComponent from './components/NavbarLinksComponent';

const NavbarContainer = ({ authInfo }) => {
  const { user } = authInfo;

  return (
    <div className={styles.navbarContainer}>
      <NavbarLinksComponent />
      <SignInOutComponent user={user} />
    </div>
  );
};

NavbarContainer.propTypes = {
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.objectOf(PropTypes.string).isRequired,
    error: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

export default connect(mapStateToProps, null)(NavbarContainer);
