import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserRequest } from '../../api/authApi';
import SignUpQuizComponent from './components/SignUpQuizComponent';

const SignUpContainer = ({ createUserRequest, authInfo }) => {
  const { signedIn } = authInfo;
  const history = useHistory();

  useLayoutEffect(() => {
    if (signedIn === true) {
      history.push('/');
    }
  }, [signedIn]);

  const handleUserCreation = (event, newUser) => {
    event.preventDefault();
    createUserRequest(newUser);
  };

  return (
    <div>
      <SignUpQuizComponent handleUserCreation={handleUserCreation} />
    </div>
  );
};

SignUpContainer.propTypes = {
  createUserRequest: PropTypes.func.isRequired,
  authInfo: PropTypes.shape({
    signedIn: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = state => ({
  authInfo: state.authStore,
});

const mapDispatchToProps = dispatch => ({
  createUserRequest: newUser => dispatch(createUserRequest(newUser)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
