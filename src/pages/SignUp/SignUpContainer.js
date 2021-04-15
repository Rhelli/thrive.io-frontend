/* eslint-disable import/no-named-as-default-member */
import React, { useLayoutEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createUserRequest } from '../../api/authApi';
import SignUpFormComponent from './components/SignUpFormComponent/SignUpFormComponent';
import SignInUpBrandingHeaderComponent from '../../common/SignInUpBrandingHeaderComponent/SignInBrandingHeaderComponent';
import formValidator from '../../utils/FormUtils';
import styles from './SignUpContainer.module.scss';

const SignUpContainer = ({ createUserRequest, authInfo }) => {
  const { signedIn } = authInfo;
  const history = useHistory();

  const formInitialState = {
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    dob: '',
    dobError: '',
    password: '',
    passwordError: '',
    userType: '',
    userTypeError: '',
    advertiserType: '',
    advertiserTypeError: '',
  };

  const [formState, setFormState] = useState(formInitialState);

  console.log(`${formState.name}, ${formState.email}, ${formState.dob}, ${formState.password}, ${formState.userType}. ${formState.advertiserType}`);

  const validateForm = () => {
    if (formValidator(formState.name, 'name')) {
      setFormState({ nameError: formValidator(formState.name, 'name') });
    }
    if (formValidator(formState.email, 'email')) {
      setFormState({ emailError: formValidator(formState.email, 'email') });
    }
    if (formValidator(formState.dob, 'dob')) {
      setFormState({ dobError: formValidator(formState.dob, 'dob') });
    }
    if (formValidator(formState.password, 'password')) {
      setFormState({ passwordError: formValidator(formState.password, 'password') });
    }
    if (formValidator(formState.userType, 'userType')) {
      setFormState({ userTypeError: formValidator(formState.userType, 'userType') });
    }
    if (formState.userType === 'Advertising' && formValidator(formState.advertiserType, 'advertiserType')) {
      setFormState({ advertiserTypeError: formValidator(formState.advertiserType, 'advertiserType') });
    }
  };

  useLayoutEffect(() => {
    if (signedIn === true) {
      history.push('/');
    }
  }, [signedIn]);

  const handleUserCreation = (event, formState) => {
    event.preventDefault();
    validateForm();
    createUserRequest(formState);
  };

  return (
    <div className={styles.signUpContainer}>
      <SignInUpBrandingHeaderComponent />
      <SignUpFormComponent
        setFormState={setFormState}
        formState={formState}
        handleUserCreation={handleUserCreation}
      />
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
