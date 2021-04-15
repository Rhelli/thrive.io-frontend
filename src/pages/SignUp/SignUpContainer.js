/* eslint-disable import/no-named-as-default-member */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getAge from 'get-age';
import { createUserRequest } from '../../api/authApi';
import SignUpFormComponent from './components/SignUpFormComponent/SignUpFormComponent';
import SignInUpBrandingHeaderComponent from '../../common/SignInUpBrandingHeaderComponent/SignInBrandingHeaderComponent';
import formValidator from '../../utils/FormUtils';
import styles from './SignUpContainer.module.scss';

const SignUpContainer = ({ createUserRequest }) => {
  const [userName, setName] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [dob, setDob] = useState(null);
  const [dobError, setDobError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [userType, setUserType] = useState(null);
  const [userTypeError, setUserTypeError] = useState(null);
  const [advertiserType, setAdvertiserType] = useState(null);
  const [advertiserTypeError, setAdvertiserTypeError] = useState(null);

  console.log(getAge(dob));

  const validateForm = () => {
    setNameError(formValidator(userName, 'name'));
    setEmailError(formValidator(email, 'email'));
    setDobError(formValidator(dob, 'dob'));
    setPasswordError(formValidator(password, 'password'));
    setUserTypeError(formValidator(userType, 'userType'));
    if (userType === 'Advertiser') {
      setAdvertiserTypeError(formValidator(advertiserType, 'advertiserType'));
    }
  };

  const newUser = {
    userName, email, dob, password, userType, advertiserType,
  };

  const handleUserCreation = event => {
    event.preventDefault();
    validateForm();
    createUserRequest(newUser);
  };

  return (
    <div className={styles.signUpContainer}>
      <SignInUpBrandingHeaderComponent />
      <SignUpFormComponent
        userName={userName}
        setName={setName}
        nameError={nameError}
        email={email}
        setEmail={setEmail}
        emailError={emailError}
        dob={dob}
        setDob={setDob}
        dobError={dobError}
        password={password}
        setPassword={setPassword}
        passwordError={passwordError}
        userType={userType}
        setUserType={setUserType}
        userTypeError={userTypeError}
        advertiserType={advertiserType}
        setAdvertiserType={setAdvertiserType}
        advertiserTypeError={advertiserTypeError}
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
