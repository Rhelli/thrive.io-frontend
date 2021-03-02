import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserRequest } from '../../api/authApi';
import SignUpQuizComponent from './components/SignUpQuizComponent';

const SignUpContainer = ({ createUserRequest }) => (
  <div>
    <SignUpQuizComponent createUserRequest={createUserRequest} />
  </div>
);

SignUpContainer.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  authStatus: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  createUserRequest: user => dispatch(createUserRequest(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
