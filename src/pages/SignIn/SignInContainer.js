import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInFormComponent from './components/SignInFormComponent/SignInFormComponent';
import SignInBrandingHeaderComponent from './components/SignInBrandingHeaderComponent/SignInBrandingHeaderComponent';
import { signInRequest } from '../../api/authApi';
import styles from './SignInContainer.module.scss';

const SignInContainer = ({ authInfo, signInRequest }) => (
  <div className={styles.signInContainer}>
    <SignInBrandingHeaderComponent />
    <SignInFormComponent
      signInRequest={signInRequest}
      authInfo={authInfo}
    />
  </div>
);

SignInContainer.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      email: PropTypes.string,
      userType: PropTypes.string,
      avatar: PropTypes.string,
      about: PropTypes.string,
      occupation: PropTypes.string,
      gender: PropTypes.string,
      couple: PropTypes.string,
      pets: PropTypes.arrayOf(PropTypes.string),
      smoking: PropTypes.bool,
      minBudget: PropTypes.number,
      maxBudget: PropTypes.number,
      areasLooking: PropTypes.arrayOf(PropTypes.string),
    }),
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  signInRequest: user => dispatch(signInRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
