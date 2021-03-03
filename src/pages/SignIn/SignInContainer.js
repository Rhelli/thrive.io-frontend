import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignInFormComponent from './components/SignInFormComponent';
import { signInRequest } from '../../api/authApi';

const SignInContainer = ({ signInRequest }) => (
  <div>
    <SignInFormComponent signInRequest={signInRequest} />
  </div>
);

SignInContainer.propTypes = {
  signInRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  signInRequest: user => dispatch(signInRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignInContainer);
