import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInFormComponent from './components/SignInFormComponent';
import { signInRequest } from '../../api/authApi';

const SignInContainer = ({ signInRequest, authStatus }) => (
  <div>
    <SignInFormComponent
      signInRequest={signInRequest}
      authStatus={authStatus}
    />
  </div>
);

SignInContainer.propTypes = {
  signInRequest: PropTypes.func.isRequired,
  authStatus: PropTypes.shape({
    user: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      userType: PropTypes.string.isRequired,
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
    }).isRequired,
    error: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  signInRequest: user => dispatch(signInRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
